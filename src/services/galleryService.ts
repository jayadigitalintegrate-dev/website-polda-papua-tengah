import type { GalleryItem } from "../types/gallery";
import { galleryRepository } from "../repositories/galleryRepository";

export const galleryService = {
  getAll(): GalleryItem[] {
    return galleryRepository.getAll();
  },

  getFeatured(): GalleryItem[] {
    return galleryRepository.getFeatured();
  },

  getByCategory(category: string): GalleryItem[] {
    return galleryRepository.getByCategory(category);
  },

  getBySlug(slug: string): GalleryItem | undefined {
    return galleryRepository.getBySlug(slug);
  },
};

