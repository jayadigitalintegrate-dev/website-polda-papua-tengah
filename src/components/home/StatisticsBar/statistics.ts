export interface StatisticItem {

  id: number;

  icon: string;

  value: string;

  label: string;

}


export const statistics: StatisticItem[] = [

  {
    id: 1,
    icon: "mdi:office-building",
    value: "8",
    label: "satker",
  },


  {
    id: 2,
    icon: "mdi:shield-star",
    value: "10",
    label: "polres",
  },


  {
    id: 3,
    icon: "mdi:account-group",
    value: "2.345+",
    label: "personnel",
  },


  {
    id: 4,
    icon: "mdi:face-agent",
    value: "24/7",
    label: "service",
  },


];

