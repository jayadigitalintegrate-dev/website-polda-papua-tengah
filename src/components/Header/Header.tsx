import { useEffect, useState } from "react";
import "./Header.css";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 992
  );

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    const scroll = () => {
      setScrolled(window.scrollY > 15);
    };

    resize();
    scroll();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <header
          className={`header ${
            scrolled ? "header-scrolled" : ""
          }`}
        >
          <DesktopMenu />
        </header>
      )}
    </>
  );
}

export default Header;
