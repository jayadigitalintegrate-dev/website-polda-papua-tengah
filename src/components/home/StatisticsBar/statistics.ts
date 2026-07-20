export interface StatisticItem {
  id: number;
  icon: string;
  value: string;
  label: string;
}

export const statistics: StatisticItem[] = [
  {
    id: 1,
    icon: "🏢",
    value: "8",
    label: "Satker",
  },
  {
    id: 2,
    icon: "🚔",
    value: "10",
    label: "Polres Jajaran",
  },
  {
    id: 3,
    icon: "👮",
    value: "2.345+",
    label: "Personel",
  },
  {
    id: 4,
    icon: "🛡️",
    value: "24/7",
    label: "Pelayanan",
  },
];