import "./TagWidget.css";

const tags = [
  "Polri",
  "Pelayanan",
  "Kamtibmas",
  "SIM",
  "SKCK",
  "Papua Tengah",
  "Lalu Lintas",
];

export default function TagWidget() {
  return (
    <section className="tag-widget">

      <h3>Tag</h3>

      <div className="tag-widget__list">

        {tags.map((tag) => (

          <button
            key={tag}
          >
            #{tag}
          </button>

        ))}

      </div>

    </section>
  );
}