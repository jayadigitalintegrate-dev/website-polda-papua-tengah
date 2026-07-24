import AnnouncementCard from "./AnnouncementCard";
import "./Announcement.css";

interface AnnouncementListProps {

  keyword:string;

  category:string;

}

const announcements = [

  {

    title:"Pengumuman Pelayanan SIM",

    category:"Pelayanan Publik",

    date:"24 Juli 2026",

    summary:
      "Pelayanan SIM mengalami penyesuaian jadwal pada hari libur nasional."

  },

  {

    title:"Jadwal Pelayanan PPID",

    category:"PPID",

    date:"24 Juli 2026",

    summary:
      "Pelayanan informasi publik mengikuti jam kerja resmi Polda Papua Tengah."

  },

  {

    title:"Maklumat Kapolda Papua Tengah",

    category:"Pengumuman Resmi",

    date:"24 Juli 2026",

    summary:
      "Maklumat Kapolda mengenai peningkatan keamanan dan ketertiban masyarakat."

  }

];

export default function AnnouncementList({

  keyword,

  category

}:AnnouncementListProps){

  const filtered = announcements.filter((item)=>{

    const matchKeyword =
      item.title
      .toLowerCase()
      .includes(keyword.toLowerCase());

    const matchCategory =
      category === "" ||
      item.category === category;

    return matchKeyword && matchCategory;

  });

  return(

    <section className="announcement-list">

      <div className="announcement-container">

        <div className="announcement-grid">

          {

            filtered.map((item,index)=>(

              <AnnouncementCard

                key={index}

                title={item.title}

                category={item.category}

                date={item.date}

                summary={item.summary}

              />

            ))

          }

        </div>

      </div>

    </section>

  );

}