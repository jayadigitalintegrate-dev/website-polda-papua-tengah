import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Header.css";
import logo from "../assets/logo.png";

function Header() {

  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const wrapper = wrapperRef.current;
    const logo = logoRef.current;
    const title = titleRef.current;
    const menu = menuRef.current;

    if (!wrapper || !logo || !title || !menu) return;

    const menuItems = menu.querySelectorAll("a");

    gsap.set(title, {
      opacity: 0,
      x: -40
    });

    gsap.set(menuItems, {
      opacity: 0,
      y: -20
    });

    const tl = gsap.timeline({
      paused: true
    });

    tl.to(
      logo,
      {
        rotate: 360,
        duration: .8,
        ease: "power2.out"
      },
      0
    )

    .to(
      title,
      {
        opacity: 1,
        x: 0,
        duration: .25,
        ease: "power2.out"
      },
      .15
    )

    .to(
      menuItems,
      {
        opacity: 1,
        y: 0,
        duration: .10,
        stagger: .08,
        ease: "power2.out"
      },
      .25
    );

    const enter = () => tl.restart();

    wrapper.addEventListener("mouseenter", enter);

    return () => {

      wrapper.removeEventListener("mouseenter", enter);

    };

  }, []);

  return (

    <div
      className="header-wrapper"
      ref={wrapperRef}
    >

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
            className="menu"
            ref={menuRef}
          >

            <a href="#">Beranda</a>

            <a href="#">Profil</a>

            <a href="#">Berita</a>

            <a href="#">Layanan</a>

            <a href="#">Kontak</a>

          </nav>

        </div>

      </header>

    </div>

  );

}

export default Header;