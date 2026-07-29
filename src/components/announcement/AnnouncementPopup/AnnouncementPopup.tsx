import { useState } from "react";

import { announcementService } from "../../../services/announcementService";

import "./AnnouncementPopup.css";


export default function AnnouncementPopup() {

  const [show, setShow] = useState(true);


  const announcements =
    announcementService
      .getActiveAnnouncements()
      .filter(
        (item) => item.type === "popup"
      );


  if (!show || !announcements.length) {
    return null;
  }


  const announcement = announcements[0];


  return (

    <div className="announcement-popup">

      <div className="announcement-popup__box">


        <button
          className="announcement-popup__close"
          onClick={() => setShow(false)}
        >
          ×
        </button>


        <span className="announcement-popup__label">
          PENGUMUMAN
        </span>


        <h2>
          {announcement.title}
        </h2>


        <p>
          {announcement.description}
        </p>


      </div>

    </div>

  );

}
