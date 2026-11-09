import "./ServiceGrid.css";

import type { Service } from "../../../types/service";

import ServiceCard from "../ServiceCard";

interface ServiceGridProps {
  services: Service[];
  onCallCenter?: () => void;
}

export default function ServiceGrid({
  services,
  onCallCenter,
}: ServiceGridProps) {
  return (
    <section className="service-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onCallCenter={onCallCenter}
        />
      ))}
    </section>
  );
}


