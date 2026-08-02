import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

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
        type="button"
        aria-label="Pilih bahasa"
        onClick={() => setOpen(!open)}
      >
        <Icon
          icon="mdi:web"
          width="20"
          height="20"
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="language-dropdown">
          <button
            type="button"
            onClick={() => changeLanguage("id")}
          >
            <Icon
              icon="twemoji:flag-indonesia"
              width="20"
              height="20"
              aria-hidden="true"
            />
            Indonesia
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("en")}
          >
            <Icon
              icon="twemoji:flag-united-kingdom"
              width="20"
              height="20"
              aria-hidden="true"
            />
            English
          </button>
        </div>
      )}
    </div>
  );
}