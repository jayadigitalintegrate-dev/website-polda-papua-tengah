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

type SlideDirection = "next" | "prev";

export default function Hero() {
    const [heroes, setHeroes] = useState<CmsHero[]>(localHeroes);
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] =
        useState<SlideDirection>("next");

    useEffect(() => {
        let mounted = true;

        fetchHeroes()
            .then((data) => {
                if (!mounted) return;

                if (data.length > 0) {
                    setHeroes(data);
                    setCurrent(0);
                }
            })
            .catch((error) => {
                console.warn(
                    "CMS Hero tidak dapat diakses. Menggunakan Hero lokal.",
                    error
                );
            });

        return () => {
            mounted = false;
        };
    }, []);

    const goToNext = () => {
        if (heroes.length <= 1) return;

        setDirection("next");
        setCurrent((prev) => (prev + 1) % heroes.length);
    };

    const goToPrevious = () => {
        if (heroes.length <= 1) return;

        setDirection("prev");
        setCurrent((prev) =>
            prev === 0 ? heroes.length - 1 : prev - 1
        );
    };

    const goToSlide = (index: number) => {
        if (index === current) return;

        setDirection(
            index > current ? "next" : "prev"
        );

        setCurrent(index);
    };

    useEffect(() => {
        if (heroes.length <= 1) return;

        const interval = window.setInterval(() => {
            goToNext();
        }, 6000);

        return () => {
            window.clearInterval(interval);
        };
    }, [heroes.length, current]);

    if (heroes.length === 0) {
        return null;
    }

    return (
        <section className="hero">
            {heroes.map((hero, index) => {
                const isActive = index === current;

                return (
                    <img
                        key={hero.id}
                        src={
                            hero.image_url ??
                            hero.image ??
                            ""
                        }
                        alt="Polda Papua Tengah"
                        className={`hero-image ${
                            isActive
                                ? `active ${direction}`
                                : ""
                        }`}
                        draggable={false}
                        loading={
                            index === 0
                                ? "eager"
                                : "lazy"
                        }
                        fetchPriority={
                            index === 0
                                ? "high"
                                : "auto"
                        }
                    />
                );
            })}

            <div
                className="hero-overlay"
                aria-hidden="true"
            />

            {heroes.length > 1 && (
                <>
                    <button
                        type="button"
                        className="hero-arrow hero-prev"
                        onClick={goToPrevious}
                        aria-label="Hero sebelumnya"
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        className="hero-arrow hero-next"
                        onClick={goToNext}
                        aria-label="Hero berikutnya"
                    >
                        ›
                    </button>

                    <div
                        className="hero-dots"
                        aria-label="Navigasi Hero"
                    >
                        {heroes.map((hero, index) => (
                            <button
                                key={hero.id}
                                type="button"
                                className={`hero-dot ${
                                    current === index
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    goToSlide(index)
                                }
                                aria-label={`Tampilkan Hero ${
                                    index + 1
                                }`}
                                aria-current={
                                    current === index
                                        ? "true"
                                        : undefined
                                }
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
