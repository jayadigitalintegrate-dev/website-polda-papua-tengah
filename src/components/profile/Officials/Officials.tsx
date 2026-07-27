import "./Officials.css";

import OfficialGrid from "../../officials/OfficialGrid/OfficialGrid";


export default function Officials() {

  return (
    <section className="officials">

      <div className="officials-container">

        <span className="officials-label">
          PEJABAT UTAMA
        </span>


        <h2 className="officials-title">
          Struktur Pimpinan Polda Papua Tengah
        </h2>


        <p className="officials-description">
          Profil pejabat utama Polda Papua Tengah beserta riwayat
          dan informasi lengkap.
        </p>


        <OfficialGrid />

      </div>

    </section>
  );
}
