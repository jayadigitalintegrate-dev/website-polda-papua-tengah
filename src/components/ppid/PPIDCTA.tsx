import { Link } from "react-router-dom";

import "./PPID.css";

export default function PPIDCTA() {
  return (
    <section className="ppid-cta">

      <div className="ppid-container">

        <h2>
          Membutuhkan Informasi Publik?
        </h2>

        <p>
          Ajukan permohonan informasi kepada
          PPID Polda Papua Tengah.
        </p>

        <Link
          to="/ppid/request"
          className="ppid-button"
        >
          Ajukan Permohonan Informasi
        </Link>

      </div>

    </section>
  );
}
