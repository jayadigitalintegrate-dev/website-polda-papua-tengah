import { useEffect, useState } from "react";

import {
    getActivePopupAnnouncements,
} from "../../../api/announcementApi";

import type {
    PopupAnnouncementResult,
} from "../../../api/announcementApi";

import type { Announcement } from "../../../types/announcement";

import "./AnnouncementPopup.css";

const HIDE_STORAGE_KEY =
    "announcement-cms-hide";

/**
 * Nilai "jangan tampilkan lagi hari ini" terikat pada ID pengumuman,
 * sehingga pengumuman baru di hari yang sama tetap tampil.
 */
function getHideValue(id: number): string {
    return `${id}:${new Date().toDateString()}`;
}

function isHiddenToday(id: number): boolean {
    try {
        return (
            localStorage.getItem(HIDE_STORAGE_KEY) ===
            getHideValue(id)
        );
    } catch {
        return false;
    }
}

function rememberHiddenToday(id: number): void {
    try {
        localStorage.setItem(
            HIDE_STORAGE_KEY,
            getHideValue(id)
        );
    } catch {
        // Penyimpanan browser tidak tersedia; popup tetap dapat ditutup.
    }
}

/**
 * Menandai sumber data popup pada elemen <html> agar kegagalan
 * API atau snapshot usang dapat dipantau tanpa membuka konsol.
 */
function reportPopupSource(
    result: Pick<
        PopupAnnouncementResult,
        "source" | "fallback" | "snapshotAt"
    >
): void {
    const { dataset } = document.documentElement;

    dataset.cmsPopupSource = result.source;

    if (result.fallback) {
        dataset.cmsPopupFallback = result.fallback;
    } else {
        delete dataset.cmsPopupFallback;
    }

    if (result.snapshotAt) {
        dataset.cmsSnapshotAt = result.snapshotAt;
    } else {
        delete dataset.cmsSnapshotAt;
    }
}

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
                const result =
                    await getActivePopupAnnouncements();

                if (!mounted) {
                    return;
                }

                reportPopupSource(result);

                const popup =
                    result.announcements[0];

                if (!popup) {
                    return;
                }

                setAnnouncement(popup);

                if (isHiddenToday(popup.id)) {
                    return;
                }

                setShow(true);
            } catch (error) {
                console.error(
                    "Gagal mengambil pengumuman popup dari CMS:",
                    error
                );

                if (mounted) {
                    reportPopupSource({
                        source: "unavailable",
                        fallback: null,
                        snapshotAt: null,
                    });
                }
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
        if (hideToday && announcement) {
            rememberHiddenToday(announcement.id);
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
