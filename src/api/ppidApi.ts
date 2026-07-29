import {
  ppidDocuments,
  ppidFaq,
  ppidTimeline,
  ppidInfoTypes,
  ppidRights,
  ppidContact,
} from "../data/ppidData";

import type { PPIDDocument } from "../types/ppid";
import type {
  PPIDFaqItem,
  PPIDTimelineStep,
  PPIDInfoType,
  PPIDRightsData,
  PPIDContactData,
} from "../data/ppidData";

export function getAllPPIDDocuments(): PPIDDocument[] {
  return ppidDocuments;
}

export function getFeaturedPPIDDocuments(): PPIDDocument[] {
  return ppidDocuments.filter(item => item.featured);
}

export function getPPIDDocumentBySlug(
  slug: string
): PPIDDocument | undefined {
  return ppidDocuments.find(item => item.slug === slug);
}

export function getPPIDFaq(): PPIDFaqItem[] {
  return ppidFaq;
}

export function getPPIDTimeline(): PPIDTimelineStep[] {
  return ppidTimeline;
}

export function getPPIDInfoTypes(): PPIDInfoType[] {
  return ppidInfoTypes;
}

export function getPPIDRights(): PPIDRightsData {
  return ppidRights;
}

export function getPPIDContact(): PPIDContactData {
  return ppidContact;
}
