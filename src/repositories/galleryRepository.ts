import type { GalleryData } from "../types/gallery";
import { fetchGallery } from "../api/galleryApi";

export const galleryRepository = {
  getGallery(): Promise<GalleryData> {
    return fetchGallery();
  },
};
