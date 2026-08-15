import { announcementData } from "../data/announcementData";
import type { Announcement } from "../types/announcement";

import { API_CONFIG } from "../config/api";

/**
 * ==========================================================
 * DATA LOKAL
 * ==========================================================
 *
 * Fungsi-fungsi berikut sengaja tetap synchronous.
 *
 * AnnouncementBanner
 * AnnouncementList
 * PengumumanDetail
 *
 * masih menggunakan data lokal agar sistem lama
 * tidak rusak.
 */

/**
 * Mengambil seluruh data pengumuman lokal.
 */
export function getAllAnnouncements(): Announcement[] {
    return announcementData;
}

/**
 * Mengambil pengumuman featured lokal.
 */
export function getFeaturedAnnouncements(): Announcement[] {
    return announcementData.filter(
        (item) => item.featured
    );
}

/**
 * Mengambil pengumuman berdasarkan slug.
 */
export function getAnnouncementBySlug(
    slug: string
): Announcement | undefined {
    return announcementData.find(
        (item) => item.slug === slug
    );
}

/**
 * Mengambil pengumuman aktif dari data lokal.
 */
export function getActiveAnnouncements(): Announcement[] {
    const today = new Date();

    return announcementData.filter((item) => {
        if (item.status !== "published") {
            return false;
        }

        const publishStart = new Date(
            item.publishStart
        );

        const publishEnd = new Date(
            item.publishEnd
        );

        return (
            publishStart <= today &&
            publishEnd >= today
        );
    });
}

/**
 * ==========================================================
 * CMS API
 * ==========================================================
 */

interface CmsAnnouncement {
    id: number;

    title: string;

    slug: string;

    description: string | null;

    content: string | null;

    image: string | null;

    image_url?: string | null;

    attachment: string | null;

    attachment_name: string | null;

    attachment_url?: string | null;

    priority:
        | "high"
        | "medium"
        | "low";

    type:
        | "banner"
        | "popup"
        | "info";

    publish_start: string | null;

    publish_end: string | null;

    featured: boolean | number;

    status:
        | "published"
        | "draft"
        | "expired"
        | "archived";

    sort_order: number;

    created_at: string;

    updated_at: string;
}

/**
 * URL dasar API CMS.
 */
function getActiveLocalPopups(): Announcement[] {
    const now = new Date();

    return announcementData
        .filter((item) => {
            if (item.status !== "published") {
                return false;
            }

            if (item.type !== "popup") {
                return false;
            }

            const start = new Date(item.publishStart);
            const end = new Date(item.publishEnd);

            return start <= now && end >= now;
        })
        .sort(
            (a, b) =>
                a.sortOrder - b.sortOrder
        );
}
const ANNOUNCEMENT_API_URL =
    API_CONFIG.baseUrl
        ? `${API_CONFIG.baseUrl}/announcements`
        : "";

/**
 * Membentuk URL media CMS.
 */
function getMediaUrl(
    url: string | null | undefined,
    path: string | null | undefined
): string {
    if (url) {
        return url;
    }

    if (!path) {
        return "";
    }

    const baseUrl =
        API_CONFIG.baseUrl.replace(
            /\/api\/?$/,
            ""
        );

    return `${baseUrl}/storage/${path}`;
}

/**
 * Mapping data CMS → tipe Announcement React.
 */
function mapCmsAnnouncement(
    item: CmsAnnouncement
): Announcement {
    return {
        id: item.id,

        title: item.title,

        slug: item.slug,

        description:
            item.description ?? "",

        content:
            item.content ?? "",

        image: getMediaUrl(
            item.image_url,
            item.image
        ),

        attachment: getMediaUrl(
            item.attachment_url,
            item.attachment
        ),

        priority: item.priority,

        type: item.type,

        publishStart:
            item.publish_start ??
            item.created_at,

        publishEnd:
            item.publish_end ??
            "2099-12-31T23:59:59",

        featured:
            item.featured === true ||
            item.featured === 1,

        status: item.status,

        sortOrder:
            typeof item.sort_order === "number"
                ? item.sort_order
                : 0,

        createdAt: item.created_at,

        updatedAt: item.updated_at,
    };
}

/**
 * ==========================================================
 * CMS POPUP
 * ==========================================================
 *
 * Fungsi ini khusus untuk AnnouncementPopup.
 *
 * Jangan digunakan untuk Banner/List/Detail lama.
 */

/**
 * Mengambil popup aktif langsung dari CMS Laravel.
 */
export async function getActivePopupAnnouncements(): Promise<
    Announcement[]
> {
    if (!ANNOUNCEMENT_API_URL) {
        return getActiveLocalPopups();
    }

    try {
        const response = await fetch(
            ANNOUNCEMENT_API_URL,
            {
                signal: AbortSignal.timeout(
                    API_CONFIG.timeout
                ),
            }
        );

        if (!response.ok) {
            throw new Error(
                `Gagal mengambil pengumuman popup dari CMS. HTTP ${response.status}`
            );
        }

        const result =
            await response.json();

        const items: CmsAnnouncement[] =
            Array.isArray(result?.value)
                ? result.value
                : Array.isArray(result)
                ? result
                : [];

        return items
            .map(mapCmsAnnouncement)
            .filter(
                (item) =>
                    item.status ===
                        "published" &&
                    item.type === "popup"
            )
            .filter((item) => {
                const now = new Date();

                const start = new Date(
                    item.publishStart
                );

                const end = new Date(
                    item.publishEnd
                );

                return (
                    start <= now &&
                    end >= now
                );
            })
            .sort(
                (a, b) =>
                    Number(b.featured) -
                        Number(a.featured) ||
                    a.sortOrder -
                        b.sortOrder
            );
    } catch (error) {
        console.warn(
            "CMS Announcement Popup tidak dapat diakses.",
            error
        );

        return [];
    }
}
