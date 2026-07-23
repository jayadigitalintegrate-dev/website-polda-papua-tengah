import "./NewsPagination.css";

type NewsPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export default function NewsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: NewsPaginationProps) {
  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <nav className="news-pagination">

      <button
        type="button"
        className="page-arrow"
        disabled={currentPage === 1}
        onClick={() => onPageChange?.(currentPage - 1)}
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={
            page === currentPage
              ? "page-number active"
              : "page-number"
          }
          onClick={() => onPageChange?.(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="page-arrow"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
      >
        ›
      </button>

    </nav>
  );
}

