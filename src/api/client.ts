import { API_CONFIG } from "../config/api";

const DEFAULT_HEADERS: HeadersInit = {
  "Content-Type": "application/json",
};

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {

  const response = await fetch(
    `${API_CONFIG.baseUrl}${endpoint}`,
    {
      ...options,
      headers: {
        ...DEFAULT_HEADERS,
        ...options.headers,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status} ${response.statusText}`
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export function apiGet<T>(
  endpoint: string
) {
  return request<T>(endpoint);
}

export function apiPost<T>(
  endpoint: string,
  body: unknown
) {
  return request<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function apiPut<T>(
  endpoint: string,
  body: unknown
) {
  return request<T>(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export function apiDelete<T>(
  endpoint: string
) {
  return request<T>(endpoint, {
    method: "DELETE",
  });
}