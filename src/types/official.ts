export interface Official {
  id: number;

  photo: string;

  name_id: string;
  name_en: string;

  rank: string;

  position_id: string;
  position_en: string;

  nrp: string;

  birthPlace: string;
  birthDate: string;

  religion: string;

  maritalStatus: string;

  spouse: string;

  children: number;

  motto: string;

  education: string[];

  assignments: string[];

  career: string[];

  awards: string[];

  order: number;

  status: "active" | "inactive";
}