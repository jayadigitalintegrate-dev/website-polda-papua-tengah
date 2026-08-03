import { servicesData } from "../data/servicesData";
import type { Service } from "../types/service";

export function getAllServices(): Service[] {
  return [...servicesData];
}

export function getActiveServices(): Service[] {
  return servicesData
    .filter((item) => item.active)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getServiceBySlug(
  slug: string
): Service | undefined {
  return servicesData.find(
    (item) => item.slug === slug
  );
}
