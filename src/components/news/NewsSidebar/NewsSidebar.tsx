import "./NewsSidebar.css";

import PopularWidget from "../PopularWidget/PopularWidget";
import ArchiveWidget from "../ArchiveWidget/ArchiveWidget";
import TagWidget from "../TagWidget/TagWidget";

export default function NewsSidebar() {
  return (
    <aside className="news-sidebar">
      <PopularWidget />

      <ArchiveWidget />

      <TagWidget />
    </aside>
  );
}