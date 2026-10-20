import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

import "./KritikSaran.css";

import Container from "../../components/common/Container/Container";
import { API_CONFIG } from "../../config/api";
import { submitFeedback } from "../../api/feedbackApi";
import type { FeedbackCategory, FeedbackPayload } from "../../api/feedbackApi";

type FieldName = "category" | "rating" | "message" | "name" | "email" | "phone" | "consent";

interface FeedbackForm {
  category: FeedbackCategory | "";
  rating: string;
  message: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
  website: string;
}

type SubmitState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const EMPTY_FORM: FeedbackForm = {
  category: "",
  rating: "",
  message: "",
  name: "",
  email: "",
  phone: "",
  consent: false,
  website: "",
};

const CATEGORIES: { value: FeedbackCategory; label: string; hint: string }[] = [
  { value: "apresiasi", label: "Apresiasi", hint: "Pelayanan yang sudah baik dan patut dipertahankan." },
  { value: "saran", label: "Saran", hint: "Usulan perbaikan pelayanan." },
  { value: "kritik", label: "Kritik", hint: "Kekurangan pelayanan yang perlu dibenahi." },
];

const RATING_LABELS = ["Sangat buruk", "Buruk", "Cukup", "Baik", "Sangat baik"];

const MESSAGE_MIN = 10;
const MESSAGE_MAX = 5000;
const FIELD_ORDER: FieldName[] = ["category", "rating", "message", "name", "email", "phone", "consent"];

// Sama dengan StoreFeedbackRequest: Laravel memangkas spasi (TrimStrings)
// dan menghitung panjang per karakter (mb_strlen).
const length = (value: string) => Array.from(value.trim()).length;

function validate(form: FeedbackForm): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  const messageLength = length(form.message);
  const email = form.email.trim();
  const phone = form.phone.trim();

  if (!form.category) errors.category = "Kategori wajib dipilih.";
  if (!form.rating) errors.rating = "Rating wajib dipilih.";
  if (messageLength === 0) errors.message = "Pesan wajib diisi.";
  else if (messageLength < MESSAGE_MIN) errors.message = `Pesan minimal ${MESSAGE_MIN} karakter.`;
  else if (messageLength > MESSAGE_MAX) errors.message = `Pesan maksimal ${MESSAGE_MAX} karakter.`;
  if (length(form.name) > 100) errors.name = "Nama maksimal 100 karakter.";
  if (email && (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    errors.email = "Format email tidak valid.";
  }
  if (phone && !/^[0-9+\-\s]{8,20}$/.test(phone)) {
    errors.phone = "Nomor HP hanya boleh berisi angka, spasi, +, atau -, minimal 8 karakter.";
  }
  if (!form.consent) errors.consent = "Persetujuan penggunaan data wajib dicentang.";

  return errors;
}

