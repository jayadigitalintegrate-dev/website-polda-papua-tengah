import "./GalleryCard.css";

interface GalleryCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  /** Jumlah foto bila item adalah koleksi Galeri Dokumentasi. */
  photoCount?: number;
  onClick: () => void;
}


export default function GalleryCard({
  image,
  title,
  category,
  date,
  photoCount,
  onClick,
}: GalleryCardProps) {

  return (

    <article
      className="gallery-card"
      onClick={onClick}
    >

      <div className="gallery-card__image">

        <img
          src={image}
          alt={title}
        />

        {photoCount !== undefined && (
          <span className="gallery-card__count">
            {photoCount} Foto
          </span>
        )}

      </div>


      <div className="gallery-card__content">

        <span className="gallery-card__category">
          {category}
        </span>


        <h3>
          {title}
        </h3>


        <p>
          {date}
        </p>


      </div>


    </article>

  );

}

