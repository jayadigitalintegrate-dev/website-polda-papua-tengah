import "./GalleryLightbox.css";

import type { GalleryItem } from "../../../data/galleryData";


interface GalleryLightboxProps {
  item: GalleryItem;
  onClose: () => void;
}


export default function GalleryLightbox({
  item,
  onClose,
}: GalleryLightboxProps) {


  return (

    <div
      className="gallery-lightbox"
      onClick={onClose}
    >

      <div
        className="gallery-lightbox__content"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <button
          className="gallery-lightbox__close"
          onClick={onClose}
        >
          ×
        </button>


        <img
          src={item.image}
          alt={item.title}
        />


        <div className="gallery-lightbox__info">

          <h2>
            {item.title}
          </h2>


          <span>
            {item.category}
          </span>


          <p>
            {item.date}
          </p>

        </div>


      </div>

    </div>

  );

}