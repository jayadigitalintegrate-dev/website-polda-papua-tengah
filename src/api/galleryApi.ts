import { galleryData } from "../data/galleryData";
import type { GalleryItem } from "../types/gallery";

export function getAllGallery(): GalleryItem[] {
  return galleryData;
}

export function getFeaturedGallery(): GalleryItem[] {
  return galleryData.filter(item => item.featured);
}

export function getGalleryBySlug(slug: string): GalleryItem | undefined {
  return galleryData.find(item => item.slug === slug);
}
