import "./ServiceGrid.css";

import type { Service } from "../../../types/service";

import ServiceCard from "../ServiceCard";

interface ServiceGridProps {
  services: Service[];
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


