import "./NewsGallery.css";

import { useState } from "react";
import { Icon } from "@iconify/react";

import type {
  NewsGallery as NewsGalleryType,
} from "../../../types/news";

interface NewsGalleryProps {
  gallery: NewsGalleryType[];
}

export default function NewsGallery({
  gallery,
}: NewsGalleryProps) {
  const [selected, setSelected] = useState<number | null>(
    null
  );

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const close = () => setSelected(null);

  const next = () => {
    if (selected === null) return;

    setSelected(
      (selected + 1) % gallery.length
    );
  };

  const prev = () => {
    if (selected === null) return;

    setSelected(
      (selected - 1 + gallery.length) %
        gallery.length
    );
  };

  return (
    <>
      <section className="news-gallery">

        <div className="news-gallery__header">

          <h2 className="news-gallery__title">

            <Icon icon="mdi:image-multiple" />

            Galeri Foto

          </h2>

          <span className="news-gallery__count">

            {gallery.length} Foto

          </span>

        </div>

        <div className="news-gallery__grid">

          {gallery.map((photo, index) => (

            <button
              key={photo.id}
              className="news-gallery__item"
              onClick={() => setSelected(index)}
            >

              <img
                src={photo.image}
                alt={photo.caption}
              />

            </button>

          ))}

        </div>

      </section>

      {selected !== null && (

        <div
          className="news-gallery__lightbox"
          onClick={close}
        >

          <button
            className="news-gallery__close"
            onClick={close}
          >
            <Icon icon="mdi:close" />
          </button>

          <button
            className="news-gallery__prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <Icon icon="mdi:chevron-left" />
          </button>

          <img
            src={gallery[selected].image}
            alt={gallery[selected].caption}
            onClick={(e) =>
              e.stopPropagation()
            }
          />

          <button
            className="news-gallery__next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <Icon icon="mdi:chevron-right" />
          </button>

          <div
            className="news-gallery__caption"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <p>

              {gallery[selected].caption}

            </p>

            <span>

              {selected + 1} / {gallery.length}

            </span>

          </div>

        </div>

      )}
    </>
  );
}