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
    label: "satker",
  },


  {
    id: 2,
    icon: "🚔",
    value: "10",
    label: "polres",
  },


  {
    id: 3,
    icon: "👮",
    value: "2.345+",
    label: "personnel",
  },


  {
    id: 4,
    icon: "🛡️",
    value: "24/7",
    label: "service",
  },


];
