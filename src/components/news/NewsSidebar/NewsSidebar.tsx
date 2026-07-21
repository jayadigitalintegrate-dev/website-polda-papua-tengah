import "./NewsSidebar.css";

import SearchWidget from "../SearchWidget";
import CategoryWidget from "../CategoryWidget/CategoryWidget";
import PopularWidget from "../PopularWidget/PopularWidget";
import ArchiveWidget from "../ArchiveWidget/ArchiveWidget";
import TagWidget from "../TagWidget/TagWidget";

interface NewsSidebarProps {
  search?: string;
  onSearchChange?: (value: string) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function NewsSidebar({
  search = "",
  onSearchChange,
  selectedCategory = "all",
  onSelectCategory = () => {},
}: NewsSidebarProps) {
  return (
    <aside className="news-sidebar">
      <SearchWidget
        value={search}
        onChange={onSearchChange}
      />

      <CategoryWidget
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />

      <PopularWidget />

      <ArchiveWidget />

      <TagWidget />
    </aside>
  );
}