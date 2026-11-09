import { useEffect, useRef, useState } from "react";

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
            localStorage.getItem(`${HIDE_STORAGE_KEY}:${id}`) ===
                getHideValue(id) ||
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
            `${HIDE_STORAGE_KEY}:${id}`,
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
    const [announcements, setAnnouncements] =
        useState<Announcement[]>([]);

    const [activeIndex, setActiveIndex] =
        useState(0);

    const announcement = announcements[activeIndex] ?? null;

    const [show, setShow] =
        useState(false);

    const [hideToday, setHideToday] =
        useState(false);

    const closedRef = useRef(false);
    const hadApiSuccessRef = useRef(false);

    useEffect(() => {
        let mounted = true;
        let busy = false;

        async function refreshAnnouncements() {
            if (busy || document.visibilityState === "hidden") {
                return;
            }

            busy = true;

            try {
                const result =
                    await getActivePopupAnnouncements();

                if (!mounted) return;

                reportPopupSource(result);

                if (result.source === "unavailable") return;

                // Jangan timpa data API terbaru dengan snapshot lama
                // ketika koneksi CMS mengalami gangguan sementara.
                if (
                    hadApiSuccessRef.current &&
                    result.source !== "api"
                ) {
                    return;
                }

                if (result.source === "api") {
                    hadApiSuccessRef.current = true;
                }

                const visiblePopups = result.announcements.filter(
                    (popup) => !isHiddenToday(popup.id)
                );

                setAnnouncements(visiblePopups);
                setActiveIndex((index) =>
                    visiblePopups.length === 0
                        ? 0
                        : Math.min(index, visiblePopups.length - 1)
                );

                if (visiblePopups.length === 0) {
                    setShow(false);
                } else if (!closedRef.current) {
                    setShow(true);
                }
            } catch (error) {
                console.error(
                    "Gagal memperbarui popup CMS:",
                    error
                );
            } finally {
                busy = false;
            }
        }

        const refreshVisible = () => {
            if (document.visibilityState === "visible") {
                void refreshAnnouncements();
            }
        };

        void refreshAnnouncements();

        const timer = window.setInterval(
            refreshVisible,
            30000
        );

        document.addEventListener(
            "visibilitychange",
            refreshVisible
        );

        return () => {
            mounted = false;
            window.clearInterval(timer);
            document.removeEventListener(
                "visibilitychange",
                refreshVisible
            );
        };
    }, []);

    useEffect(() => {
        if (!show || announcements.length < 2) {
            return;
        }

        const timer = window.setInterval(() => {
            setActiveIndex((current) =>
                (current + 1) % announcements.length
            );
        }, 5000);

        return () => window.clearInterval(timer);
    }, [show, announcements.length]);

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
                closedRef.current = true;
                setShow(false);
            } else if (
                announcements.length > 1 &&
                !event.defaultPrevented &&
                !event.altKey && !event.ctrlKey && !event.metaKey &&
                (event.key === "ArrowLeft" || event.key === "ArrowRight")
            ) {
                event.preventDefault();
                const direction = event.key === "ArrowLeft" ? -1 : 1;
                setActiveIndex((current) =>
                    (current + direction + announcements.length) % announcements.length
                );
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
    }, [show, announcements.length]);

    const closePopup = () => {
        if (hideToday) {
            announcements.forEach((popup) => {
                rememberHiddenToday(popup.id);
            });
        }

        closedRef.current = true;
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

                {announcements.length > 1 && (
                    <nav className="announcement-popup__navigation" aria-label="Navigasi pengumuman">
                        <button
                            type="button"
                            className="announcement-popup__nav-button"
                            aria-label="Pengumuman sebelumnya"
                            onClick={() => setActiveIndex((current) =>
                                (current - 1 + announcements.length) % announcements.length
                            )}
                        >
                            <span aria-hidden="true">&#8249;</span>
                        </button>
                        <span
                            className="announcement-popup__position"
                            role="status"
                            aria-live="polite"
                            aria-atomic="true"
                            aria-label={`Pengumuman ${activeIndex + 1} dari ${announcements.length}`}
                        >
                            {activeIndex + 1} / {announcements.length}
                        </span>
                        <button
                            type="button"
                            className="announcement-popup__nav-button"
                            aria-label="Pengumuman berikutnya"
                            onClick={() => setActiveIndex((current) =>
                                (current + 1) % announcements.length
                            )}
                        >
                            <span aria-hidden="true">&#8250;</span>
                        </button>
                    </nav>
                )}

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
