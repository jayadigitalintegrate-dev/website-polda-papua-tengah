import "./ArchiveWidget.css";

const archives = [
  "Juli 2026",
  "Juni 2026",
  "Mei 2026",
  "April 2026",
];

export default function ArchiveWidget() {
  return (
    <section className="archive-widget">

      <h3>Arsip</h3>

      <ul>

        {archives.map((item) => (

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