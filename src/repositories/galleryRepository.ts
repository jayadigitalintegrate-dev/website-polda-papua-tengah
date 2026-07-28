import type { GalleryItem } from "../types/gallery";
import {
  getAllGallery,
  getFeaturedGallery,
  getGalleryBySlug,
} from "../api/galleryApi";

export const galleryRepository = {
  getAll(): GalleryItem[] {
    return getAllGallery();
  },

  getFeatured(): GalleryItem[] {
    return getFeaturedGallery();
  },

  getByCategory(category: string): GalleryItem[] {
    if (category === "Semua") {
      return getAllGallery();
    }

    return getAllGallery().filter(
      (item) => item.category === category
    );
  },

  getBySlug(slug: string): GalleryItem | undefined {
    return getGalleryBySlug(slug);
  },
};
