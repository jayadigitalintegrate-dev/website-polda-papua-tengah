import "./TestimonialCard.css";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  city: string;
  rating: number;
  category: string;
  comment: string;
  date: string;
}

export default function TestimonialCard({
  avatar,
  name,
  city,
  rating,
  category,
  comment,
  date,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card">

      <div className="testimonial-card__avatar">
<img
  src={avatar}
  alt={name}
  loading="eager"
  draggable={false}
  decoding="sync"
  onError={(e) => {
    const img = e.currentTarget;
    img.onerror = null;

    img.src =
      category.toLowerCase() === "saran"
        ? "/avatars/default-female.svg"
        : "/avatars/default-male.svg";
  }}
/>
      </div>

      <div className="testimonial-card__content">

        <div className="testimonial-card__header">

          <div>
            <h3>{name}</h3>
            <span className="testimonial-card__city">
              {city}
            </span>
          </div>

          <div className="testimonial-card__rating">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>

        </div>

        <p className="testimonial-card__comment">
          "{comment}"
        </p>

      </div>

      <div className="testimonial-card__side">

        <span
          className={`testimonial-card__badge testimonial-card__badge--${category.toLowerCase()}`}
        >
          {category}
        </span>

        <div className="testimonial-card__date">
          {date}
        </div>

      </div>

    </div>
  );
}