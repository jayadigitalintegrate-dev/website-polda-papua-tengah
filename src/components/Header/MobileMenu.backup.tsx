import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

import logo from "../../assets/logo/logo.png";

import "./Header.css";
import "./MobileMenu.css";
function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="mobile-header">

        <Link
          to="/"
          className="mobile-logo"
        >
          <img
            src={logo}
            alt="Logo Polda Papua Tengah"
          />

          <span>
            POLDA PAPUA TENGAH
          </span>

        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <Icon
            icon={
              open
                ? "solar:close-circle-linear"
                : "solar:hamburger-menu-linear"
            }
          />
        </button>

      </header>

      <nav
        className={`mobile-navigation ${
          open ? "open" : ""
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
        >
          Beranda
        </NavLink>

        <NavLink
          to="/profil"
          onClick={closeMenu}
        >
          Profil
        </NavLink>

        <NavLink
          to="/pejabat"
          onClick={closeMenu}
        >
          Pejabat
        </NavLink>

        <NavLink
          to="/berita"
          onClick={closeMenu}
        >
          Berita
        </NavLink>

        <NavLink
          to="/layanan"
          onClick={closeMenu}
        >
          Layanan
        </NavLink>

        <NavLink
          to="/program"
          onClick={closeMenu}
        >
          Program
        </NavLink>

        <NavLink
          to="/kontak"
          onClick={closeMenu}
        >
          Kontak
        </NavLink>
      </nav>
    </>
  );
}

export default MobileMenu;