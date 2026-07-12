import logo from "../../assets/logo.png";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

function MobileMenu({
  isMenuOpen,
  toggleMenu,
  closeMenu,
}: MobileMenuProps) {
  return (
    <header className="header mobile-header">
      <div className="header-container">
        <div className="logo">
          <img
            src={logo}
            alt="Logo Polda Papua Tengah"
          />

          <h2>POLDA PAPUA TENGAH</h2>
        </div>

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <nav className={`menu mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#" onClick={closeMenu}>Beranda</a>
          <a href="#" onClick={closeMenu}>Profil</a>
          <a href="#" onClick={closeMenu}>Berita</a>
          <a href="#" onClick={closeMenu}>Layanan</a>
          <a href="#" onClick={closeMenu}>Kontak</a>
        </nav>
      </div>
    </header>
  );
}

export default MobileMenu;