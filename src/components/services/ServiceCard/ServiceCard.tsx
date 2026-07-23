import "./ServiceCard.css";

import type { ServiceItem } from "../../../data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
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

      <a
        href={service.url}
        target={service.external ? "_blank" : "_self"}
        rel={service.external ? "noopener noreferrer" : undefined}
        className={`service-card__button ${
          !service.active ? "disabled" : ""
        }`}
      >
        {service.active ? "Buka Layanan" : "Segera Hadir"}
      </a>
    </article>
  );
}