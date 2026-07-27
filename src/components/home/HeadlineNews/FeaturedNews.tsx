import "./FeaturedNews.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { News } from "../../../types/news";


interface FeaturedNewsProps {
  news: News;
}


export default function FeaturedNews({
  news,
}: FeaturedNewsProps) {


  const { t } = useTranslation("home");


  return (

    <article className="home-featured-news">


      <div className="home-featured-news__image">


        <img
          src={news.thumbnail}
          alt={news.title}
        />


        <span className="home-featured-news__category">

          {news.category.name}

        </span>


      </div>




      <div className="home-featured-news__content">


        <div className="home-featured-news__meta">


          <span>
            {news.author.name}
          </span>


          <span>
            •
          </span>


          <span>
            {news.publishedAt}
          </span>


          <span>
            •
          </span>


          <span>
            {news.views.toLocaleString()} {t("headlineNews.views")}
          </span>


        </div>




        <h2>
          {news.title}
        </h2>



        <p>
          {news.excerpt}
        </p>




        <Link

          to={`/berita/${news.slug}`}

          className="home-featured-news__button"

        >

          {t("headlineNews.readMore")} ?

        </Link>



      </div>


    </article>

  );

}
