import "./SearchWidget.css";

type SearchWidgetProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchWidget({
  value,
  onChange,
}: SearchWidgetProps) {
  return (
    <section className="search-widget">

      <h3 className="search-widget__title">
        Cari Berita
      </h3>

      <div className="search-widget__box">

        <input
          type="text"
          placeholder="Cari judul berita..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <button
          type="button"
          aria-label="Cari"
        >
          🔍
        </button>

      </div>

    </section>
  );
}

export default SearchWidget;