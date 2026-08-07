import { useState } from "react";
import { API_CONFIG } from "../../config/api";

import "./Complaint.css";

import ComplaintTicket from "./ComplaintTicket";
import ComplaintSuccess from "./ComplaintSuccess";
import ComplaintNotification from "./ComplaintNotification";

interface ComplaintFormData {
  nama: string;
  ktp: string;
  hp: string;
  email: string;
  alamat: string;
  jenis: string;
  isi: string;
}

interface ComplaintApiResponse {
  message: string;
  data: {
    id: number;
    tiket: string;
    status: string;
    tanggal: string;
  };
}



export default function ComplaintForm() {
  const [submitted, setSubmitted] = useState(false);

  const [ticket, setTicket] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState<ComplaintFormData>({
    nama: "",
    ktp: "",
    hp: "",
    email: "",
    alamat: "",
    jenis: "",
    isi: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_CONFIG.baseUrl}/complaints`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result =
        (await response.json()) as
          | ComplaintApiResponse
          | {
              message?: string;
              errors?: Record<string, string[]>;
            };

      if (!response.ok) {
        const errorMessage =
          "message" in result && result.message
            ? result.message
            : "Pengaduan gagal dikirim. Silakan coba kembali.";

        throw new Error(errorMessage);
      }

      const successResult =
        result as ComplaintApiResponse;

      setTicket(successResult.data.tiket);

      setSubmitted(true);
    } catch (submitError) {
      console.error(
        "Gagal mengirim pengaduan:",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Terjadi kesalahan saat mengirim pengaduan. Silakan coba kembali."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <>
        <ComplaintSuccess />

        <ComplaintTicket
          ticket={ticket}
        />

        <ComplaintNotification
          nama={form.nama}
          alamat={form.alamat}
          email={form.email}
          ticket={ticket}
        />
      </>
    );
  }

  return (
    <section className="complaint-section">
      <div className="complaint-container">
        <h2>
          Form Pengaduan Masyarakat
        </h2>

        <p>
          Isi data dengan benar agar laporan
          dapat diproses oleh petugas.
        </p>

        {error && (
          <div
            role="alert"
            style={{
              marginBottom: "20px",
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
          className="complaint-form"
          onSubmit={handleSubmit}
        >
          <input
            name="nama"
            placeholder="Nama Lengkap"
            value={form.nama}
            onChange={handleChange}
            required
          />

          <input
            name="ktp"
            placeholder="Nomor KTP"
            value={form.ktp}
            onChange={handleChange}
            required
          />

          <input
            name="hp"
            placeholder="Nomor HP"
            value={form.hp}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="alamat"
            placeholder="Alamat"
            value={form.alamat}
            onChange={handleChange}
            required
          />

          <select
            name="jenis"
            value={form.jenis}
            onChange={handleChange}
            required
          >
            <option value="">
              Pilih Jenis Aduan
            </option>

            <option value="Laporan Kamtibmas">
              Laporan Kamtibmas
            </option>

            <option value="Informasi Layanan">
              Informasi Layanan
            </option>

            <option value="Pengaduan Masyarakat">
              Pengaduan Masyarakat
            </option>

            <option value="Layanan PPID">
              Layanan PPID
            </option>
          </select>

          <textarea
            name="isi"
            placeholder="Tuliskan informasi atau laporan Anda"
            value={form.isi}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="complaint-button"
            disabled={loading}
          >
            {loading
              ? "Mengirim Pengaduan..."
              : "Kirim Laporan"}
          </button>
        </form>
      </div>
    </section>
  );
}



