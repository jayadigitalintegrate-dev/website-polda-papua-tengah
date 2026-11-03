import { useEffect, useState } from "react";

import { fetchHeroes, type CmsHero } from "../../services/heroApi";

import hero1 from "../../assets/hero/Papua Tengah Police Leadership Banner.png";
import hero2 from "../../assets/hero/Polda Papua Tengah Hero Banner Kapolda.png";
import hero3 from "../../assets/hero/Polda Papua Tengah Hero Banner wakapolda.png";
import hero4 from "../../assets/hero/hero-cms-7.webp";
import "./Hero.css";

const localHeroes: CmsHero[] = [
    { id: 1, image: hero1, image_url: hero1, sort_order: 1 },
    { id: 2, image: hero2, image_url: hero2, sort_order: 2 },
    { id: 3, image: hero3, image_url: hero3, sort_order: 3 },
    { id: 4, image: hero4, image_url: hero4, sort_order: 4 },
];
type SlideDirection = "next" | "prev";

export default function Hero() {
    const [heroes, setHeroes] = useState<CmsHero[]>(localHeroes);
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] =
        useState<SlideDirection>("next");

    useEffect(() => {
        let mounted = true;
        let busy = false;

        async function refreshHeroes() {
            if (busy || document.visibilityState === "hidden") return;

            busy = true;

            try {
                const data = await fetchHeroes();

                if (!mounted || data.length === 0) return;

                setHeroes((previous) => {
                    const same =
                        previous.length === data.length &&
                        previous.every((hero, index) =>
                            hero.id === data[index].id &&
                            hero.image_url === data[index].image_url &&
                            hero.sort_order === data[index].sort_order
                        );

                    return same ? previous : data;
                });
            } catch (error) {
                console.warn("Gagal memperbarui Hero CMS:", error);
            } finally {
                busy = false;
            }
        }

        const refreshVisible = () => {
            if (document.visibilityState === "visible") {
                void refreshHeroes();
            }
        };

        void refreshHeroes();

        const timer = window.setInterval(refreshVisible, 30000);
        document.addEventListener("visibilitychange", refreshVisible);

        return () => {
            mounted = false;
            window.clearInterval(timer);
            document.removeEventListener("visibilitychange", refreshVisible);
        };
    }, []);

    useEffect(() => {
        setCurrent((previous) =>
            previous >= heroes.length ? 0 : previous
        );
    }, [heroes.length]);

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
                        <span aria-hidden="true" className="hero-chevron hero-chevron-left" />
                    </button>

                    <button
                        type="button"
                        className="hero-arrow hero-next"
                        onClick={goToNext}
                        aria-label="Hero berikutnya"
                    >
                        <span aria-hidden="true" className="hero-chevron hero-chevron-right" />
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
