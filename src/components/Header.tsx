import "../styles/Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Polda Papua Tengah" />
        <h2>POLDA PAPUA TENGAH</h2>
      </div>

      <nav className="menu">
        <a href="#">Beranda</a>
        <a href="#">Profil</a>
        <a href="#">Berita</a>
        <a href="#">Layanan</a>
        <a href="#">Kontak</a>
      </nav>
    </header>
  );
}

export default Header;