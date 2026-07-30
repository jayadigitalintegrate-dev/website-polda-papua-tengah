import { Link } from "react-router-dom";

import { announcementService } from "../../../services/announcementService";

import "./AnnouncementBanner.css";


export default function AnnouncementBanner() {

  const announcements =
    announcementService
      .getFeaturedAnnouncements()
      .sort(
        (a, b) =>
          a.sortOrder - b.sortOrder
      );


  if (!announcements.length) {
    return null;
  }


  const announcement = announcements[0];


  return (
    <section className="announcement-banner">

      <div className="announcement-banner__container">

        <span className="announcement-banner__label">
          INFORMASI
        </span>


        <h2>
          {announcement.title}
        </h2>


        <p>
          {announcement.description}
        </p>


        <span className="announcement-banner__date">
          Berlaku:
          {" "}
          {announcement.publishStart}
          {" "}
          -
          {" "}
          {announcement.publishEnd}
        </span>


        <Link
          to={`/pengumuman/${announcement.slug}`}
          className="announcement-banner__link"
        >
          Lihat Detail ?
        </Link>


      </div>

    </section>
  );
}
