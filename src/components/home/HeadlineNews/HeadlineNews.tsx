import "./HeadlineNews.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FeaturedNews from "./FeaturedNews";
import NewsCard from "./NewsCard";

import { getNews } from "../../../services/news.service";


const news = getNews();

const featured =
  news.find((item) => item.featured) ?? news[0];

const latestNews = news.filter(
  (item) => item.id !== featured.id
);


function HeadlineNews() {

  const { t } = useTranslation("home");


  return (
    <section className="headline-news">

      <div className="headline-container">


        <div className="headline-title">

          <span>
            {t("headlineNews.eyebrow")}
          </span>


          <h2>
            {t("headlineNews.title")}
          </h2>


          <p>
            {t("headlineNews.subtitle")}
          </p>

        </div>



        <FeaturedNews news={featured} />



        <section className="latest-section">


          <div className="latest-title">


            <div>

              <h3>
                {t("headlineNews.latestTitle")}
              </h3>


              <p className="latest-subtitle">

                {t("headlineNews.latestCount", {
                  count: latestNews.length
                })}

              </p>


            </div>



            <Link
              to="/berita"
              className="latest-more"
            >

              {t("headlineNews.viewAll")} &gt;

            </Link>


          </div>



          <div className="latest-grid">

            {latestNews.map((item) => (

              <NewsCard
                key={item.id}
                news={item}
              />

            ))}

          </div>


        </section>



        <div className="headline-action">


          <Link
            to="/berita"
            className="headline-button"
          >

            {t("headlineNews.explore")}

          </Link>


        </div>


      </div>

    </section>
  );

}


export default HeadlineNews;