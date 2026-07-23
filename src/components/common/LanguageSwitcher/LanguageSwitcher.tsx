import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const changeLanguage = (lang: "id" | "en") => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div
      className="language-switcher"
      ref={ref}
    >
      <button
        className="language-button"
        onClick={() => setOpen(!open)}
      >
        🌐 {i18n.language === "id" ? "ID" : "EN"}
      </button>

      {open && (
        <div className="language-dropdown">
          <button
            onClick={() => changeLanguage("id")}
          >
            🇮🇩 Indonesia
          </button>

          <button
            onClick={() => changeLanguage("en")}
          >
            🇬🇧 English
          </button>
        </div>
      )}
    </div>
  );
}