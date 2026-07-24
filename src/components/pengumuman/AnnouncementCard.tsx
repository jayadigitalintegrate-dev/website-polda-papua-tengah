import "./Announcement.css";

interface AnnouncementCardProps{

  title:string;

  category:string;

  date:string;

  summary:string;

}

export default function AnnouncementCard({

  title,

  category,

  date,

  summary

}:AnnouncementCardProps){

  return(

    <article className="announcement-card">

      <div className="announcement-icon">
        📢
      </div>

      <div className="announcement-content">

        <span className="announcement-category">
          {category}
        </span>

        <h3>
          {title}
        </h3>

        <small>
          {date}
        </small>

        <p>
          {summary}
        </p>

        <button
          className="announcement-button"
        >
          Lihat Detail
        </button>

      </div>

    </article>

  );

}