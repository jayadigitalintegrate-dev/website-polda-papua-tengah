import { API_CONFIG } from "../config/api";

const API_URL = API_CONFIG.baseUrl
    ? `${API_CONFIG.baseUrl}/heroes`
    : "";

export interface CmsHero {
    id: number;
    image: string;
    image_url: string | null;
    sort_order: number;
}

function getImageUrl(
    image: string,
    imageUrl?: string | null
): string {
    if (imageUrl) {
        return imageUrl;
    }

    if (!image) {
        return "";
    }

    return `${API_CONFIG.baseUrl.replace(
        /\/api\/?$/,
        ""
    )}/storage/${image}`;
}

export async function fetchHeroes(): Promise<CmsHero[]> {
    // Production GitHub Pages saat VPS CMS belum tersedia.
    // Kembalikan array kosong agar Hero.tsx menggunakan
    // localHeroes sebagai fallback.
    if (!API_CONFIG.baseUrl) {
        return [];
    }

    try {
        const response = await fetch(API_URL, {
            signal: AbortSignal.timeout(API_CONFIG.timeout),
        });

        if (!response.ok) {
            throw new Error(
                `Gagal mengambil Hero dari CMS. HTTP ${response.status}`
            );
        }

        const result = await response.json();

        const heroes: CmsHero[] = Array.isArray(result)
            ? result
            : [];

        return heroes
            .map((hero) => ({
                ...hero,
                image_url: getImageUrl(
                    hero.image,
                    hero.image_url
                ),
            }))
            .sort(
                (a, b) =>
                    a.sort_order - b.sort_order
            );
    } catch (error) {
        console.warn(
            "CMS Hero tidak dapat diakses. Menggunakan Hero lokal.",
            error
        );

        return [];
    }
}