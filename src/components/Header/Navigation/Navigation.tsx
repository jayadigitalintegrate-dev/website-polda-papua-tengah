import "./Navigation.css";

import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Beranda",
    path: "/",
  },
  {
    title: "Profil",
    path: "/profil",
  },
  {
  title: "Pejabat",
  path: "/officials",
},
  {
    title: "Berita",
    path: "/berita",
  },
  {
    title: "Layanan",
    path: "/layanan",
  },
  // {
//   title: "Program",
//   path: "/program",
// },
  {
    title: "Kontak",
    path: "/kontak",
  },
];

function Navigation() {
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
          {menu.title}
        </NavLink>

      ))}

    </nav>
  );
}

export default Navigation;