import "./GalleryPagination.css";

export default function GalleryPagination() {
  return (
    <nav className="gallery-pagination">
      <button>&laquo;</button>

      <button className="active">1</button>

      <button>2</button>

      <button>3</button>

      <button>&raquo;</button>
    </nav>
  );
}