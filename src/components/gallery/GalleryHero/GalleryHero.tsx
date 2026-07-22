import "./GalleryHero.css";

import { Link } from "react-router-dom";

import heroImage from "../../../assets/hero/hero-poldapapua-tengah3.png";

export default function GalleryHero() {
  return (
    <section
      className="gallery-hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(8,31,56,.75),
          rgba(8,31,56,.75)
        ), url(${heroImage})`,
      }}
    >
      <div className="gallery-hero__container">

        <span className="gallery-hero__label">
          MEDIA CENTER
        </span>

        <h1>
          Galeri Dokumentasi
          <br />
          Polda Papua Tengah
        </h1>

        <p>
          Dokumentasi resmi kegiatan pimpinan,
          pelayanan masyarakat,
          operasional kepolisian,
          serta aktivitas Kepolisian Daerah Papua Tengah.
        </p>

        <nav className="gallery-breadcrumb">

          <Link to="/">
            Beranda
          </Link>

          <span>/</span>

          <span>Galeri</span>

        </nav>

      </div>
    </section>
  );
}