import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { submitFeedback } from "../../../api/feedbackApi";
import type { FeedbackCategory, FeedbackPayload } from "../../../api/feedbackApi";
import "./ContactForm.css";

export default function ContactForm() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<FeedbackCategory>("apresiasi");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");
  const [success, setSuccess] = useState(false);
  const inFlight = useRef(false);
  const successDialog = useRef<HTMLDialogElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = successDialog.current;
    if (!success || !dialog) return;
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [success]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    setSuccess(false);
    const trimmedMessage = message.trim();
    if (!consent || trimmedMessage.length < 10 || trimmedMessage.length > 5000 ||
        !Number.isInteger(rating) || rating < 1 || rating > 5 ||
        !["apresiasi", "saran", "kritik"].includes(category)) {
      setNotice("Pilih kategori dan rating 1-5, isi pesan 10-5000 karakter, serta berikan persetujuan.");
      return;
    }

    const payload: FeedbackPayload = {
      category,
      rating,
      message: trimmedMessage,
      consent: true,
      website,
      ...(name.trim() ? { name: name.trim() } : {}),
      ...(email.trim() ? { email: email.trim() } : {}),
      ...(phone.trim() ? { phone: phone.trim() } : {}),
    };
    inFlight.current = true;
    setSending(true);
    setNotice("");
    try {
      const result = await submitFeedback(payload);
      switch (result.kind) {
        case "success":
          setSuccess(true);
          setNotice("Terima kasih. Masukan Anda berhasil dikirim.");
          break;
        case "validation":
          setNotice("Masukan belum dapat diterima (422). Periksa kategori, rating, pesan, persetujuan, dan format identitas jika diisi.");
          break;
        case "rate_limited":
          setNotice(result.retryAfterSeconds
            ? `Terlalu banyak pengiriman (429). Tunggu ${result.retryAfterSeconds} detik sebelum mencoba kembali.`
            : "Terlalu banyak pengiriman (429). Silakan coba kembali nanti.");
          break;
        case "unavailable":
          setNotice("Layanan masukan belum tersedia. Silakan coba kembali nanti.");
          break;
        case "network":
          setNotice("Koneksi gagal atau waktu tunggu habis. Status pengiriman belum dapat dipastikan. Silakan periksa koneksi sebelum mencoba kembali.");
          break;
        case "server":
          setNotice("Layanan mengalami kesalahan. Silakan coba kembali nanti.");
          break;
      }
    } catch {
      setNotice("Pengiriman belum dapat dipastikan karena terjadi kesalahan. Silakan coba kembali nanti.");
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }

  return (
    <section className="contact-form">

      <div className="contact-form__header">

        <span className="contact-form__badge">
          Kritik • Saran • Apresiasi
        </span>

        <h2>
          Kritik & Saran Masyarakat
        </h2>

        <p>
          Masukan Anda sangat berarti bagi kami dalam meningkatkan kualitas
          pelayanan Polda Papua Tengah.
        </p>

      </div>

      <form className="contact-form__form" onSubmit={handleSubmit} aria-busy={sending}>

        <div className="contact-form__group">

          <label htmlFor="contact-name">Nama Lengkap (opsional)</label>

          <input
            type="text"
            id="contact-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Masukkan nama lengkap"
          />

        </div>

        <div className="contact-form__group">

          <label htmlFor="contact-email">Email (opsional)</label>

          <input
            type="email"
            id="contact-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Masukkan email"
          />

        </div>

        <div className="contact-form__group">

          <label htmlFor="contact-phone">Nomor HP (opsional)</label>

          <input
            type="text"
            id="contact-phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="08xxxxxxxxxx"
          />

        </div>

        <div className="contact-form__group">

          <label htmlFor="contact-category">Kategori *</label>

          <select id="contact-category" value={category} onChange={(event) => setCategory(event.target.value as FeedbackCategory)} required>

            <option value="apresiasi">Apresiasi</option>

            <option value="saran">Saran</option>

            <option value="kritik">Kritik</option>

          </select>

        </div>

        <div className="contact-form__group">

          <label>Rating Pelayanan</label>

          <div className="contact-form__rating">

            {[1,2,3,4,5].map((item)=>(
              <button
                type="button"
                key={item}
                aria-label={`${item} bintang`}
                aria-pressed={item === rating}
                onClick={()=>setRating(item)}
                className={
                  item <= rating
                    ? "star active"
                    : "star"
                }
              >
                ★
              </button>
            ))}

          </div>

        </div>

        <div className="contact-form__group">

          <label htmlFor="contact-message">Pesan * (10-5000 karakter)</label>

          <textarea
            id="contact-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            placeholder="Tuliskan kritik, saran atau apresiasi Anda..."
          />

        </div>

        <label className="contact-form__agreement">

          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />

          Saya menyetujui pesan dan data identitas yang saya isi digunakan untuk menindaklanjuti masukan dan keperluan pelayanan masyarakat (wajib).

        </label>

        <div hidden aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" type="text" value={website}
            onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
        </div>

        {!success && notice && <p role="alert">{notice}</p>}

        <button
          ref={submitButton}
          disabled={sending}
          type="submit"
          className="contact-form__button"
        >
          {sending ? "Mengirim..." : "Kirim Kritik & Saran"}
        </button>

      </form>

      {success && (
        <>
          <style>{`
            #contact-feedback-success::backdrop {
              background: rgba(8, 25, 45, 0.65);
              animation: contact-feedback-backdrop-in 180ms ease-out;
            }
            #contact-feedback-success[open] {
              animation: contact-feedback-modal-in 220ms ease-out;
            }
            @keyframes contact-feedback-modal-in {
              from { opacity: 0; transform: translateY(12px) scale(0.96); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes contact-feedback-backdrop-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            #contact-feedback-success .contact-feedback-sparkle {
              position: absolute;
              width: 14px;
              height: 14px;
              background: currentColor;
              clip-path: polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%);
              pointer-events: none;
              animation: contact-feedback-sparkle 2.4s ease-in-out 2;
            }
            @keyframes contact-feedback-sparkle {
              0%, 100% { opacity: 0.35; transform: scale(0.7) rotate(0deg); }
              50% { opacity: 1; transform: scale(1.1) rotate(30deg); }
            }
            @media (prefers-reduced-motion: reduce) {
              #contact-feedback-success[open],
              #contact-feedback-success::backdrop,
              #contact-feedback-success .contact-feedback-sparkle { animation: none; }
            }
          `}</style>
          <dialog
            ref={successDialog}
            id="contact-feedback-success"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-feedback-success-title"
            aria-describedby="contact-feedback-success-description"
            onClose={() => {
              setSuccess(false);
              setNotice("");
              submitButton.current?.focus();
            }}
            style={{
              width: "min(480px, calc(100vw - 32px))",
              maxHeight: "calc(100dvh - 32px)",
              boxSizing: "border-box",
              margin: "auto",
              padding: "clamp(24px, 5vw, 40px)",
              border: 0,
              borderRadius: 24,
              background: "#ffffff",
              color: "#0B4F8A",
              boxShadow: "0 24px 80px rgba(8, 25, 45, 0.3)",
              textAlign: "center",
              overflowY: "auto",
            }}
          >
            <div aria-hidden="true" style={{
              width: 64, height: 64, margin: "0 auto 20px", borderRadius: "50%",
              background: "#DCFCE7", color: "#15803D", position: "relative",
              display: "grid", placeItems: "center",
            }}>
              <span className="contact-feedback-sparkle" style={{ top: -7, right: -5 }} />
              <span className="contact-feedback-sparkle" style={{ top: 16, left: -12, width: 10, height: 10, animationDelay: "160ms" }} />
              <span className="contact-feedback-sparkle" style={{ bottom: -5, right: 0, width: 10, height: 10, animationDelay: "320ms" }} />
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 id="contact-feedback-success-title" style={{ margin: "0 0 12px", fontSize: "clamp(1.6rem, 5vw, 2rem)" }}>
              Terima Kasih!
            </h2>
            <div id="contact-feedback-success-description" style={{ lineHeight: 1.7 }}>
              <p style={{ margin: "0 0 16px", fontWeight: 600 }}>
                Atas Apresiasi, Saran, atau Kritik Anda
              </p>
              <p style={{ margin: "0 0 24px", color: "#475569" }}>
                Masukan Anda sangat berarti bagi kami dalam membangun pelayanan kepolisian yang lebih baik lagi.
              </p>
              <p style={{ margin: "0 0 24px" }}>
                Hormat Kami,<br />
                <strong>POLDA PAPUA TENGAH</strong>
              </p>
            </div>
            <button
              type="button"
              autoFocus
              className="contact-form__button"
              style={{ width: "100%" }}
              onClick={() => {
                setName("");
                setEmail("");
                setPhone("");
                setCategory("apresiasi");
                setMessage("");
                setRating(5);
                setConsent(false);
                setWebsite("");
                successDialog.current?.close();
              }}
            >
              Selesai
            </button>
          </dialog>
        </>
      )}

    </section>
  );
}
