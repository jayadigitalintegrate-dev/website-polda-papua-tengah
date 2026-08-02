import { serviceRepository } from "../repositories/serviceRepository";

export const serviceService = {

  getAllServices() {
    return serviceRepository.getAll();
  },

  getServiceBySlug(slug: string) {
    return serviceRepository.getBySlug(slug);
  },

};

