import { useEffect, useState } from "react";
import "./Announcement.css";

import logo from "../../assets/logo/logo polda papua tengah.png";
import { announcement } from "../../data/announcement";

export default function Announcement() {
  const [open, setOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  useEffect(() => {
    if (!announcement.aktif) return;

    const today = new Date().toDateString();
    const saved = localStorage.getItem("announcement-hide");

    if (
      announcement.tampilSekaliPerHari &&
      saved === today
    ) {
      return;
    }

    setOpen(true);
  }, []);

  const closeAnnouncement = () => {
    if (hideToday) {
      localStorage.setItem(
        "announcement-hide",
        new Date().toDateString()
      );
    }

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="announcement-overlay">

      <div className="announcement-modal">

        {/* ===========================
            LOGO
        ============================ */}

        <div className="announcement-logo">
          <img
            src={logo}
            alt="Logo Polda Papua Tengah"
          />
        </div>

        {/* ===========================
            TITLE
        ============================ */}

        <h2 className="announcement-title">
          {announcement.judul}
        </h2>

        <div className="announcement-content">

          {/* TEXT */}

          {announcement.tipe === "text" && (
            <p className="announcement-text">
              {announcement.isi}
            </p>
          )}

          {/* IMAGE */}

          {announcement.tipe === "image" &&
            announcement.gambar && (
              <img
                src={announcement.gambar}
                alt="Pengumuman"
                className="announcement-image"
              />
            )}

          {/* YOUTUBE */}

          {announcement.tipe === "youtube" &&
            announcement.youtube && (
              <div className="announcement-video">

                <iframe
                  src={announcement.youtube}
                  title="Announcement Video"
                  allowFullScreen
                />

              </div>
            )}

        </div>

        {/* ===========================
            DOWNLOAD
        ============================ */}

        {announcement.downloadAktif &&
          announcement.downloadFile && (
            <a
              href={announcement.downloadFile}
              className="announcement-download"
              download
            >
              {announcement.downloadLabel}
            </a>
          )}

        {/* ===========================
            CHECKBOX
        ============================ */}

        <label className="announcement-checkbox">

          <input
            type="checkbox"
            checked={hideToday}
            onChange={(e) =>
              setHideToday(e.target.checked)
            }
          />

          Jangan tampilkan lagi hari ini

        </label>

        {/* ===========================
            BUTTON
        ============================ */}

        <button
          className="announcement-button"
          onClick={closeAnnouncement}
        >
          {announcement.tombolTutup}
        </button>

      </div>

    </div>
  );
}