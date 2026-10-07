import "./MediaCenter.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import GalleryLightbox from "../../gallery/GalleryLightbox";
import { galleryService } from "../../../services/galleryService";
import type { GalleryItem } from "../../../types/gallery";

import berita1 from "../../../assets/berita/berita-1.webp";
import berita2 from "../../../assets/berita/berita-2.webp";
import berita3 from "../../../assets/berita/berita-4.webp";
import berita4 from "../../../assets/berita/berita-5.webp";
import berita5 from "../../../assets/berita/berita-6.webp";


/*
 * Fallback lokal: hanya dipakai bila CMS belum memiliki konten
 * Media Center yang published atau API Galeri tidak dapat diakses.
 */
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

/** Jumlah kartu Media Center di beranda. */
const MAX_ITEMS = 5;


export default function MediaCenter() {

  const { t } = useTranslation("home");

  // Konten Media Center dari CMS (sumber utama).
  const [cmsItems, setCmsItems] = useState<GalleryItem[]>([]);

  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let mounted = true;

    // Satu fetch /api/galleries (dibagi dengan halaman Galeri bila bersamaan).
    galleryService.getGallery().then((gallery) => {
      if (!mounted) return;

      setCmsItems(
        gallery.items
          .filter((item) => item.kind === "media_center")
          .slice(0, MAX_ITEMS)
      );
    });

    return () => {
      mounted = false;
    };
  }, []);

  const photos = selected?.images ?? [];

  const open = (item: GalleryItem) => {
    setPhotoIndex(0);
    setSelected(item);
  };

  const showPhoto = (step: number) => {
    if (photos.length === 0) return;

    setPhotoIndex(
      (current) => (current + step + photos.length) % photos.length
    );
  };


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

        {cmsItems.length > 0
          ? cmsItems.map((item) => (

            <article
              key={item.id}
              className="media-card"
              role="button"
              tabIndex={0}
              onClick={() => open(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  open(item);
                }
              }}
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

          ))
          : media.map((item) => (

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


      {selected && (
        <GalleryLightbox
          item={{
            ...selected,
            image: photos[photoIndex]?.image ?? selected.image,
          }}
          currentIndex={photos.length > 0 ? photoIndex : 0}
          totalItems={Math.max(photos.length, 1)}
          onClose={() => setSelected(null)}
          onPrev={() => showPhoto(-1)}
          onNext={() => showPhoto(1)}
        />
      )}


    </section>
  );
}
