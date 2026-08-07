import {
  getAllPPIDDocuments,
  getFeaturedPPIDDocuments,
  getPPIDDocumentBySlug,
  getPPIDFaq,
  getPPIDTimeline,
  getPPIDInfoTypes,
  getPPIDRights,
  getPPIDContact,
} from "../api/ppidApi";

export const ppidRepository = {
  getAll() {
    return getAllPPIDDocuments();
  },

  getFeatured() {
    return getFeaturedPPIDDocuments();
  },

  getBySlug(slug: string) {
    return getPPIDDocumentBySlug(slug);
  },

  getFaq() {
    return getPPIDFaq();
  },

  getTimeline() {
    return getPPIDTimeline();
  },

  getInfoTypes() {
    return getPPIDInfoTypes();
  },

  getRights() {
    return getPPIDRights();
  },

  getContact() {
    return getPPIDContact();
  },
};