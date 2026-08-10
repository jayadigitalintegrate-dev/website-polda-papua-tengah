import { API_CONFIG } from "../config/api";

const API_URL = `${API_CONFIG.baseUrl}/heroes`;

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

  return `${API_CONFIG.baseUrl.replace(/\/api\/?$/, "")}/storage/${image}`;
}

export async function fetchHeroes(): Promise<CmsHero[]> {
  const response = await fetch(API_URL);

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
}