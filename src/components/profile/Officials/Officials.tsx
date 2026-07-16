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
                    src={official.photo}
                    alt={official.name}
                  />
                </div>

                <div className="official-content">
                  <h3>{official.name}</h3>

                  <span className="official-position">
                    {official.position}
                  </span>

                  <p className="official-rank">
                    {official.rank}
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
              src={selectedOfficial.photo}
              alt={selectedOfficial.name}
              className="official-modal-photo"
            />

            <h2>{selectedOfficial.name}</h2>

            <h4>{selectedOfficial.position}</h4>

            <div className="official-detail">

              <p>
                <strong>Pangkat :</strong>{" "}
                {selectedOfficial.rank}
              </p>

              <p>
                <strong>NRP :</strong>{" "}
                {selectedOfficial.nrp}
              </p>

              <p>
                <strong>Tempat / Tanggal Lahir :</strong>{" "}
                {selectedOfficial.birthPlace},{" "}
                {selectedOfficial.birthDate}
              </p>

              <p>
                <strong>Agama :</strong>{" "}
                {selectedOfficial.religion}
              </p>

              <p>
                <strong>Status Perkawinan :</strong>{" "}
                {selectedOfficial.maritalStatus}
              </p>

              <p>
                <strong>Nama Pasangan :</strong>{" "}
                {selectedOfficial.spouse}
              </p>

              <p>
                <strong>Jumlah Anak :</strong>{" "}
                {selectedOfficial.children}
              </p>

              <p>
                <strong>Motto :</strong>{" "}
                {selectedOfficial.motto}
              </p>

              <hr />

              <h3>Pendidikan</h3>

              <ul>
                {selectedOfficial.education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Riwayat Penugasan</h3>

              <ul>
                {selectedOfficial.assignments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Riwayat Jabatan</h3>

              <ul>
                {selectedOfficial.career.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Penghargaan</h3>

              <ul>
                {selectedOfficial.awards.map((item, index) => (
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