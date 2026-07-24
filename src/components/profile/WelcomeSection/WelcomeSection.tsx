import "./WelcomeSection.css";
import { Link } from "react-router-dom";
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

          <Link
            to="/sambutan-kapolda"
            className="welcome-button"
          >
            Selengkapnya
          </Link>

        </div>

      </div>
    </section>
  );
}