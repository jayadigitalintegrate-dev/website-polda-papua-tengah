import gallery1 from "../assets/berita/berita-1.jpg";
import gallery2 from "../assets/berita/berita-2.jpg";
import gallery3 from "../assets/berita/berita-3.jpg";
import gallery4 from "../assets/berita/berita-4.jpg";
import gallery5 from "../assets/berita/berita-5.jpg";
import gallery6 from "../assets/berita/berita-6.jpg";


export interface GalleryItem {
  id:number;
  image:string;
  title:string;
  category:string;
  date:string;
}


export const galleryData:GalleryItem[] = [

{
 id:1,
 image:gallery1,
 title:"Kapolda Papua Tengah Memimpin Apel Bersama",
 category:"Kegiatan Pimpinan",
 date:"22 Juli 2026"
},

{
 id:2,
 image:gallery2,
 title:"Pelayanan Publik Kepolisian",
 category:"Pelayanan Publik",
 date:"20 Juli 2026"
},

{
 id:3,
 image:gallery3,
 title:"Kegiatan Operasional Kepolisian",
 category:"Operasional",
 date:"18 Juli 2026"
},

{
 id:4,
 image:gallery4,
 title:"Kegiatan Sosial Kepolisian",
 category:"Sosial",
 date:"15 Juli 2026"
},

{
 id:5,
 image:gallery5,
 title:"Event Polda Papua Tengah",
 category:"Event",
 date:"10 Juli 2026"
},

{
 id:6,
 image:gallery6,
 title:"Dokumentasi Kegiatan",
 category:"Kegiatan Pimpinan",
 date:"5 Juli 2026"
}

];