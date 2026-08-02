import {
  getAllAnnouncements,
  getFeaturedAnnouncements,
  getAnnouncementBySlug,
  getActiveAnnouncements,
} from "../api/announcementApi";

export const announcementRepository = {

  getAll() {
    return getAllAnnouncements();
  },

  getFeatured() {
    return getFeaturedAnnouncements();
  },

  getBySlug(slug: string) {
    return getAnnouncementBySlug(slug);
  },

  getActive() {
    return getActiveAnnouncements();
  },

};

