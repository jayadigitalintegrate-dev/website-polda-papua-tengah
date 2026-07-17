import "./SearchWidget.css";

export default function SearchWidget() {
  return (
    <section className="search-widget">

      <h3 className="search-widget__title">
        Cari Berita
      </h3>

      <div className="search-widget__box">

        <input
          type="text"
          placeholder="Cari berita..."
        />

        <button>
          🔍
        </button>

      </div>

    </section>
  );
}