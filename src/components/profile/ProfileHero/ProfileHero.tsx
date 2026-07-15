import "./ProfileHero.css";

import heroImage from "../../../assets/hero/hero-polda-papua-tengah.png";

export default function ProfileHero() {
  return (
    <section className="profile-hero">
      <img
        src={heroImage}
        alt="Profil Polda Papua Tengah"
        className="profile-hero__image"
      />

      <div className="profile-hero__overlay" />

      <div className="profile-hero__content">
        <span className="profile-hero__breadcrumb">
          Beranda / Profil
        </span>

        <h1 className="profile-hero__title">
          Profil Polda Papua Tengah
        </h1>
      </div>
    </section>
  );
}