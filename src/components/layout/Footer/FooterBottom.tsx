import { Link } from "react-router-dom";



function FooterBottom() {
  return (
    <section className="footer-bottom">

      {/* Copyright */}

      <p>
        © 2026 Polda Papua Tengah.
        <br />
        Seluruh hak cipta dilindungi.
      </p>

      {/* Link */}

      <div className="footer-bottom-links">

        <Link to="/profil">
          Kebijakan Privasi
        </Link>

        <Link to="/profil">
          Sitemap
        </Link>

      </div>

    </section>
  );
}

export default FooterBottom;


