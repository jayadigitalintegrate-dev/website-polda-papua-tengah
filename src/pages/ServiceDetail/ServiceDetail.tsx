import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";

import "./ServiceDetail.css";

import { servicesData } from "../../data/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  document.title = service
    ? `${service.title} | Polda Papua Tengah`
    : "Layanan | Polda Papua Tengah";

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
            →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="service-detail">
      <div className="container">

        <nav className="service-detail__breadcrumb">
          <Link to="/">Beranda</Link>
          <span> / </span>
          <Link to="/layanan">Layanan</Link>
          <span> / </span>
          <span>{service.title}</span>
        </nav>

        <div className="service-detail__header">

          <span className="service-detail__icon">
            <Icon icon={service.icon} />
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

        <section className="service-detail__section">
          <h2>Informasi Pelayanan</h2>

          <table className="service-detail__info-table">
            <tbody>
              <tr>
                <th>Status</th>
                <td>{service.active ? "Aktif" : "Tidak Aktif"}</td>
              </tr>

              <tr>
                <th>Kategori</th>
                <td>{service.category}</td>
              </tr>

              <tr>
                <th>ID Layanan</th>
                <td>{service.slug}</td>
              </tr>

              <tr>
                <th>Tipe Akses</th>
                <td>{service.external ? "Eksternal" : "Internal Website"}</td>
              </tr>
              <tr>
                <th>Sumber Data</th>
                <td>Frontend (CMS Ready)</td>
              </tr>




            </tbody>
          </table>
        </section>

        <section className="service-detail__section">
          <h2>Layanan Lainnya</h2>

          <ul className="service-detail__related">
            {servicesData
              .filter((item) => item.slug !== service.slug)
              .slice(0, 4)
              .map((item) => (
                <li key={item.id}>
                  <Link to={`/layanan/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </section>






        <div className="service-detail__actions">

          {service.active && service.url !== "#" && (
            service.external ? (
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="service-detail__back"
                aria-label={`Buka layanan ${service.title}`}
              >
                Buka Layanan
              </a>
            ) : (
              <Link
                to={service.url}
                className="service-detail__back"
                aria-label={`Buka layanan ${service.title}`}
              >
                Buka Layanan
              </Link>
            )
          )}

          <Link
            to="/layanan"
            className="service-detail__back"
            aria-label="Kembali ke daftar layanan"
          >
            →
          </Link>

        </div>

      </div>
    </main>
  );
}



