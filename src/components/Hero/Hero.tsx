import { useEffect, useState } from "react";

import { fetchHeroes, type CmsHero } from "../../services/heroApi";

import hero1 from "../../assets/hero/hero-polda-papua-tengah.webp";
import hero2 from "../../assets/hero/hero-poldapapua-tengah2.webp";
import hero3 from "../../assets/hero/hero-poldapapua-tengah3.webp";
import hero4 from "../../assets/hero/hero-poldapapua-tengah4.webp";
import hero5 from "../../assets/hero/hero-poldapapua-tengah5.webp";

import "./Hero.css";

const localHeroes: CmsHero[] = [
  {
    id: 1,
    image: hero1,
    image_url: hero1,
    sort_order: 1,
  },
  {
    id: 2,
    image: hero2,
    image_url: hero2,
    sort_order: 2,
  },
  {
    id: 3,
    image: hero3,
    image_url: hero3,
    sort_order: 3,
  },
  {
    id: 4,
    image: hero4,
    image_url: hero4,
    sort_order: 4,
  },
  {
    id: 5,
    image: hero5,
    image_url: hero5,
    sort_order: 5,
  },
];

export default function Hero() {
  // Hero lokal langsung tampil agar GitHub Pages tidak kosong
  // ketika CMS belum tersedia.
  const [heroes, setHeroes] = useState<CmsHero[]>(localHeroes);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let mounted = true;

    // Coba ambil Hero dari CMS di background.
    // Jika gagal, Hero lokal tetap digunakan.
    fetchHeroes()
      .then((data) => {
        if (!mounted) return;

        if (data.length > 0) {
          setHeroes(data);
          setCurrent(0);
        }
      })
      .catch((error) => {
        console.error(
          "Gagal memuat Hero dari CMS. Menggunakan Hero lokal:",
          error
        );
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (heroes.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroes.length);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [heroes.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroes.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroes.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">
      {heroes.map((hero, index) => (
        <img
          key={hero.id}
          src={hero.image_url ?? ""}
          alt={`Hero ${index + 1}`}
          className={`hero-image ${
            current === index ? "active" : ""
          }`}
        />
      ))}

      <div className="hero-overlay" />

      {heroes.length > 1 && (
        <>
          <button
            type="button"
            className="hero-arrow hero-prev"
            onClick={prevSlide}
            aria-label="Hero sebelumnya"
          >
            ‹
          </button>

          <button
            type="button"
            className="hero-arrow hero-next"
            onClick={nextSlide}
            aria-label="Hero berikutnya"
          >
            ›
          </button>

          <div className="hero-dots">
            {heroes.map((hero, index) => (
              <button
                key={hero.id}
                type="button"
                className={`hero-dot ${
                  current === index ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Hero ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}