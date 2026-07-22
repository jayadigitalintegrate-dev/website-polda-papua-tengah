import "./GalleryCard.css";

interface GalleryCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  onClick: () => void;
}


export default function GalleryCard({
  image,
  title,
  category,
  date,
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