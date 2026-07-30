import { servicesData } from "../data/servicesData";
import type { Service } from "../types/service";

export const serviceRepository = {
  getAll(): Service[] {
    return [...servicesData].sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
  },

  getBySlug(slug: string): Service | undefined {
    return servicesData.find(
      (item) => item.slug === slug
    );
  },

  getActive(): Service[] {
    return servicesData
      .filter((item) => item.active)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  },
};
