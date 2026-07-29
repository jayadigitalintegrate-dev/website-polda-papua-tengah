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
  const announcements = announcementService.getAllAnnouncements();

  const filteredAnnouncements = announcements.filter((item) => {
    const matchesKeyword =
      keyword.trim() === "" ||
      item.title.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase());

    // Placeholder untuk CMS berikutnya.
    // Saat field category sudah ada di model, filter ini tinggal diaktifkan.
    const matchesCategory =
      category === "" || category === "Semua";

    return matchesKeyword && matchesCategory;
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