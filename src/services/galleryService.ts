import type { GalleryData, GalleryItem } from "../types/gallery";
import { galleryRepository } from "../repositories/galleryRepository";

export const galleryService = {
  /** Satu fetch: kategori + seluruh item Galeri. */
  getGallery(): Promise<GalleryData> {
    return galleryRepository.getGallery();
  },

  /** Filter lokal berdasarkan gallery_category_id (null = Semua). */
  filterByCategory(
    items: GalleryItem[],
    categoryId: number | null
  ): GalleryItem[] {
    if (categoryId === null) {
      return items;
    }

    return items.filter(
      (item) => item.categoryId === categoryId
    );
  },
};
