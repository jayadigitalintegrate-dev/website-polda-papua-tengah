import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import "./ServiceCard.css";

import type { Service } from "../../../types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {

  const buttonClass = `service-card__button ${
    !service.active ? "disabled" : ""
  }`;

  const iconClass = `service-card__icon service-card__icon--${service.color}`;

  return (
    <article className="service-card">

      <div className={iconClass}>
        <Icon icon={service.icon} width="42" height="42" />
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

