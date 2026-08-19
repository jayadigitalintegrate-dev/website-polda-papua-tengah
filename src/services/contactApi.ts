import { API_CONFIG } from "../config/api";

export interface CmsContactData {
  institution_name: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  service_hours: string | null;
  call_center: string | null;
  maps_url: string | null;
  instagram_url: string | null;
  facebook_url: string | null;
  youtube_url: string | null;
  tiktok_url: string | null;
  x_url: string | null;
}

export async function fetchContact(): Promise<CmsContactData | null> {
  const response = await fetch(
    `${API_CONFIG.baseUrl}/contact`
  );

  if (!response.ok) {
    throw new Error(`Gagal mengambil data Contact: ${response.status}`);
  }

  return response.json();
}