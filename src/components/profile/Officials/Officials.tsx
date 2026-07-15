import { useState } from "react";
import "./Officials.css";
import { officials } from "../../../data/officials";

export default function Officials() {
  const [selectedOfficial, setSelectedOfficial] = useState<
    (typeof officials)[0] | null
  >(null);

  return (
    <>
      <section className="officials">
        <div className="officials-container">
          <span className="officials-label">
            PEJABAT UTAMA
          </span>

          <h2 className="officials-title">
            Pejabat Utama
            <br />
            Polda Papua Tengah
          </h2>

          <p className="officials-description">
            Profil pimpinan Kepolisian Daerah Papua Tengah yang disajikan
            secara transparan sebagai bentuk keterbukaan informasi kepada
            masyarakat.
          </p>

          <div className="officials-grid">
            {officials.map((official) => (
              <div
                className="official-card"
                key={official.id}
              >
                <div className="official-photo">
                  <img
                    src={official.foto}
                    alt={official.nama}
                  />
                </div>

                <div className="official-content">
                  <h3>{official.nama}</h3>

                  <span className="official-position">
                    {official.jabatan}
                  </span>

                  <p className="official-rank">
                    {official.pangkat}
                  </p>

                  <button
                    className="official-button"
                    onClick={() => setSelectedOfficial(official)}
                  >
                    Lihat Profil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedOfficial && (
        <div
          className="official-modal-overlay"
          onClick={() => setSelectedOfficial(null)}
        >
          <div
            className="official-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedOfficial.foto}
              alt={selectedOfficial.nama}
              className="official-modal-photo"
            />

            <h2>{selectedOfficial.nama}</h2>

            <h4>{selectedOfficial.jabatan}</h4>

            <div className="official-detail">

              <p>
                <strong>Pangkat :</strong>{" "}
                {selectedOfficial.pangkat}
              </p>

              <p>
                <strong>NRP :</strong>{" "}
                {selectedOfficial.nrp}
              </p>

              <p>
                <strong>Tempat / Tanggal Lahir :</strong>{" "}
                {selectedOfficial.tempatLahir},{" "}
                {selectedOfficial.tanggalLahir}
              </p>

              <p>
                <strong>Agama :</strong>{" "}
                {selectedOfficial.agama}
              </p>

              <p>
                <strong>Status Perkawinan :</strong>{" "}
                {selectedOfficial.statusPerkawinan}
              </p>

              <p>
                <strong>Nama Pasangan :</strong>{" "}
                {selectedOfficial.namaPasangan}
              </p>

              <p>
                <strong>Jumlah Anak :</strong>{" "}
                {selectedOfficial.jumlahAnak}
              </p>

              <p>
                <strong>Motto :</strong>{" "}
                {selectedOfficial.motto}
              </p>

              <hr />

              <h3>Pendidikan</h3>

              <ul>
                {selectedOfficial.riwayatPendidikan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Riwayat Penugasan</h3>

              <ul>
                {selectedOfficial.riwayatPenugasan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Riwayat Jabatan</h3>

              <ul>
                {selectedOfficial.riwayatJabatan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Penghargaan</h3>

              <ul>
                {selectedOfficial.penghargaan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

            </div>

            <button
              className="close-modal"
              onClick={() => setSelectedOfficial(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
}