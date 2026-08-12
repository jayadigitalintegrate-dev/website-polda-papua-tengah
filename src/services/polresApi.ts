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

const API_URL = API_CONFIG.baseUrl
    ? `${API_CONFIG.baseUrl}/police-stations`
    : "";

/**
 * Menyimpan Promise request yang sedang berjalan.
 *
 * Tujuannya:
 * React StrictMode dapat menjalankan effect dua kali
 * pada development, tetapi CMS cukup menerima satu request.
 */
let polresRequest: Promise<CmsPolres[]> | null = null;

async function requestPolres(): Promise<CmsPolres[]> {
    if (!API_CONFIG.baseUrl) {
        return [];
    }

    try {
        const response = await fetch(API_URL, {
            signal: AbortSignal.timeout(API_CONFIG.timeout),
        });

        if (!response.ok) {
            throw new Error(
                `Gagal mengambil data Polres dari CMS. HTTP ${response.status}`
            );
        }

        const result = await response.json();

        const data: CmsPolres[] =
            Array.isArray(result?.value)
                ? result.value
                : Array.isArray(result)
                    ? result
                    : [];

        return data;
    } catch (error) {
        console.warn(
            "CMS Polres tidak dapat diakses. Menggunakan data lokal.",
            error
        );

        return [];
    }
}

export function fetchPolres(): Promise<CmsPolres[]> {
    /**
     * Jika request sedang berjalan, gunakan request yang sama.
     * Tidak membuat HTTP request kedua.
     */
    if (polresRequest) {
        return polresRequest;
    }

    polresRequest = requestPolres();

    /**
     * Jika request gagal/reject, izinkan percobaan berikutnya.
     */
    polresRequest.catch(() => {
        polresRequest = null;
    });

    return polresRequest;
}