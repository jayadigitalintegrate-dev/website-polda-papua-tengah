export interface StatisticItem {

  id: number;

  icon: string;

  value: string;

  label: string;

}


export const statistics: StatisticItem[] = [

  {
    id: 1,
    icon: "lucide:building-2",
    value: "8",
    label: "satker",
  },


  {
    id: 2,
    icon: "lucide:landmark",
    value: "10",
    label: "polres",
  },


  {
    id: 3,
    icon: "lucide:users",
    value: "2.345+",
    label: "personnel",
  },


  {
    id: 4,
    icon: "lucide:phone-call",
    value: "24/7",
    label: "service",
  },


];
