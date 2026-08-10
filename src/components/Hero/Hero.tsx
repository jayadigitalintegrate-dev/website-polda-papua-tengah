import { useEffect, useState } from "react";

import { fetchHeroes, type CmsHero } from "../../services/heroApi";

import "./Hero.css";

export default function Hero() {
  const [heroes, setHeroes] = useState<CmsHero[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    fetchHeroes()
      .then((data) => {
        if (!mounted) return;

        setHeroes(data);
        setCurrent(0);
      })
      .catch((error) => {
        console.error("Gagal memuat Hero dari CMS:", error);

        if (mounted) {
          setHeroes([]);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
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

  if (loading) {
    return (
      <section className="hero">
        <div className="hero-loading">
          Memuat Hero...
        </div>
      </section>
    );
  }

  if (heroes.length === 0) {
    return null;
  }

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