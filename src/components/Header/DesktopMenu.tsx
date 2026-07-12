import type { RefObject } from "react";
import logo from "../../assets/logo.png";

interface DesktopMenuProps {
  logoRef: RefObject<HTMLImageElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  menuRef: RefObject<HTMLElement | null>;
}

export default function DesktopMenu({
  logoRef,
  titleRef,
  menuRef,
}: DesktopMenuProps) {
  return (
    <>
      <div className="header-trigger">
        ▼ MENU
      </div>

      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img
              ref={logoRef}
              src={logo}
              alt="Logo Polda Papua Tengah"
            />

            <h2 ref={titleRef}>
              POLDA PAPUA TENGAH
            </h2>
          </div>

          <nav
            ref={menuRef}
            className="menu desktop-menu"
          >
            <a href="#">Beranda</a>
            <a href="#">Profil</a>
            <a href="#">Berita</a>
            <a href="#">Layanan</a>
            <a href="#">Kontak</a>
          </nav>
        </div>
      </header>
    </>
  );
}