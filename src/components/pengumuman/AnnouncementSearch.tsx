import "./Announcement.css";

interface AnnouncementSearchProps {
  keyword: string;
  setKeyword: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

export default function AnnouncementSearch({
  keyword,
  setKeyword,
  category,
  setCategory,
}: AnnouncementSearchProps) {
  return (
    <section className="announcement-search">
      <div className="announcement-container">
        <div className="announcement-filter">
          <input
            type="text"
            placeholder="Cari pengumuman..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Semua</option>
            <option value="high">Prioritas Tinggi</option>
            <option value="medium">Prioritas Sedang</option>
            <option value="low">Prioritas Rendah</option>
          </select>
        </div>
      </div>
    </section>
  );
}
