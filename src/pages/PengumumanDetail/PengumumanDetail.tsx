import { Link, useParams } from "react-router-dom";

import {
  Breadcrumb,
  Container,
  SEO,
} from "../../components/common";

import { announcementService } from "../../services/announcementService";

import "./PengumumanDetail.css";

export default function PengumumanDetail() {
  const { slug } = useParams();

  const announcement = slug
    ? announcementService.getAnnouncementBySlug(slug)
    : undefined;

  if (!announcement) {
    return (
      <main className="pengumuman-detail">
        <Container>
          <div className="pengumuman-detail__container">
            <h1>Pengumuman Tidak Ditemukan</h1>

            <p>
              Pengumuman yang Anda cari tidak tersedia atau telah dihapus.
            </p>

            <div className="pengumuman-detail__actions">
              <Link
                to="/pengumuman"
                className="pengumuman-detail__back"
              >
                ← Kembali ke Pengumuman
              </Link>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={announcement.title}
        description={announcement.description}
        keywords={[
          announcement.type,
          announcement.priority,
          "Polda Papua Tengah",
          "Pengumuman",
        ]}
      />

      <Breadcrumb
        items={[
          {
            label: "Beranda",
            href: "/",
          },
          {
            label: "Pengumuman",
            href: "/pengumuman",
          },
          {
            label: announcement.title,
          },
        ]}
      />

      <main className="pengumuman-detail">
        <Container>
          <div className="pengumuman-detail__container">

            <span
              className={`pengumuman-detail__badge pengumuman-detail__badge--${announcement.priority}`}
            >
              {announcement.priority.toUpperCase()}
            </span>

            <h1>{announcement.title}</h1>

            <p className="pengumuman-detail__date">
              Berlaku {announcement.publishStart} - {announcement.publishEnd}
            </p>

            <p className="pengumuman-detail__description">
              {announcement.description}
            </p>

            <hr />

            <div className="pengumuman-detail__content">
              {announcement.content}
            </div>

            {announcement.image && (
              <img
                src={announcement.image}
                alt={announcement.title}
                className="pengumuman-detail__image"
              />
            )}

            {announcement.attachment && (
              <p>
                <a
                  href={announcement.attachment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Lampiran
                </a>
              </p>
            )}

            <hr />

            <table className="pengumuman-detail__table">
              <tbody>

                <tr>
                  <th>Status</th>
                  <td>{announcement.status}</td>
                </tr>

                <tr>
                  <th>Tipe</th>
                  <td>{announcement.type}</td>
                </tr>

                <tr>
                  <th>Prioritas</th>
                  <td>{announcement.priority}</td>
                </tr>

                <tr>
                  <th>Sort Order</th>
                  <td>{announcement.sortOrder}</td>
                </tr>

                <tr>
                  <th>Dibuat</th>
                  <td>{announcement.createdAt}</td>
                </tr>

                <tr>
                  <th>Diperbarui</th>
                  <td>{announcement.updatedAt}</td>
                </tr>

              </tbody>
            </table>

            <div className="pengumuman-detail__actions">
              <Link
                to="/pengumuman"
                className="pengumuman-detail__back"
              >
                ← Kembali ke Pengumuman
              </Link>
            </div>

          </div>
        </Container>
      </main>
    </>
  );
}



