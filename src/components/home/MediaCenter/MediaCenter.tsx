import "./MediaCenter.css";

import { Link } from "react-router-dom";

import berita1 from "../../../assets/berita/berita-1.jpg";
import berita2 from "../../../assets/berita/berita-2.jpg";
import berita3 from "../../../assets/berita/berita-3.jpg";
import berita4 from "../../../assets/berita/berita-4.jpg";
import berita5 from "../../../assets/berita/berita-5.jpg";
import berita6 from "../../../assets/berita/berita-6.jpg";

const media = [
  {
    id: 1,
    image: berita1,
    title: "Kapolda Papua Tengah Memimpin Apel Pagi",
    date: "20 Juli 2026",
  },
  {
    id: 2,
    image: berita2,
    title: "Patroli Kamtibmas Bersama Masyarakat",
    date: "19 Juli 2026",
  },
  {
    id: 3,
    image: berita3,
    title: "Pelayanan Publik Kepolisian",
    date: "18 Juli 2026",
  },
  {
    id: 4,
    image: berita4,
    title: "Pengamanan Kegiatan Masyarakat",
    date: "17 Juli 2026",
  },
  {
    id: 5,
    image: berita5,
    title: "Kegiatan Bhakti Sosial Polda Papua Tengah",
    date: "16 Juli 2026",
  },
  {
    id: 6,
    image: berita6,
    title: "Rapat Koordinasi Internal Kepolisian",
    date: "15 Juli 2026",
  },
];

export default function MediaCenter() {
  return (
    <section className="media-center">

      <div className="media-center__header">

        <div>

          <span>MEDIA CENTER</span>

          <h2>
            Galeri Dokumentasi Polda Papua Tengah
          </h2>

          <p>
            Dokumentasi kegiatan, pelayanan masyarakat,
            pengamanan serta aktivitas Kepolisian Daerah Papua Tengah.
          </p>

        </div>

        <Link
          to="/galeri"
          className="media-center__button"
        >
          Lihat Semua &rarr;
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

              <h3>
                {item.title}
              </h3>

              <small>
                {item.date}
              </small>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}