export type AnnouncementPriority =
  | "high"
  | "medium"
  | "low";

export type AnnouncementType =
  | "banner"
  | "popup"
  | "info";

export interface Announcement {
  id: number;

  slug: string;

  title: string;

  description: string;

  image?: string;

  priority: AnnouncementPriority;

  type: AnnouncementType;

  publishStart: string;

  publishEnd: string;

  featured: boolean;

  status: "published" | "draft";
}
