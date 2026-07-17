import "./CategoryWidget.css";

const categories = [
  "Berita Utama",
  "Lalu Lintas",
  "Pelayanan",
  "Sosial",
  "Kamtibmas",
];

export default function CategoryWidget() {
  return (
    <section className="category-widget">

      <h3>Kategori</h3>

      <ul>

        {categories.map((item) => (

          <li key={item}>

            <button>
              {item}
            </button>

          </li>

        ))}

      </ul>

    </section>
  );
}