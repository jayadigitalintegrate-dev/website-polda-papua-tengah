import { API_CONFIG } from "../config/api";

export interface NewsEngagement {
  views: number;
  likes: number;
  liked: boolean;
}

const STORAGE_KEY = "polda-news-visitor-v1";
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
let fallbackVisitorId: string | null = null;

export function isNewsEngagementConfigured(): boolean {
  return Boolean(API_CONFIG.baseUrl);
}

function getVisitorId(): string | null {
  if (!isNewsEngagementConfigured() || typeof window === "undefined") {
    return null;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && UUID_PATTERN.test(saved)) return saved;
  } catch {
    // Private browsing can block localStorage; keep an in-memory identifier.
  }

  if (fallbackVisitorId) return fallbackVisitorId;
  if (typeof crypto === "undefined" || typeof crypto.randomUUID !== "function") {
    return null;
  }

  fallbackVisitorId = crypto.randomUUID();

  try {
    window.localStorage.setItem(STORAGE_KEY, fallbackVisitorId);
  } catch {
    // Same-tab operation still works; cross-reload uniqueness is unavailable.
  }

  return fallbackVisitorId;
}

async function send(
  slug: string,
  action: "view" | "like",
  payload: Record<string, string | boolean>
): Promise<NewsEngagement> {
  const response = await fetch(
    `${API_CONFIG.baseUrl}/news/${encodeURIComponent(slug)}/${action}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(API_CONFIG.timeout),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`News engagement unavailable (HTTP ${response.status})`);
  }

  const result: unknown = await response.json();
  if (
    !result || typeof result !== "object" ||
    typeof (result as NewsEngagement).views !== "number" ||
    typeof (result as NewsEngagement).likes !== "number" ||
    typeof (result as NewsEngagement).liked !== "boolean"
  ) {
    throw new Error("Invalid news engagement response");
  }
  return result as NewsEngagement;
}

export async function recordNewsView(slug: string): Promise<NewsEngagement> {
  const visitor_id = getVisitorId();
  if (!visitor_id) throw new Error("Anonymous browser identifier unavailable");
  return send(slug, "view", { visitor_id });
}

export async function updateNewsLike(slug: string, liked: boolean): Promise<NewsEngagement> {
  const visitor_id = getVisitorId();
  if (!visitor_id) throw new Error("Anonymous browser identifier unavailable");
  return send(slug, "like", { visitor_id, liked });
}
