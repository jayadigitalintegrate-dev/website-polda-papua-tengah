import "./PPID.css";

import { ppidService } from "../../services/ppidService";

export default function PPIDInfoTypes() {
  const informationTypes = ppidService.getInfoTypes();

  return (
    <section className="ppid-section">
      <div className="ppid-container">

        <div className="ppid-title">

          <span className="ppid-label dark">
            JENIS INFORMASI
          </span>

          <h2>
            Klasifikasi Informasi Publik
          </h2>

          <p>
            PPID Polda Papua Tengah menyediakan berbagai
            jenis informasi publik sesuai dengan ketentuan
            keterbukaan informasi.
          </p>

        </div>

        <div className="ppid-info-grid">

          {informationTypes.map((item) => (

            <div
              className="ppid-info-card"
              key={item.title}
            >

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

