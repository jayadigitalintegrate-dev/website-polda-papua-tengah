import { servicesData } from "../data/servicesData";
import type { ServiceItem } from "../data/servicesData";

export const serviceRepository = {
  getAll(): ServiceItem[] {
    return [...servicesData].sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
  },

  getBySlug(slug: string): ServiceItem | undefined {
    return servicesData.find(
      (item) => item.slug === slug
    );
  },

  getActive(): ServiceItem[] {
    return servicesData
      .filter((item) => item.active)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  },
};