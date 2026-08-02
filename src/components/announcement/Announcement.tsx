import AnnouncementBanner from "./AnnouncementBanner/AnnouncementBanner";
import AnnouncementPopup from "./AnnouncementPopup/AnnouncementPopup";
import AnnouncementList from "./AnnouncementList/AnnouncementList";

import "./Announcement.css";


export default function Announcement() {
  return (
    <>
      <AnnouncementPopup />

      <AnnouncementBanner />

      <AnnouncementList />
    </>
  );
}
