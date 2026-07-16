import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./SolidHeader.css";

import logo from "../../../assets/logo/logo polda papua tengah.png";

import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";
import SearchButton from "../../common/SearchButton/SearchButton";

const menuItems = [
  {
    label: "Beranda",
    path: "/",
    end: true,
  },
  {
    label: "Profil",
    path: "/profil",
  },
  {
    label: "Pejabat",
    path: "/officials",
  },
  {
    label: "Berita",
    path: "/berita",
  },
  {
    label: "Galeri",
    path: "/galeri",
  },
  {
    label: "Layanan",
    path: "/layanan",
  },
  {
    label: "Kontak",
    path: "/kontak",
  },
];

export default function SolidHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`solid-header ${scrolled ? "scrolled" : ""}`}
    >
      <div className="solid-header-container">

        {/* ================= LOGO ================= */}

        <NavLink
          to="/"
          end
          className="solid-logo"
          aria-label="Beranda Polda Papua Tengah"
        >
          <img
            src={logo}
            alt="Logo Polda Papua Tengah"
            loading="lazy"
          />

          <div>
            <h2>Polda Papua Tengah</h2>

            <span>
              Integritas • Modern • Presisi
            </span>
          </div>
        </NavLink>

        {/* ================= MENU ================= */}

        <nav
          className="solid-nav"
          aria-label="Navigasi Utama"
        >
          {menuItems.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              end={menu.end}
            >
              {menu.label}
            </NavLink>
          ))}
        </nav>

        {/* ================= RIGHT MENU ================= */}

        <div className="solid-right">

          <SearchButton
            aria-label="Cari"
          />

          <LanguageSwitcher />

        </div>

      </div>
    </header>
  );
}