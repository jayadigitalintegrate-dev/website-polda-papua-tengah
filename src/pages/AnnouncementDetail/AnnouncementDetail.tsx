import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./AnnouncementDetail.css";

import { announcementService } from "../../services/announcementService";

import type { Announcement } from "../../types/announcement";


const AnnouncementDetail = () => {
  const { slug } = useParams();

  const [announcement, setAnnouncement] =
    useState<Announcement | null>(null);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {
    const loadAnnouncement = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      const data =
        await announcementService.getAnnouncementBySlug(slug);

      setAnnouncement(data ?? null);
      setLoading(false);
    };


    loadAnnouncement();
  }, [slug]);


  if (loading) {
    return (
      <section className="announcement-detail">
        <p>Memuat pengumuman...</p>
      </section>
    );
  }


  if (!announcement) {
    return (
      <section className="announcement-detail">
        <h1>Pengumuman tidak ditemukan</h1>

        <Link to="/pengumuman">
          ← Kembali ke Pengumuman
        </Link>
      </section>
    );
  }


  return (
    <section className="announcement-detail">

      <div className="announcement-detail__breadcrumb">
        <Link to="/">
          Beranda
        </Link>

        {" / "}

        <Link to="/pengumuman">
          Pengumuman
        </Link>
      </div>


      <article>

        <h1>
          {announcement.title}
        </h1>


        <div className="announcement-detail__meta">

          {announcement.priority && (
            <span>
              Prioritas: {announcement.priority}
            </span>
          )}


          {announcement.publishStart && (
            <span>
              {announcement.publishStart}
            </span>
          )}


          {announcement.status && (
            <span>
              Status: {announcement.status}
            </span>
          )}

        </div>


        <div className="announcement-detail__content">
          {announcement.description}
        </div>


      </article>

    </section>
  );
};


export default AnnouncementDetail;