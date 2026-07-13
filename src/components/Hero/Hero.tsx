import { useEffect, useState } from "react";
import "./Hero.css";

import hero1 from "../../assets/hero/hero-polda-papua-tengah.png";
import hero2 from "../../assets/hero/hero-poldapapua-tengah2.png";
import hero3 from "../../assets/hero/hero-poldapapua-tengah3.png";

const images = [hero1, hero2, hero3];

function Hero() {
  const [current, setCurrent] = useState(0);

  // preload semua gambar
  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  // autoplay
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`hero-image ${
            current === index ? "active" : ""
          }`}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={current === index ? "active" : ""}
          ></span>
        ))}
      </div>

      <button className="hero-btn">
        Selengkapnya
      </button>
    </section>
  );
}

export default Hero;