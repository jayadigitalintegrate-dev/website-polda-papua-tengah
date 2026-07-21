import "./MediaCenter.css";

import { Link } from "react-router-dom";

const media = [
  {
    id: 1,
    image: "https://picsum.photos/600/400?random=1",
    title: "Kapolda Papua Tengah Memimpin Apel Pagi",
    date: "20 Juli 2026",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/400?random=2",
    title: "Patroli Kamtibmas Bersama Masyarakat",
    date: "19 Juli 2026",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/400?random=3",
    title: "Pelayanan SIM Keliling",
    date: "18 Juli 2026",
  },
  {
    id: 4,
    image: "https://picsum.photos/600/400?random=4",
    title: "Pengamanan Ibadah Minggu",
    date: "17 Juli 2026",
  },
  {
    id: 5,
    image: "https://picsum.photos/600/400?random=5",
    title: "Kegiatan Bhakti Sosial",
    date: "16 Juli 2026",
  },
  {
    id: 6,
    image: "https://picsum.photos/600/400?random=6",
    title: "Rapat Koordinasi Internal",
    date: "15 Juli 2026",
  },
];

export default function MediaCenter() {
  return (
    <section className="media-center">

      <div className="media-center__header">

        <div>

          <span>MEDIA CENTER</span>

          <h2>Galeri Dokumentasi Polda Papua Tengah</h2>

          <p>
            Dokumentasi kegiatan, pelayanan masyarakat,
            pengamanan serta aktivitas Kepolisian Daerah Papua Tengah.
          </p>

        </div>

        <Link
          to="/galeri"
          className="media-center__button"
        >
          Lihat Semua →
        </Link>

      </div>

      <div className="media-center__grid">

        {media.map((item) => (

          <article
            key={item.id}
            className="media-card"
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="media-card__overlay">

              <h3>{item.title}</h3>

              <small>{item.date}</small>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}