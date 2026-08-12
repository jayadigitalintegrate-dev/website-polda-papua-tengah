import { API_CONFIG } from "../config/api";
import type { Official } from "../types/official";

const API_URL = `${API_CONFIG.baseUrl}/officials`;

interface CmsOfficial {
  id: number;
  photo: string | null;
  photo_url?: string | null;
  name_id: string;
  name_en: string;
  rank: string;
  position_id: string;
  position_en: string;
  nrp: string | null;
  birth_place: string | null;
  birth_date: string | null;
  religion: string | null;
  marital_status: string | null;
  spouse: string | null;
  children: number | null;
  motto: string | null;
  education: string[] | null;
  assignments: string[] | null;
  career: string[] | null;
  awards: string[] | null;
  sort_order: number;
  status: "active" | "inactive";
}

function getPhotoUrl(
  photo: string | null,
  photoUrl?: string | null
): string {
  if (photoUrl) {
    return photoUrl;
  }

  if (!photo) {
    return "";
  }

  return `${API_CONFIG.baseUrl.replace(/\/api\/?$/, "")}/storage/${photo}`;
}

function mapCmsOfficial(item: CmsOfficial): Official {
  return {
    id: item.id,
    photo: getPhotoUrl(item.photo, item.photo_url),
    name_id: item.name_id ?? "",
    name_en: item.name_en ?? "",
    rank: item.rank ?? "",
    position_id: item.position_id ?? "",
    position_en: item.position_en ?? "",
    nrp: item.nrp ?? "-",
    birthPlace: item.birth_place ?? "-",
    birthDate: item.birth_date ?? "-",
    religion: item.religion ?? "-",
    maritalStatus: item.marital_status ?? "-",
    spouse: item.spouse ?? "-",
    children: item.children ?? 0,
    motto: item.motto ?? "-",
    education: item.education ?? [],
    assignments: item.assignments ?? [],
    career: item.career ?? [],
    awards: item.awards ?? [],
    order: item.sort_order,
    status: item.status,
  };
}

export const officialsApi = {
  async getAll(): Promise<Official[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Gagal mengambil data pejabat dari CMS. HTTP ${response.status}`
      );
    }

    const result = await response.json();

    const cmsOfficials: CmsOfficial[] = Array.isArray(result?.value)
      ? result.value
      : Array.isArray(result)
        ? result
        : [];

    return cmsOfficials.map(mapCmsOfficial);
  },

  async getById(id: number): Promise<Official | undefined> {
    const officials = await this.getAll();

    return officials.find((item) => item.id === id);
  },
};
