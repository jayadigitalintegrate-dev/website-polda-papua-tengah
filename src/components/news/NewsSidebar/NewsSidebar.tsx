import { useState } from "react";

import "./NewsSidebar.css";

import SearchWidget from "../SearchWidget/SearchWidget";
import CategoryWidget from "../CategoryWidget/CategoryWidget";
import PopularWidget from "../PopularWidget/PopularWidget";
import ArchiveWidget from "../ArchiveWidget/ArchiveWidget";
import TagWidget from "../TagWidget/TagWidget";

export default function NewsSidebar() {
  const [search, setSearch] = useState("");

  return (
    <aside className="news-sidebar">

      <SearchWidget
        value={search}
        onChange={setSearch}
      />

      <CategoryWidget />

      <PopularWidget />

      <ArchiveWidget />

      <TagWidget />

    </aside>
  );
}