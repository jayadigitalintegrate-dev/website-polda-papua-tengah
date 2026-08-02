import {
  getActiveServices,
  getAllServices,
  getServiceBySlug,
} from "../api/serviceApi";
import type { Service } from "../types/service";

export const serviceRepository = {

  getAll(): Service[] {
    return getAllServices();
  },

  getBySlug(
    slug: string
  ): Service | undefined {
    return getServiceBySlug(slug);
  },

  getActive(): Service[] {
    return getActiveServices();
  },

};