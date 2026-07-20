import "./NewsVideo.css";

import { useState } from "react";

import { Icon } from "@iconify/react";

import { newsVideos } from "../../../data/news/videos";

export default function NewsVideo() {

  const [activeVideo, setActiveVideo] = useState(newsVideos[0]);

  return (

    <section className="news-video">

      <div className="news-video__header">

        <div>

          <h2>Video Berita</h2>

          <p>
            Dokumentasi kegiatan dan informasi video terbaru Polda Papua Tengah.
          </p>

        </div>

      </div>

      <div className="news-video__layout">

        <div className="news-video__player">

          <iframe
            src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="news-video__info">

            <h3>{activeVideo.title}</h3>

            <span>

              <Icon icon="mdi:calendar-month-outline"/>

              {activeVideo.publishedAt}

            </span>

          </div>

        </div>

        <div className="news-video__list">

          {newsVideos.map((video)=>{

            const active = activeVideo.id === video.id;

            return(

              <button

                key={video.id}

                type="button"

                onClick={()=>setActiveVideo(video)}

                className={`news-video__item ${
                  active ? "active" : ""
                }`}

              >

                <div className="news-video__icon">

                  <Icon icon="mdi:play-circle"/>

                </div>

                <div>

                  <h4>{video.title}</h4>

                  <small>

                    {video.publishedAt}

                    •

                    {video.duration}

                  </small>

                </div>

              </button>

            );

          })}

        </div>

      </div>

    </section>

  );

}