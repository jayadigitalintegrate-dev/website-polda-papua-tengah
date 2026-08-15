import "./PopularWidget.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import type { News } from "../../../types/news";
import { fetchNews } from "../../../services/newsApi";

export default function PopularWidget() {
    const [popularNews, setPopularNews] = useState<News[]>([]);

    useEffect(() => {
        let mounted = true;

        fetchNews()
            .then((data) => {
                if (!mounted) {
                    return;
                }

                const popular = [...data]
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5);

                setPopularNews(popular);
            })
            .catch((error) => {
                console.error(
                    "Gagal mengambil berita populer:",
                    error
                );
            });

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <section className="popular-widget">
            <h3 className="popular-widget__title">
                Berita Populer
            </h3>

            {popularNews.length > 0 ? (
                <ol className="popular-widget__list">
                    {popularNews.map((item, index) => (
                        <li
                            key={item.id}
                            className="popular-widget__item"
                        >
                            <span className="popular-widget__number">
                                {index + 1}
                            </span>

                            <Link
                                to={`/berita/${item.slug}`}
                                className="popular-widget__link"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ol>
            ) : (
                <p className="popular-widget__empty">
                    Belum ada berita populer.
                </p>
            )}
        </section>
    );
}