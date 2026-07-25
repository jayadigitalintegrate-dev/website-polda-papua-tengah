import { Link } from "react-router-dom";

import "./ServiceCard.css";

import type { ServiceItem } from "../../../data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const buttonClass = `service-card__button ${
    !service.active ? "disabled" : ""
  }`;

  return (
    <article className="service-card">
      <div className="service-card__icon">
        <span>{service.icon}</span>
      </div>

      <div className="service-card__content">
        <span className="service-card__category">
          {service.category}
        </span>

        <h3 className="service-card__title">
          {service.title}
        </h3>

        <p className="service-card__description">
          {service.description}
        </p>
      </div>

      {!service.active ? (
        <span className={buttonClass}>
          Segera Hadir
        </span>
      ) : service.external ? (
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          Buka Layanan
        </a>
      ) : (
        <Link
          to={`/layanan/${service.slug}`}
          className={buttonClass}
        >
          Buka Layanan
        </Link>
      )}
    </article>
  );
}
