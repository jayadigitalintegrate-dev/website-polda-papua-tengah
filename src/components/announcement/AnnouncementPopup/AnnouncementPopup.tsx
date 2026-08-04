
import { useEffect, useState } from "react";

import logo from "../../../assets/logo/logo.png";
import { fetchNews } from "../../../services/newsApi";

import type { News } from "../../../types/news";

import "./AnnouncementPopup.css";

export default function AnnouncementPopup() {
  const [announcement, setAnnouncement] =
    useState<News | null>(null);

  const [show, setShow] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadAnnouncement() {
      try {
        const news = await fetchNews();

      const popupNews = news.find((item) => {

  if (typeof item.category === "string") {
    return item.category === "pengumuman-popup";
  }

  return item.category?.slug === "pengumuman-popup";

});

        if (!mounted || !popupNews) {
          return;
        }

        setAnnouncement(popupNews);

        const today = new Date().toDateString();

        const hiddenDate = localStorage.getItem(
          "announcement-cms-hide"
        );

        if (hiddenDate === today) {
          return;
        }

        setShow(true);
      } catch (error) {
        console.error(
          "Gagal mengambil pengumuman popup dari CMS:",
          error
        );
      }
    }

    loadAnnouncement();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShow(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [show]);

  const closePopup = () => {
    if (hideToday) {
      localStorage.setItem(
        "announcement-cms-hide",
        new Date().toDateString()
      );
    }

    setShow(false);
  };

  if (!announcement || !show) {
    return null;
  }

  return (
    <div
      className="announcement-popup"
      onClick={closePopup}
    >
      <div
        className="announcement-popup__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-popup-title"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <img
          src={logo}
          alt="Logo Polda Papua Tengah"
          className="announcement-popup__logo"
        />

        <h2
          id="announcement-popup-title"
          className="announcement-popup__title"
        >
          Selamat Datang
        </h2>

        <h3 className="announcement-popup__subtitle">
          Website Resmi Polda Papua Tengah
        </h3>

        <div className="announcement-popup__card">
          {announcement.thumbnail && (
            <img
              src={announcement.thumbnail}
              alt={announcement.title}
              className="announcement-popup__image"
            />
          )}

          <h4>{announcement.title}</h4>

          <p>{announcement.excerpt}</p>
        </div>

        <label className="announcement-popup__checkbox">
          <input
            type="checkbox"
            checked={hideToday}
            onChange={(event) =>
              setHideToday(
                event.target.checked
              )
            }
          />

          Jangan tampilkan lagi hari ini
        </label>

        <button
          type="button"
          className="announcement-popup__button"
          onClick={closePopup}
        >
          Selamat Datang
        </button>
      </div>
    </div>
  );
}
