import { useState } from "react";

import "./Services.css";
import { serviceGroups } from "../../data/servicesData";
import CallCenterDialog from "../../components/services/CallCenterDialog";

import { serviceRepository } from "../../repositories/serviceRepository";

import {
  ServiceGrid,
  ServiceSearch,
} from "../../components/services";

import Container from "../../components/common/Container/Container";

export default function Services() {
  const [keyword, setKeyword] = useState("");
  const [callCenterOpen, setCallCenterOpen] = useState(false);

  const services = serviceRepository.getAll();

  const filteredServices = services.filter((service) => {
    const search = keyword.trim().toLowerCase();

    return (
      service.title.toLowerCase().includes(search) ||
      service.description.toLowerCase().includes(search) ||
      service.category.toLowerCase().includes(search) ||
      (serviceGroups.find((group) => group.id === service.group)?.title.toLowerCase().includes(search) ?? false)
    );
  });

  return (
    <main className="services-page">
      <section className="services-page__hero">
        <Container>
          <span className="services-page__badge">
            Pelayanan Kepolisian
          </span>

          <h1>
            Layanan Publik
          </h1>

          <p>
            Polda Papua Tengah menyediakan berbagai layanan
            kepolisian secara cepat, transparan, dan
            profesional untuk memudahkan masyarakat
            memperoleh informasi maupun pelayanan.
          </p>
        </Container>
      </section>

      <section className="services-page__content">
        <Container>
          <ServiceSearch
            value={keyword}
            onChange={setKeyword}
          />

          {filteredServices.length > 0 ? (
            <ServiceGrid
              services={filteredServices}
              onCallCenter={() => setCallCenterOpen(true)}
            />
          ) : (
            <div className="services-page__empty">
              <h3>
                Tidak ada layanan yang sesuai pencarian.
              </h3>

              <p>
                Coba kata kunci atau nama Satker lainnya.
              </p>
            </div>
          )}
        </Container>
      </section>
      {callCenterOpen && <CallCenterDialog onClose={() => setCallCenterOpen(false)} />}
    </main>
  );
}
