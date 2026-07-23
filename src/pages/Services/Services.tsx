import { useState } from "react";

import "./Services.css";

import { servicesData } from "../../data/servicesData";

import {
  ServiceGrid,
  ServiceSearch,
} from "../../components/services";

export default function Services() {
  const [keyword, setKeyword] = useState("");

  const filteredServices = servicesData.filter((service) => {
    const search = keyword.toLowerCase();

    return (
      service.title.toLowerCase().includes(search) ||
      service.description.toLowerCase().includes(search) ||
      service.category.toLowerCase().includes(search)
    );
  });

  return (
    <main className="services-page">
      <section className="services-page__hero">
        <div className="container">
          <span className="services-page__badge">
            Pelayanan Kepolisian
          </span>

          <h1>Layanan Publik</h1>

          <p>
            Polda Papua Tengah menyediakan berbagai layanan
            kepolisian secara cepat, transparan, dan
            profesional untuk memudahkan masyarakat
            memperoleh informasi maupun pelayanan.
          </p>
        </div>
      </section>

      <section className="services-page__content">
        <div className="container">

          <ServiceSearch
            value={keyword}
            onChange={setKeyword}
          />

          {filteredServices.length > 0 ? (
            <ServiceGrid services={filteredServices} />
          ) : (
            <div className="services-page__empty">
              <h3>Layanan tidak ditemukan</h3>

              <p>
                Coba gunakan kata kunci lain.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}