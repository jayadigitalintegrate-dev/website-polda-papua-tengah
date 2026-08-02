import { Link } from "react-router-dom";
import type { Announcement } from "../../../types/announcement";

import "./AnnouncementCard.css";


interface AnnouncementCardProps {
  data: Announcement;
}


export default function AnnouncementCard({
  data,
}: AnnouncementCardProps) {

  return (
    <article className="announcement-card">

      <div className="announcement-card__header">

        <span
          className={`announcement-card__priority ${data.priority}`}
        >
          {data.priority.toUpperCase()}
        </span>


        <span className="announcement-card__type">
          {data.type.toUpperCase()}
        </span>

      </div>


      <h3>
        {data.title}
      </h3>


      <p>
        {data.description}
      </p>


      <small>
        Berlaku: {data.publishStart}
        {" - "}
        {data.publishEnd}
      </small>


      <Link
        to={`/pengumuman/${data.slug}`}
        className="announcement-card__link"
      >
        Selengkapnya
      </Link>


    </article>
  );
}

