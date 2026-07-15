import "./WelcomeSection.css";

import kapoldaImage from "../../../assets/kapolda/kapolda.png";

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">

        <div className="welcome-image">
          <img
            src={kapoldaImage}
            alt="Kapolda Papua Tengah"
          />
        </div>

        <div className="welcome-content">

          <span className="welcome-label">
            SAMBUTAN KAPOLDA
          </span>

          <h2>
            Selamat Datang di Website Resmi
            <br />
            Polda Papua Tengah
          </h2>

          <p>
            Website resmi ini merupakan media informasi,
            komunikasi, transparansi serta pelayanan publik
            kepada masyarakat. Kami berkomitmen memberikan
            pelayanan terbaik yang profesional, modern,
            transparan dan terpercaya.
          </p>

          <button className="welcome-button">
            Selengkapnya
          </button>

        </div>

      </div>
    </section>
  );
}