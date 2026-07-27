import { Link } from "react-router-dom";

import "./PPIDRequest.css";

export default function PPIDRequest() {
  return (
    <main className="ppid-request">

      <div className="container">

        <div className="ppid-request__hero">

          <span className="ppid-request__badge">
            PPID POLDA PAPUA TENGAH
          </span>

          <h1>
            Permohonan Informasi Publik
          </h1>

          <p>
            Silakan mengajukan permohonan informasi publik
            sesuai ketentuan Undang-Undang Nomor 14 Tahun
            2008 tentang Keterbukaan Informasi Publik.
          </p>

        </div>

        <div className="ppid-request__card">

          <h2>
            Halaman Sedang Dipersiapkan
          </h2>

          <p>
            Formulir permohonan informasi publik akan
            tersedia setelah CMS PPID selesai
            diimplementasikan.
          </p>

          <Link
            to="/ppid"
            className="ppid-request__button"
          >
            Kembali ke PPID
          </Link>

        </div>

      </div>

    </main>
  );
}
