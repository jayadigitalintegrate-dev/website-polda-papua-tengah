import { useEffect, useState } from "react";

import {
    getActivePopupAnnouncements,
} from "../../../api/announcementApi";

import type { Announcement } from "../../../types/announcement";

import "./AnnouncementPopup.css";

export default function AnnouncementPopup() {
    const [announcement, setAnnouncement] =
        useState<Announcement | null>(null);

    const [show, setShow] =
        useState(false);

    const [hideToday, setHideToday] =
        useState(false);

    useEffect(() => {
        let mounted = true;

        async function loadAnnouncement() {
            try {
                const announcements =
                    await getActivePopupAnnouncements();

                const popup =
                    announcements[0];

                if (!mounted || !popup) {
                    return;
                }

                const today =
                    new Date().toDateString();

                const hiddenDate =
                    localStorage.getItem(
                        "announcement-cms-hide"
                    );

                setAnnouncement(popup);

                if (
                    hiddenDate === today
                ) {
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
            document.body.style.overflow =
                "";

            return;
        }

        document.body.style.overflow =
            "hidden";

        const handleKeyDown = (
            event: KeyboardEvent
        ) => {
            if (event.key === "Escape") {
                setShow(false);
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.body.style.overflow =
                "";

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
            role="dialog"
            aria-modal="true"
            aria-labelledby="announcement-popup-title"
            onClick={closePopup}
        >
            <div
                className="announcement-popup__content"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
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
