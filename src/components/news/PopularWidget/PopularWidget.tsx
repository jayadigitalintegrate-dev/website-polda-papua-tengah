import "./PopularWidget.css";

const popularNews = [
  "Kapolda Papua Tengah Pimpin Apel Gelar Pasukan",
  "Ditlantas Gelar Operasi Keselamatan Berkendara",
  "Pelayanan SIM Keliling Hadir di Nabire",
];

export default function PopularWidget() {
  return (
    <section className="popular-widget">

      <h3>Berita Populer</h3>

      <ul>

        {popularNews.map((item, index) => (

          <li key={index}>

            <span className="popular-widget__number">
              {index + 1}
            </span>

            <span className="popular-widget__title">
              {item}
            </span>

          </li>

        ))}

      </ul>

    </section>
  );
}