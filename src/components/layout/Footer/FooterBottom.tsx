import { Link } from "react-router-dom";

import presisi from "../../../assets/logo/presisi.png";

function FooterBottom() {
  return (
    <section className="footer-bottom">

      {/* Copyright */}

      <p>
        © 2026 Polda Papua Tengah.
        <br />
        Seluruh hak cipta dilindungi.
      </p>

      {/* Logo Presisi */}

      <div className="footer-presisi">

        <img
          src={presisi}
          alt="Presisi Polri"
        />

      </div>

      {/* Link */}

      <div className="footer-bottom-links">

        <Link to="/privacy">
          Kebijakan Privasi
        </Link>

        <Link to="/sitemap">
          Sitemap
        </Link>

      </div>

    </section>
  );
}

export default FooterBottom;