import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./SolidHeader.css";

import logo from "../../../assets/logo/logo.png";

import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";
import SearchButton from "../../common/SearchButton/SearchButton";
import SearchModal from "../../common/SearchModal/SearchModal";


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

  const [searchOpen, setSearchOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    const handleShortcut = (
      event: KeyboardEvent
    ) => {

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {

        event.preventDefault();

        setSearchOpen(true);

      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    window.addEventListener(
      "keydown",
      handleShortcut
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );


      window.removeEventListener(
        "keydown",
        handleShortcut
      );

    };

  }, []);



  return (

    <header
      className={`solid-header ${
        scrolled ? "scrolled" : ""
      }`}
    >


      <div className="solid-header-container">


        {/* LOGO */}

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

            <h2>
              Polda Papua Tengah
            </h2>


            <span>
              Integritas • Modern • Presisi
            </span>

          </div>

        </NavLink>




        {/* DESKTOP MENU */}

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





        {/* MOBILE HAMBURGER */}

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          aria-label="Buka menu"
          aria-expanded={mobileMenuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>





        {/* MOBILE MENU */}

        {mobileMenuOpen && (

          <nav className="mobile-nav">

            {menuItems.map((menu)=>(

              <NavLink
                key={menu.path}
                to={menu.path}
                end={menu.end}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >

                {menu.label}

              </NavLink>

            ))}

          </nav>

        )}





        {/* RIGHT MENU */}

        <div className="solid-right">


          <SearchButton
            ariaLabel="Cari"
            onClick={() =>
              setSearchOpen(true)
            }
          />


          <LanguageSwitcher />


        </div>





        {/* SEARCH MODAL */}

        <SearchModal
          open={searchOpen}
          onClose={() =>
            setSearchOpen(false)
          }
        />


      </div>


    </header>

  );

}