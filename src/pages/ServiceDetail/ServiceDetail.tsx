import { Link, useParams } from "react-router-dom";

import "./ServiceDetail.css";

import { servicesData } from "../../data/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="service-detail">
        <div className="container">
          <h1>Layanan Tidak Ditemukan</h1>

          <p>
            Data layanan yang Anda cari tidak tersedia.</p>

          <Link
            to="/layanan"
            className="service-detail__back"
          >
            ← Kembali ke Daftar Layanan
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="service-detail">
      <div className="container">

        <div className="service-detail__header">

          <span className="service-detail__icon">
            {service.icon}
          </span>

          <div>
            <span className="service-detail__category">
              {service.category}
            </span>

            <h1>{service.title}</h1>
          </div>

        </div>

        <p className="service-detail__description">
          {service.content}
        </p>

        <section className="service-detail__section">
          <h2>Persyaratan</h2>

          <ul>
            {service.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="service-detail__section">
          <h2>Prosedur Pelayanan</h2>

          <ol>
            {service.procedures.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section>

        <div className="service-detail__actions">

          {service.active && service.url !== "#" && (
            service.external ? (
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="service-detail__back"
              >
                Buka Layanan
              </a>
            ) : (
              <Link
                to={service.url}
                className="service-detail__back"
              >
                Buka Layanan
              </Link>
            )
          )}

          <Link
            to="/layanan"
            className="service-detail__back"
          >
            ← Kembali
          </Link>

        </div>

      </div>
    </main>
  );
}