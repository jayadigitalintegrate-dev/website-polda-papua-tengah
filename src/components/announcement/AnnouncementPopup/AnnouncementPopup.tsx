import { useEffect, useState } from "react";

import type { Announcement } from "../../../types/announcement";

import logo from "../../../assets/logo/logo.png";
import { announcementService } from "../../../services/announcementService";

import "./AnnouncementPopup.css";

export default function AnnouncementPopup() {
  const [show, setShow] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  const announcement = announcementService
    .getActiveAnnouncements()
    .find((item: Announcement) => item.type === "popup");

  useEffect(() => {
    if (!announcement) return;

    const today = new Date().toDateString();

    if (localStorage.getItem("announcement-hide") === today) {
      return;
    }

    setShow(true);
  }, [announcement]);

  if (!announcement || !show) {
    return null;
  }

  const closePopup = () => {
    if (hideToday) {
      localStorage.setItem(
        "announcement-hide",
        new Date().toDateString()
      );
    }

    setShow(false);
  };

  return (
    <div className="announcement-popup">

      <div className="announcement-popup__content">

        <img
          src={logo}
          alt="Logo Polda Papua Tengah"
          className="announcement-popup__logo"
        />

        <h2 className="announcement-popup__title">
          Selamat Datang
        </h2>

        <h3 className="announcement-popup__subtitle">
          Website Resmi Polda Papua Tengah
        </h3>

        <div className="announcement-popup__card">

          {announcement.image && (
            <img
              src={announcement.image}
              alt={announcement.title}
              className="announcement-popup__image"
            />
          )}

          <h4>
            {announcement.title}
          </h4>

          <p>
            {announcement.description}
          </p>

        </div>

        <label className="announcement-popup__checkbox">

          <input
            type="checkbox"
            checked={hideToday}
            onChange={(e) =>
              setHideToday(e.target.checked)
            }
          />

          Jangan tampilkan lagi hari ini

        </label>

        <button
          className="announcement-popup__button"
          onClick={closePopup}
        >
          Selamat Datang
        </button>

      </div>

    </div>
  );
}
