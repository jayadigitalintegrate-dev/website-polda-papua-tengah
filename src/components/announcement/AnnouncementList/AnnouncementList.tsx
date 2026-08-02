import { announcementService } from "../../../services/announcementService";
import AnnouncementCard from "../AnnouncementCard";

import "./AnnouncementList.css";


interface AnnouncementListProps {
  keyword?: string;
  category?: string;
}


export default function AnnouncementList({
  keyword = "",
  category = "",
}: AnnouncementListProps) {

  const announcements =
    announcementService.getAllAnnouncements();


  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };


  const filteredAnnouncements =
    announcements
      .filter((item) => {

        const matchesKeyword =
          keyword.trim() === "" ||
          item.title
            .toLowerCase()
            .includes(keyword.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(keyword.toLowerCase());


        const matchesCategory =
          category === "" ||
          category === "Semua";


        return (
          matchesKeyword &&
          matchesCategory
        );
      })
      .sort((a, b) => {

        const priorityCompare =
          priorityOrder[a.priority] -
          priorityOrder[b.priority];


        if (priorityCompare !== 0) {
          return priorityCompare;
        }


        const sortOrderCompare =
          a.sortOrder -
          b.sortOrder;


        if (sortOrderCompare !== 0) {
          return sortOrderCompare;
        }


        return (
          new Date(b.publishStart).getTime() -
          new Date(a.publishStart).getTime()
        );

      });


  return (
    <section className="announcement-list">

      <div className="announcement-list__container">

        {filteredAnnouncements.map((item) => (

          <AnnouncementCard
            key={item.id}
            data={item}
          />

        ))}

      </div>

    </section>
  );
}

