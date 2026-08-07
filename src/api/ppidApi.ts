import { API_CONFIG } from "../config/api";

import {
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

interface PpidApiDocument {
  id: number;
  title: string;
  slug: string;
  summary: string | null;
  content: string | null;
  document_number: string | null;
  document_name: string | null;
  document_url: string | null;
  publication_year: number | null;
  status: "published" | "draft";
  published_at: string | null;
  sort_order: number;
  view_count: number;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
}

interface PpidApiResponse {
  success: boolean;
  data: PpidApiDocument[];
}

function getAbsoluteUrl(path: string | null): string {
  if (!path) {
    return "#";
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const apiBaseUrl = API_CONFIG.baseUrl.replace(/\/api\/?$/, "");

  return `${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function mapDocument(document: PpidApiDocument): PPIDDocument {
  return {
    id: document.id,
    slug: document.slug,
    title: document.title,

    description:
      document.summary ||
      document.content ||
      "Dokumen informasi publik Polda Papua Tengah.",

    summary: document.summary || undefined,
    content: document.content || undefined,

    category:
      document.category?.name || "Informasi Publik",

    fileUrl: getAbsoluteUrl(document.document_url),

    fileType:
      document.document_name?.split(".").pop()?.toLowerCase() || "pdf",

    documentNumber:
      document.document_number || undefined,

    documentName:
      document.document_name || undefined,

    publishedAt:
      document.published_at ||
      `${document.publication_year || new Date().getFullYear()}-01-01`,

    featured: document.sort_order === 0,

    sortOrder: document.sort_order,

    status: document.status,

    viewCount: document.view_count,
  };
}

export async function getAllPPIDDocuments(): Promise<PPIDDocument[]> {
  if (API_CONFIG.useMock) {
    const { ppidDocuments } = await import("../data/ppidData");
    return ppidDocuments;
  }

  try {
    const response = await fetch(
      `${API_CONFIG.baseUrl}/ppid-documents`
    );

    if (!response.ok) {
      throw new Error(
        `Gagal mengambil dokumen PPID. HTTP ${response.status}`
      );
    }

    const result =
      (await response.json()) as PpidApiResponse;

    if (!result.success) {
      throw new Error("API PPID mengembalikan status gagal.");
    }

    return result.data.map(mapDocument);
  } catch (error) {
    console.warn(
      "API PPID belum tersedia. Menggunakan dokumen PPID lokal.",
      error
    );

    const { ppidDocuments } = await import("../data/ppidData");

    return ppidDocuments.filter(
      (document) => document.status === "published"
    );
  }
}

export async function getFeaturedPPIDDocuments(): Promise<PPIDDocument[]> {
  const documents = await getAllPPIDDocuments();

  return documents.filter(
    (document) => document.featured
  );
}

export async function getPPIDDocumentBySlug(
  slug: string
): Promise<PPIDDocument | undefined> {
  const documents = await getAllPPIDDocuments();

  return documents.find(
    (document) => document.slug === slug
  );
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
