import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo/logo.png";

function FooterTop() {
  return (
    <section className="footer-top">

      {/* ================= LEFT (BRAND) ================= */}

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

      {/* ================= PROFIL ================= */}

      <div className="footer-column">

        <h4>Tentang</h4>

        <Link to="/profil">Profil</Link>
        <Link to="/sejarah">Sejarah</Link>
        <Link to="/visi-misi">Visi &amp; Misi</Link>
        <Link to="/pejabat">Pejabat Utama</Link>
        <Link to="/struktur-organisasi">
          Struktur Organisasi
        </Link>

      </div>

      {/* ================= LAYANAN ================= */}

      <div className="footer-column">

        <h4>Layanan</h4>

        <Link to="/layanan/spkt">SPKT Online</Link>
        <Link to="/layanan/skck">SKCK Online</Link>
        <Link to="/layanan/sim">SIM Online</Link>
        <Link to="/pengaduan">Pengaduan</Link>
        <Link to="/ppid">PPID</Link>

      </div>

      {/* ================= INFORMASI ================= */}

      <div className="footer-column">

        <h4>Informasi</h4>

        <Link to="/news">Berita</Link>
        <Link to="/pengumuman">Pengumuman</Link>
        <Link to="/agenda">Agenda</Link>
        <Link to="/galeri">Galeri</Link>
        <Link to="/download">Download</Link>

      </div>

      {/* ================= KONTAK ================= */}

      <div className="footer-column">

        <h4>Hubungi Kami</h4>

        <p className="footer-contact">

  <Icon icon="mdi:map-marker" />

  <span>
    Jl. Merdeka
    <br />
    Nabire
    <br />
    Papua Tengah
  </span>

</p>

<p className="footer-contact">

  <Icon icon="mdi:phone" />

  <span>(0984) 000000</span>

</p>

<p className="footer-contact">

  <Icon icon="mdi:email" />

  <span>info@poldapapuatengah.go.id</span>

</p>

        <div className="footer-social">

          <a href="#">
            <Icon icon="mdi:facebook" />
          </a>

          <a href="#">
            <Icon icon="mdi:instagram" />
          </a>

          <a href="#">
            <Icon icon="mdi:youtube" />
          </a>

        </div>

      </div>

    </section>
  );
}

export default FooterTop;