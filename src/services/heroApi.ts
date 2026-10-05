import { API_CONFIG } from "../config/api";
import {
    fetchHomepageSnapshot,
    resolveHomepageMediaUrl,
} from "./homepageSnapshot";

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
        return resolveHomepageMediaUrl(imageUrl) ?? "";
    }

    if (!image || !API_CONFIG.baseUrl) {
        return "";
    }

    return `${API_CONFIG.baseUrl.replace(
        /\/api\/?$/,
        ""
    )}/storage/${image}`;
}

export async function fetchHeroes(): Promise<CmsHero[]> {
    let heroes: CmsHero[];

    if (!API_CONFIG.baseUrl) {
        try {
            const snapshot = await fetchHomepageSnapshot();
            heroes = snapshot.heroes as unknown as CmsHero[];
        } catch (error) {
            console.warn(
                "Snapshot CMS homepage tidak tersedia. Menggunakan Hero lokal.",
                error
            );
            return [];
        }
    } else {
        try {
            const response = await fetch(API_URL, {
                signal: AbortSignal.timeout(API_CONFIG.timeout),
            });

            if (!response.ok) {
                throw new Error(
                    "Gagal mengambil Hero dari CMS. HTTP " + response.status
                );
            }

            const result = await response.json();
            heroes = Array.isArray(result) ? result : [];
        } catch (error) {
            console.warn(
                "CMS Hero tidak dapat diakses. Menggunakan Hero lokal.",
                error
            );
            return [];
        }
    }

    return heroes
        .map((hero) => ({
            ...hero,
            image_url: getImageUrl(hero.image, hero.image_url),
        }))
        .sort((a, b) => a.sort_order - b.sort_order);
}
