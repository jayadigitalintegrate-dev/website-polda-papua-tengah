export type ServiceGroup = "spkt" | "intel" | "lantas" | "siber" | "humas" | "ops" | "public";

export interface Service {
  id: number;
  slug: string;

  title: string;
  description: string;
  content: string;

  group: ServiceGroup;
  action?: "call-center";
  category: string;
  icon: string;
  color: string;

  requirements: string[];
  procedures: string[];

  fee?: string;
  serviceTime?: string;
  officeHours?: string;
  location?: string;
  contact?: string;
  documents?: string[];

  lastUpdated?: string;

  url: string;

  sortOrder: number;

  active: boolean;
  external: boolean;
}

