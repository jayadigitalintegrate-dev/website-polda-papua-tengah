import "./ServiceGrid.css";

import type { ServiceItem } from "../../../data/servicesData";

import ServiceCard from "../ServiceCard";

interface ServiceGridProps {
  services: ServiceItem[];
}

export default function ServiceGrid({
  services,
}: ServiceGridProps) {
  return (
    <section className="service-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </section>
  );
}