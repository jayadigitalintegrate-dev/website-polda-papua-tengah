import { API_CONFIG } from "../config/api";

export interface CmsPolres {
    id: number;
    name_id: string;
    name_en: string | null;

    chief_name: string | null;
    chief_rank: string | null;
    chief_nrp: string | null;

    chief_photo: string | null;
    chief_photo_url: string | null;

    jurisdiction: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    website: string | null;
    description: string | null;

    sort_order: number;
    status: string;

    created_at: string;
    updated_at: string;
}

const API_URL = `${API_CONFIG.baseUrl}/police-stations`;

export async function fetchPolres(): Promise<CmsPolres[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(
            `Gagal mengambil data Polres dari CMS. HTTP ${response.status}`
        );
    }

    const result = await response.json();

    const data: CmsPolres[] = Array.isArray(result?.value)
        ? result.value
        : Array.isArray(result)
            ? result
            : [];

    return data;
}
