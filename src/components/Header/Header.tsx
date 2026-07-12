import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import "./Header.css";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  // ==========================
  // GSAP Animation (Desktop Only)
  // ==========================
  useEffect(() => {
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    const logoElement = logoRef.current;
    const title = titleRef.current;
    const menu = menuRef.current;

    if (!wrapper || !logoElement || !title || !menu) return;

    const menuItems = menu.querySelectorAll("a");

    gsap.set(title, {
      opacity: 0,
      x: -40,
    });

    gsap.set(menuItems, {
      opacity: 0,
      y: -20,
    });

    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(
      logoElement,
      {
        rotate: 360,
        duration: 0.8,
        ease: "power2.out",
      },
      0
    )
      .to(
        title,
        {
          opacity: 1,
          x: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        0.15
      )
      .to(
        menuItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.25
      );

    const enter = () => tl.restart();

    wrapper.addEventListener("mouseenter", enter);

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
    };
  }, [isMobile]);

  // ==========================
  // Detect Screen Size
  // ==========================
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className={`header-wrapper ${isOpen || isMobile ? "open" : ""}`}
      ref={wrapperRef}
      onMouseEnter={() => {
        if (!isMobile) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setIsOpen(false);
      }}
    >
      {!isMobile && (
        <div
          className="header-hover-area"
          onMouseEnter={() => setIsOpen(true)}
        />
      )}

      {isMobile ? (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      ) : (
        <DesktopMenu
          logoRef={logoRef}
          titleRef={titleRef}
          menuRef={menuRef}
        />
      )}
    </div>
  );
}

export default Header;