import "./ArchiveWidget.css";

import { Link } from "react-router-dom";

const tags = [
  "Presisi",
  "Kapolda",
  "Pelayanan",
  "Kamtibmas",
  "Lalu Lintas",
  "Humas",
  "Polri",
];

export default function TagWidget() {
  return (
    <section className="tag-widget">
      <h3>Tag Populer</h3>

      <div className="tag-widget__list">
        {tags.map((tag) => (
          <Link
            key={tag}
            to={`/berita/tag/${tag.toLowerCase()}`}
            className="tag-widget__item"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </section>
  );
}