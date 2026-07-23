import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo/logo.png";

function FooterTop() {
  return (
    <section className="footer-top">

      {/* ================= BRAND ================= */}

      <div className="footer-brand">

        <div className="footer-brand-header">

          <img
            src={logo}
            alt="Logo Polda Papua Tengah"
            className="footer-logo"
          />

          <div className="footer-brand-title">
            <h3>
              POLDA
              <br />
              PAPUA TENGAH
            </h3>
          </div>

        </div>

        <p>
          Website resmi Kepolisian Daerah Papua Tengah
          sebagai sarana pelayanan publik,
          penyampaian informasi,
          transparansi,
          dan komunikasi kepada masyarakat.
        </p>

      </div>

      {/* ================= TENTANG ================= */}

      <div className="footer-column">

        <h4>Tentang</h4>

        <Link to="/profil">Profil</Link>
        <Link to="/profil">Sejarah</Link>
        <Link to="/profil">Visi &amp; Misi</Link>
        <Link to="/officials">Pejabat Utama</Link>
        <Link to="/profil">
          Struktur Organisasi
        </Link>

      </div>

      {/* ================= LAYANAN ================= */}

      <div className="footer-column">

        <h4>Layanan</h4>

        <Link to="/layanan">SPKT Online</Link>
        <Link to="/layanan">SKCK Online</Link>
        <Link to="/layanan">SIM Online</Link>
        <Link to="/kontak">Pengaduan</Link>
        <Link to="/profil">PPID</Link>

      </div>

      {/* ================= INFORMASI ================= */}

      <div className="footer-column">

        <h4>Informasi</h4>

        <Link to="/berita">Berita</Link>
        <Link to="/berita">Pengumuman</Link>
        <Link to="/berita">Agenda</Link>
        <Link to="/galeri">Galeri</Link>
        <Link to="/galeri">Download</Link>

      </div>

      {/* ================= KONTAK ================= */}

      <div className="footer-column">

        <h4>Hubungi Kami</h4>

        <p className="footer-contact">
          <Icon icon="mdi:map-marker" />
          <span>
            Jl. Pepera No. 5
            <br />
            Nabire
            <br />
            Papua Tengah
          </span>
        </p>

        <p className="footer-contact">
          <Icon icon="mdi:phone" />
          <span>082221509700</span>
        </p>

        <p className="footer-contact">
          <Icon icon="mdi:email" />
          <span>info@poldapapuatengah.go.id</span>
        </p>

        <div className="footer-social">

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Icon icon="mdi:facebook" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Icon icon="mdi:instagram" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Icon icon="mdi:youtube" />
          </a>

        </div>

      </div>

    </section>
  );
}

export default FooterTop;