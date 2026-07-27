import "./MediaCenter.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import berita1 from "../../../assets/berita/berita-1.webp";
import berita2 from "../../../assets/berita/berita-2.webp";
import berita3 from "../../../assets/berita/berita-4.webp";
import berita4 from "../../../assets/berita/berita-4.webp";
import berita5 from "../../../assets/berita/berita-5.webp";


const media = [
  {
    id: 1,
    image: berita1,
    title: "mediaCenter.item1",
    date: "mediaCenter.date1",
  },
  {
    id: 2,
    image: berita2,
    title: "mediaCenter.item2",
    date: "mediaCenter.date2",
  },
  {
    id: 3,
    image: berita3,
    title: "mediaCenter.item3",
    date: "mediaCenter.date3",
  },
  {
    id: 4,
    image: berita4,
    title: "mediaCenter.item4",
    date: "mediaCenter.date4",
  },
  {
    id: 5,
    image: berita5,
    title: "mediaCenter.item5",
    date: "mediaCenter.date5",
  },

];


export default function MediaCenter() {

  const { t } = useTranslation("home");


  return (
    <section className="media-center">

      <div className="media-center__header">

        <div>

          <span>
            {t("mediaCenter.eyebrow")}
          </span>

          <h2>
            {t("mediaCenter.title")}
          </h2>

          <p>
            {t("mediaCenter.subtitle")}
          </p>

        </div>


        <Link
          to="/galeri"
          className="media-center__button"
        >
          {t("mediaCenter.button")} ?
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
              alt={t(item.title)}
            />


            <div className="media-card__overlay">

              <h3>
                {t(item.title)}
              </h3>


              <small>
                {t(item.date)}
              </small>

            </div>


          </article>

        ))}

      </div>


    </section>
  );
}

