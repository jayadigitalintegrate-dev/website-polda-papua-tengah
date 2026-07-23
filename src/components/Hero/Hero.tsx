import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import hero1 from "../../assets/hero/hero-polda-papua-tengah.png";
import hero2 from "../../assets/hero/hero-poldapapua-tengah2.png";
import hero3 from "../../assets/hero/hero-poldapapua-tengah3.png";
import hero4 from "../../assets/hero/hero-poldapapua-tengah4.png";
import hero5 from "../../assets/hero/hero-poldapapua-tengah5.png";

const images = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = window.setInterval(nextSlide, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`hero-image ${current === index ? "active" : ""}`}
        />
      ))}

      <div className="hero-overlay" />

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={prevSlide}
        aria-label="Slide sebelumnya"
      >
        ‹
      </button>

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Slide berikutnya"
      >
        ›
      </button>

      <div className="hero-content">

        <h1>Website Resmi Polda Papua Tengah</h1>

        <p>
          Melayani masyarakat dengan Presisi, Integritas, Modern,
          Transparan dan Humanis.
        </p>

        <Link
          to="/berita"
          className="hero-button"
        >
          Selengkapnya
        </Link>

      </div>

      <div className="hero-dots">

        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}
