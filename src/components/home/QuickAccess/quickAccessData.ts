export interface QuickAccessItem {

  id: number;

  title: string;

  description: string;

  icon: string;

  url: string;

  badge?: string;

  featured?: boolean;

}



export const quickAccessData: QuickAccessItem[] = [


  {
    id: 1,
    title: "quickAccess.spkt",
    description: "quickAccess.spktDesc",
    icon: "lucide:shield",
    url: "/layanan/spkt",
    badge: "quickAccess.badge24",
    featured: true,
  },


  {
    id: 2,
    title: "quickAccess.skck",
    description: "quickAccess.skckDesc",
    icon: "lucide:file-badge",
    url: "/layanan/skck",
    badge: "quickAccess.online",
  },


  {
    id: 3,
    title: "quickAccess.sim",
    description: "quickAccess.simDesc",
    icon: "lucide:id-card",
    url: "/layanan/sim",
    badge: "quickAccess.online",
  },


  {
    id: 4,
    title: "quickAccess.call110",
    description: "quickAccess.call110Desc",
    icon: "lucide:phone-call",
    url: "/layanan/110",
    badge: "quickAccess.emergency",
    featured: true,
  },


  {
    id: 5,
    title: "quickAccess.complaint",
    description: "quickAccess.complaintDesc",
    icon: "lucide:megaphone",
    url: "/pengaduan",
    badge: "quickAccess.new",
  },


  {
    id: 6,
    title: "quickAccess.polresList",
    description: "quickAccess.polresDesc",
    icon: "lucide:map-pinned",
    url: "/polres",
    badge: "quickAccess.info",
  },


  {
    id: 7,
    title: "quickAccess.news",
    description: "quickAccess.newsDesc",
    icon: "lucide:newspaper",
    url: "/berita",
    badge: "quickAccess.update",
  },


  {
    id: 8,
    title: "quickAccess.publicInfo",
    description: "quickAccess.publicInfoDesc",
    icon: "lucide:badge-info",
    url: "/informasi-publik",
    badge: "quickAccess.ppid",
  },


];

