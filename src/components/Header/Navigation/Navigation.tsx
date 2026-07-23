import "./Navigation.css";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menus = [
  {
    key: "home",
    path: "/",
  },
  {
    key: "profile",
    path: "/profil",
  },
  {
    key: "officials",
    path: "/officials",
  },
  {
    key: "news",
    path: "/berita",
  },
  {
    key: "services",
    path: "/layanan",
  },
  {
    key: "contact",
    path: "/kontak",
  },
];

function Navigation() {
  const { t } = useTranslation("header");

  return (
    <nav className="navigation">
      {menus.map((menu) => (
        <NavLink
          key={menu.path}
          to={menu.path}
          className={({ isActive }) =>
            isActive
              ? "navigation__link active"
              : "navigation__link"
          }
        >
          {t(menu.key)}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;