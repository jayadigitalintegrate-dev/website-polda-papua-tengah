import "./GalleryGrid.css";
import GalleryCard from "../GalleryCard";
import type { GalleryItem } from "../../../data/galleryData";

interface GalleryGridProps {
  data: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
}

export default function GalleryGrid({
  data,
  onSelect,
}: GalleryGridProps) {
  return (
    <section className="gallery-grid">
      {data.map((item) => (
        <GalleryCard
          key={item.id}
          image={item.image}
          title={item.title}
          category={item.category}
          date={item.date}
          onClick={() => onSelect(item)}
        />
      ))}
    </section>
  );
}