function KritikSaran() {
  const [form, setForm] = useState<FeedbackForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [state, setState] = useState<SubmitState>({ kind: "idle" });
  // Penjaga submit ganda: berlaku sebelum render ulang menonaktifkan tombol.
  const sendingRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const serviceAvailable = Boolean(API_CONFIG.baseUrl);
  const messageLength = length(form.message);

  function update(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = event.target;
    const next = type === "checkbox" ? (event.target as HTMLInputElement).checked : value;

    setForm((current) => ({ ...current, [name]: next }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (state.kind === "error") setState({ kind: "idle" });
  }

  function focusFirstError(fieldErrors: Partial<Record<FieldName, string>>) {
    const first = FIELD_ORDER.find((field) => fieldErrors[field]);
    if (!first) return;
    const target = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
    target?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sendingRef.current) return;

    if (!serviceAvailable) {
      setState({
        kind: "error",
        message: "Layanan Kritik & Saran secara daring belum tersedia. Silakan sampaikan masukan melalui kontak resmi Polda Papua Tengah.",
      });
      return;
    }

    const fieldErrors = validate(form);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      setState({ kind: "error", message: "Periksa kembali isian yang ditandai." });
      focusFirstError(fieldErrors);
      return;
    }

    const payload: FeedbackPayload = {
      category: form.category as FeedbackCategory,
      rating: Number(form.rating),
      message: form.message.trim(),
      consent: true,
      website: form.website,
    };
    if (form.name.trim()) payload.name = form.name.trim();
    if (form.email.trim()) payload.email = form.email.trim();
    if (form.phone.trim()) payload.phone = form.phone.trim();

    sendingRef.current = true;
    setState({ kind: "sending" });

    try {
      const result = await submitFeedback(payload);

      switch (result.kind) {
        case "success":
          setForm(EMPTY_FORM);
          setErrors({});
          setState({ kind: "success" });
          break;
        case "validation": {
          const serverErrors: Partial<Record<FieldName, string>> = {};
          for (const field of FIELD_ORDER) {
            const messages = result.errors[field];
            if (Array.isArray(messages) && messages[0]) serverErrors[field] = String(messages[0]);
          }
          setErrors(serverErrors);
          setState({
            kind: "error",
            message: Object.keys(serverErrors).length > 0
              ? "Periksa kembali isian yang ditandai."
              : "Masukan tidak dapat diproses. Silakan periksa isian lalu coba lagi.",
          });
          focusFirstError(serverErrors);
          break;
        }
        case "rate_limited": {
          const minutes = result.retryAfterSeconds ? Math.ceil(result.retryAfterSeconds / 60) : null;
          setState({
            kind: "error",
            message: minutes
              ? `Batas pengiriman tercapai. Silakan coba lagi dalam ${minutes} menit.`
              : "Batas pengiriman tercapai. Silakan coba lagi beberapa saat lagi.",
          });
          break;
        }
        case "unavailable":
          setState({
            kind: "error",
            message: "Layanan Kritik & Saran secara daring belum tersedia. Silakan sampaikan masukan melalui kontak resmi Polda Papua Tengah.",
          });
          break;
        case "network":
          setState({
            kind: "error",
            message: "Masukan belum terkirim karena koneksi ke layanan terputus atau terlalu lama. Periksa jaringan Anda lalu coba lagi.",
          });
          break;
        default:
          setState({
            kind: "error",
            message: "Layanan sedang mengalami gangguan. Silakan coba lagi nanti.",
          });
      }
    } finally {
      sendingRef.current = false;
    }
  }

  const sending = state.kind === "sending";
  const describe = (field: FieldName, extra?: string) =>
    [errors[field] ? `${field}-error` : "", extra ?? ""].filter(Boolean).join(" ") || undefined;

  return (
    <main className="kritik-saran">
      <Container>
        <section className="kritik-saran__hero">
          <span className="kritik-saran__eyebrow">POLDA PAPUA TENGAH</span>
          <h1>Kritik &amp; Saran</h1>
          <p>
            Sampaikan apresiasi, saran, atau kritik terhadap pelayanan Polda Papua Tengah.
            Masukan Anda membantu kami meningkatkan kualitas pelayanan kepada masyarakat.
          </p>
        </section>

        {state.kind === "success" ? (
          <section className="kritik-saran__success" role="status" aria-live="polite">
            <div className="kritik-saran__success-icon" aria-hidden="true">✓</div>
            <h2>Masukan Berhasil Diterima</h2>
            <p>
              Terima kasih. Masukan Anda telah kami terima dan akan ditinjau oleh petugas.
              Masukan tidak ditampilkan kepada publik.
            </p>
            <div className="kritik-saran__actions">
              <button
                type="button"
                className="kritik-saran__button kritik-saran__button--primary"
                onClick={() => setState({ kind: "idle" })}
              >
                Kirim Masukan Lain
              </button>
              <Link to="/" className="kritik-saran__button kritik-saran__button--secondary">
                Kembali ke Beranda
              </Link>
            </div>
          </section>
        ) : (
          <section className="kritik-saran__card">
            {!serviceAvailable && (
              <div className="kritik-saran__alert" role="alert">
                Layanan Kritik &amp; Saran secara daring belum tersedia. Silakan sampaikan masukan
                melalui <Link to="/kontak">kontak resmi</Link> Polda Papua Tengah.
              </div>
            )}

            <div className="kritik-saran__status" role="status" aria-live="polite">
              {sending && "Mengirim masukan..."}
            </div>

            {state.kind === "error" && (
              <div className="kritik-saran__alert" role="alert">
                {state.message}
              </div>
            )}

            <form ref={formRef} className="kritik-saran__form" onSubmit={handleSubmit} noValidate>
              <fieldset className="kritik-saran__options" aria-describedby={describe("category")} aria-invalid={errors.category ? true : undefined}>
                <legend>Kategori <span aria-hidden="true">*</span></legend>
                <div className="kritik-saran__option-grid">
                  {CATEGORIES.map((category) => (
                    <label key={category.value} className="kritik-saran__option">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={form.category === category.value}
                        onChange={update}
                        disabled={sending}
                      />
                      <span>
                        <strong>{category.label}</strong>
                        <small>{category.hint}</small>
                      </span>
                    </label>
                  ))}
                </div>
                {errors.category && <p id="category-error" className="kritik-saran__error">{errors.category}</p>}
              </fieldset>

              <fieldset className="kritik-saran__options" aria-describedby={describe("rating")} aria-invalid={errors.rating ? true : undefined}>
                <legend>Penilaian Pelayanan <span aria-hidden="true">*</span></legend>
                <div className="kritik-saran__rating">
                  {RATING_LABELS.map((label, index) => {
                    const value = String(index + 1);
                    return (
                      <label key={value} className="kritik-saran__rating-item">
                        <input
                          type="radio"
                          name="rating"
                          value={value}
                          checked={form.rating === value}
                          onChange={update}
                          disabled={sending}
                        />
                        <span>
                          <strong>{value}</strong>
                          <small>{label}</small>
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors.rating && <p id="rating-error" className="kritik-saran__error">{errors.rating}</p>}
              </fieldset>

              <div className="kritik-saran__field">
                <label htmlFor="message">Pesan <span aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  maxLength={MESSAGE_MAX + 50}
                  placeholder="Tuliskan masukan Anda (minimal 10 karakter)"
                  value={form.message}
                  onChange={update}
                  disabled={sending}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={describe("message", "message-count")}
                />
                <small id="message-count" className="kritik-saran__counter">
                  {messageLength}/{MESSAGE_MAX} karakter
                </small>
                {errors.message && <p id="message-error" className="kritik-saran__error">{errors.message}</p>}
              </div>

              <div className="kritik-saran__section-divider" />

              <p className="kritik-saran__optional">
                Identitas di bawah ini <strong>opsional</strong>. Isi bila Anda bersedia dihubungi untuk tindak lanjut.
              </p>

              <div className="kritik-saran__grid">
                <div className="kritik-saran__field">
                  <label htmlFor="name">Nama</label>
                  <input id="name" name="name" type="text" maxLength={100} autoComplete="name"
                    value={form.name} onChange={update} disabled={sending}
                    aria-invalid={errors.name ? true : undefined} aria-describedby={describe("name")} />
                  {errors.name && <p id="name-error" className="kritik-saran__error">{errors.name}</p>}
                </div>

                <div className="kritik-saran__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" maxLength={255} autoComplete="email"
                    placeholder="contoh@email.com" value={form.email} onChange={update} disabled={sending}
                    aria-invalid={errors.email ? true : undefined} aria-describedby={describe("email")} />
                  {errors.email && <p id="email-error" className="kritik-saran__error">{errors.email}</p>}
                </div>

                <div className="kritik-saran__field">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <input id="phone" name="phone" type="tel" maxLength={20} autoComplete="tel"
                    placeholder="Contoh: 0812 3456 7890" value={form.phone} onChange={update} disabled={sending}
                    aria-invalid={errors.phone ? true : undefined} aria-describedby={describe("phone")} />
                  {errors.phone && <p id="phone-error" className="kritik-saran__error">{errors.phone}</p>}
                </div>
              </div>

              {/* Honeypot: tersembunyi dari pengguna dan pembaca layar. */}
              <div className="kritik-saran__hp" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off"
                  value={form.website} onChange={update} />
              </div>

              <div className="kritik-saran__notice">
                <strong>Privasi</strong>
                <p>
                  Masukan hanya dibaca petugas Polda Papua Tengah untuk evaluasi dan tindak lanjut pelayanan,
                  dan tidak ditampilkan kepada publik. Nama, email, dan nomor telepon bersifat opsional dan
                  hanya dipakai untuk menghubungi Anda bila diperlukan. Jangan mencantumkan data pribadi orang lain
                  atau informasi rahasia di dalam pesan.
                </p>
              </div>

              <label className="kritik-saran__agreement">
                <input type="checkbox" name="consent" checked={form.consent} onChange={update} disabled={sending}
                  aria-invalid={errors.consent ? true : undefined} aria-describedby={describe("consent")} />
                <span>
                  Saya menyetujui penggunaan data yang saya sampaikan untuk keperluan evaluasi dan tindak lanjut
                  pelayanan sesuai keterangan privasi di atas. <span aria-hidden="true">*</span>
                </span>
              </label>
              {errors.consent && <p id="consent-error" className="kritik-saran__error">{errors.consent}</p>}

              <div className="kritik-saran__actions">
                <Link to="/" className="kritik-saran__button kritik-saran__button--secondary">
                  Kembali
                </Link>
                <button
                  type="submit"
                  className="kritik-saran__button kritik-saran__button--primary"
                  disabled={sending || !serviceAvailable}
                  aria-disabled={sending || !serviceAvailable}
                >
                  {sending ? "Mengirim..." : "Kirim Masukan"}
                </button>
              </div>
            </form>
          </section>
        )}
      </Container>
    </main>
  );
}

export default KritikSaran;
