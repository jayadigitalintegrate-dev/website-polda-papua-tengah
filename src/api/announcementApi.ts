import { announcementData } from "../data/announcementData";
import type { Announcement } from "../types/announcement";

export function getAllAnnouncements(): Announcement[] {
  return announcementData;
}

export function getFeaturedAnnouncements(): Announcement[] {
  return announcementData.filter(
    (item) => item.featured
  );
}

export function getAnnouncementBySlug(
  slug: string
): Announcement | undefined {
  return announcementData.find(
    (item) => item.slug === slug
  );
}

export function getActiveAnnouncements(): Announcement[] {
  const today = new Date();

  return announcementData.filter(
    (item) =>
      item.status === "published" &&
      new Date(item.publishStart) <= today &&
      new Date(item.publishEnd) >= today
  );
}


