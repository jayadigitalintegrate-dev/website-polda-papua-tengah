import { ppidRepository } from "../repositories/ppidRepository";

export const ppidService = {
  getAllDocuments() {
    return ppidRepository.getAll();
  },

  getFeaturedDocuments() {
    return ppidRepository.getFeatured();
  },

  getDocumentBySlug(slug: string) {
    return ppidRepository.getBySlug(slug);
  },

  getFaq() {
    return ppidRepository.getFaq();
  },

  getTimeline() {
    return ppidRepository.getTimeline();
  },

  getInfoTypes() {
    return ppidRepository.getInfoTypes();
  },

  getRights() {
    return ppidRepository.getRights();
  },

  getContact() {
    return ppidRepository.getContact();
  },
};

