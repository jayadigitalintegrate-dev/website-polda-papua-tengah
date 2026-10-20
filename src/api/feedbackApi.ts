import { API_CONFIG } from "../config/api";

export type FeedbackCategory = "apresiasi" | "saran" | "kritik";

/**
 * Isi POST /api/feedback, mengikuti StoreFeedbackRequest di CMS.
 * Kolom identitas opsional tidak dikirim bila kosong.
 */
export interface FeedbackPayload {
  category: FeedbackCategory;
  rating: number;
  message: string;
  name?: string;
  email?: string;
  phone?: string;
  consent: true;
  /** Honeypot: selalu kosong untuk pengguna sungguhan. */
  website: string;
}

export type FeedbackResult =
  | { kind: "success" }
  | { kind: "validation"; errors: Record<string, string[]> }
  | { kind: "rate_limited"; retryAfterSeconds: number | null }
  | { kind: "unavailable" }
  | { kind: "network" }
  | { kind: "server"; status: number };

/**
 * Mengirim masukan Kritik & Saran. Tanpa API_CONFIG.baseUrl (build
 * produksi tanpa VITE_API_BASE_URL) tidak ada request sama sekali:
 * URL relatif akan mengarah ke GitHub Pages, bukan ke CMS.
 */
export async function submitFeedback(
  payload: FeedbackPayload
): Promise<FeedbackResult> {
  if (!API_CONFIG.baseUrl) {
    return { kind: "unavailable" };
  }

  let response: Response;

  try {
    response = await fetch(`${API_CONFIG.baseUrl}/feedback`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(API_CONFIG.timeout),
    });
  } catch {
    return { kind: "network" };
  }

  if (response.status === 201) {
    return { kind: "success" };
  }

  if (response.status === 422) {
    const body = await response.json().catch(() => null);
    const errors =
      body && typeof body === "object" && body.errors && typeof body.errors === "object"
        ? (body.errors as Record<string, string[]>)
        : {};

    return { kind: "validation", errors };
  }

  if (response.status === 429) {
    const retryAfter = Number(response.headers.get("Retry-After"));

    return {
      kind: "rate_limited",
      retryAfterSeconds: Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : null,
    };
  }

  return { kind: "server", status: response.status };
}
