import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import "./PPIDRequest.css";

import Container from "../../components/common/Container/Container";
import { apiPost } from "../../api/client";

interface PPIDRequestApiResponse {
  message: string;
  data: {
    id: number;
    ticket: string;
    status: string;
    tanggal: string;
  };
}

interface PPIDRequestFormData {
  name: string;
  identity_number: string;
  email: string;
  phone: string;
  address: string;
  information: string;
  purpose: string;
  delivery_method: "softcopy" | "hardcopy" | "view";
}

function PPIDRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ticket, setTicket] = useState("");

  const [form, setForm] = useState<PPIDRequestFormData>({
    name: "",
    identity_number: "",
    email: "",
    phone: "",
    address: "",
    information: "",
    purpose: "",
    delivery_method: "softcopy",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await apiPost<PPIDRequestApiResponse>(
        "/api/ppid-requests",
        form
      );

      setTicket(result.data.ticket);
      setSubmitted(true);
    } catch (submitError) {
      console.error(
        "Gagal mengirim permohonan informasi publik:",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Permohonan informasi gagal dikirim. Silakan coba kembali."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setTicket("");
    setError("");

    setForm({
      name: "",
      identity_number: "",
      email: "",
      phone: "",
      address: "",
      information: "",
      purpose: "",
      delivery_method: "softcopy",
    });
  }

  return (
    <main className="ppid-request">
      <Container>
        <section className="ppid-request__hero">
          <span className="ppid-request__eyebrow">
            PPID POLDA PAPUA TENGAH
          </span>

          <h1>Permohonan Informasi Publik</h1>

          <p>
            Silakan mengajukan permohonan informasi publik melalui formulir
            berikut sesuai ketentuan Undang-Undang Nomor 14 Tahun 2008
            tentang Keterbukaan Informasi Publik.
          </p>
        </section>

        {submitted ? (
          <section className="ppid-request__success">
            <div className="ppid-request__success-icon" aria-hidden="true">
              ✓
            </div>

            <h2>Permohonan Berhasil Diajukan</h2>

            <p>
              Permohonan informasi publik Anda telah berhasil diterima oleh
              sistem PPID Polda Papua Tengah.
            </p>

            <div
              style={{
                margin: "24px auto",
                padding: "18px 22px",
                maxWidth: "460px",
                borderRadius: "12px",
                background: "#f7f9fb",
                border: "1px solid #dfe5eb",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Nomor Tiket Permohonan
              </span>

              <strong
                style={{
                  display: "block",
                  fontSize: "24px",
                  color: "#0b3d6d",
                  letterSpacing: "1px",
                }}
              >
                {ticket}
              </strong>

              <small
                style={{
                  display: "block",
                  marginTop: "8px",
                  color: "#64748b",
                }}
              >
                Simpan nomor tiket ini untuk keperluan tindak lanjut.
              </small>
            </div>

            <div className="ppid-request__actions">
              <button
                type="button"
                className="ppid-request__button ppid-request__button--primary"
                onClick={handleReset}
              >
                Ajukan Permohonan Baru
              </button>

              <Link
                to="/ppid"
                className="ppid-request__button ppid-request__button--secondary"
              >
                Kembali ke PPID
              </Link>
            </div>
          </section>
        ) : (
          <section className="ppid-request__card">
            <div className="ppid-request__card-header">
              <span className="ppid-request__card-number">01</span>

              <div>
                <h2>Data Pemohon</h2>

                <p>
                  Lengkapi identitas pemohon dengan data yang benar dan dapat
                  dipertanggungjawabkan.
                </p>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                style={{
                  marginBottom: "24px",
                  padding: "14px 16px",
                  borderRadius: "8px",
                  background: "#fff1f1",
                  border: "1px solid #f0b7b7",
                  color: "#a11a1a",
                  lineHeight: 1.6,
                }}
              >
                {error}
              </div>
            )}

            <form
              className="ppid-request__form"
              onSubmit={handleSubmit}
            >
              <div className="ppid-request__grid">
                <div className="ppid-request__field">
                  <label htmlFor="name">
                    Nama Lengkap <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ppid-request__field">
                  <label htmlFor="identity_number">
                    NIK / Nomor Identitas <span>*</span>
                  </label>

                  <input
                    id="identity_number"
                    name="identity_number"
                    type="text"
                    inputMode="numeric"
                    placeholder="Masukkan NIK atau nomor identitas"
                    value={form.identity_number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ppid-request__field">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="contoh@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ppid-request__field">
                  <label htmlFor="phone">
                    Nomor Telepon <span>*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Contoh: 08xxxxxxxxxx"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ppid-request__field">
                <label htmlFor="address">
                  Alamat Pemohon <span>*</span>
                </label>

                <textarea
                  id="address"
                  name="address"
                  rows={4}
                  placeholder="Masukkan alamat lengkap"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ppid-request__section-divider" />

              <div className="ppid-request__card-header">
                <span className="ppid-request__card-number">02</span>

                <div>
                  <h2>Informasi yang Dimohon</h2>

                  <p>
                    Jelaskan informasi publik yang ingin Anda peroleh secara
                    jelas dan spesifik.
                  </p>
                </div>
              </div>

              <div className="ppid-request__field">
                <label htmlFor="information">
                  Informasi yang Dimohon <span>*</span>
                </label>

                <textarea
                  id="information"
                  name="information"
                  rows={6}
                  placeholder="Jelaskan informasi publik yang Anda butuhkan"
                  value={form.information}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ppid-request__field">
                <label htmlFor="purpose">
                  Tujuan Penggunaan Informasi <span>*</span>
                </label>

                <textarea
                  id="purpose"
                  name="purpose"
                  rows={4}
                  placeholder="Jelaskan tujuan penggunaan informasi"
                  value={form.purpose}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ppid-request__section-divider" />

              <div className="ppid-request__card-header">
                <span className="ppid-request__card-number">03</span>

                <div>
                  <h2>Cara Memperoleh Informasi</h2>

                  <p>
                    Pilih bentuk informasi yang Anda inginkan apabila
                    permohonan dapat dipenuhi.
                  </p>
                </div>
              </div>

              <fieldset className="ppid-request__options">
                <legend>Bentuk informasi yang diinginkan</legend>

                <label className="ppid-request__option">
                  <input
                    type="radio"
                    name="delivery_method"
                    value="softcopy"
                    checked={form.delivery_method === "softcopy"}
                    onChange={handleChange}
                  />

                  <span>
                    <strong>Salinan elektronik</strong>
                    <small>
                      Informasi diberikan dalam bentuk file/dokumen digital.
                    </small>
                  </span>
                </label>

                <label className="ppid-request__option">
                  <input
                    type="radio"
                    name="delivery_method"
                    value="hardcopy"
                    checked={form.delivery_method === "hardcopy"}
                    onChange={handleChange}
                  />

                  <span>
                    <strong>Salinan cetak</strong>
                    <small>
                      Informasi diberikan dalam bentuk dokumen cetak.
                    </small>
                  </span>
                </label>

                <label className="ppid-request__option">
                  <input
                    type="radio"
                    name="delivery_method"
                    value="view"
                    checked={form.delivery_method === "view"}
                    onChange={handleChange}
                  />

                  <span>
                    <strong>Melihat langsung</strong>
                    <small>
                      Informasi ingin diperoleh dengan melihat dokumen secara
                      langsung.
                    </small>
                  </span>
                </label>
              </fieldset>

              <div className="ppid-request__notice">
                <strong>Catatan Permohonan</strong>

                <p>
                  Permohonan informasi akan diproses sesuai ketentuan
                  peraturan perundang-undangan yang berlaku. Beberapa
                  informasi dapat memiliki ketentuan pengecualian atau
                  pembatasan akses sesuai peraturan.
                </p>
              </div>

              <label className="ppid-request__agreement">
                <input type="checkbox" required />

                <span>
                  Saya menyatakan bahwa data dan informasi yang saya sampaikan
                  dalam formulir ini adalah benar dan dapat dipertanggungjawabkan.
                </span>
              </label>

              <div className="ppid-request__actions">
                <Link
                  to="/ppid"
                  className="ppid-request__button ppid-request__button--secondary"
                >
                  Kembali ke PPID
                </Link>

                <button
                  type="submit"
                  className="ppid-request__button ppid-request__button--primary"
                  disabled={loading}
                >
                  {loading
                    ? "Mengirim Permohonan..."
                    : "Ajukan Permohonan"}
                </button>
              </div>
            </form>
          </section>
        )}
      </Container>
    </main>
  );
}

export default PPIDRequest;