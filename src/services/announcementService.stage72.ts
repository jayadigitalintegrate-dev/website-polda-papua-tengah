import { announcementRepository } from "../repositories/announcementRepository";

export const announcementService = {

  getAllAnnouncements() {
    return announcementRepository.getAll();
  },

  getFeaturedAnnouncements() {
    return announcementRepository.getFeatured();
  },

  getAnnouncementBySlug(slug: string) {
    return announcementRepository.getBySlug(slug);
  },

  getActiveAnnouncements() {
    return announcementRepository.getActive();
  },

};

