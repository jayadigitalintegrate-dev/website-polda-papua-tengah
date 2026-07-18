import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

function Logo() {
  return (
    <Link
      to="/"
      className="header-logo"
    >
      <img
        src={logo}
        alt="Logo Polda Papua Tengah"
      />

      <div className="header-logo__text">
        <h2>
          POLDA
          <br />
          PAPUA TENGAH
        </h2>

        <span>
          PROFESIONAL, MODERN & TERPERCAYA
        </span>
      </div>
    </Link>
  );
}

export default Logo;