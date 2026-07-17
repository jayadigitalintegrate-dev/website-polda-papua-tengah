import "./NewsSidebar.css";

import SearchWidget from "../SearchWidget/SearchWidget";
import CategoryWidget from "../CategoryWidget/CategoryWidget";
import PopularWidget from "../PopularWidget/PopularWidget";
import ArchiveWidget from "../ArchiveWidget/ArchiveWidget";
import TagWidget from "../TagWidget/TagWidget";

export default function NewsSidebar() {
  return (
    <aside className="news-sidebar">

      <SearchWidget />

      <CategoryWidget />

      <PopularWidget />

      <ArchiveWidget />

      <TagWidget />

    </aside>
  );
}