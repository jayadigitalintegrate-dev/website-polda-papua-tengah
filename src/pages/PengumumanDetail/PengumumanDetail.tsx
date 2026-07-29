import { useParams } from "react-router-dom";

import { announcementService } from "../../services/announcementService";

import "./PengumumanDetail.css";

export default function PengumumanDetail() {

  const { slug } = useParams();

  const announcement =
    slug
      ? announcementService.getAnnouncementBySlug(slug)
      : undefined;

  if (!announcement) {
    return (
      <main className="pengumuman-detail">
        <div className="pengumuman-detail__container">
          <h1>Pengumuman Tidak Ditemukan</h1>
          <p>
            Pengumuman yang Anda cari tidak tersedia atau telah dihapus.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pengumuman-detail">

      <div className="pengumuman-detail__container">

        <span className="pengumuman-detail__badge">
          {announcement.priority.toUpperCase()}
        </span>

        <h1>
          {announcement.title}
        </h1>

        <p className="pengumuman-detail__date">
          Berlaku:
          {" "}
          {announcement.publishStart}
          {" "}
          -
          {" "}
          {announcement.publishEnd}
        </p>

        <p className="pengumuman-detail__description">
          {announcement.description}
        </p>

      </div>

    </main>
  );

}