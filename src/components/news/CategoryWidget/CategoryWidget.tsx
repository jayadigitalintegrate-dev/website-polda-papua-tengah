import "./CategoryWidget.css";

import { useEffect, useState } from "react";

import type { NewsCategory } from "../../../types/news";
import { fetchNews } from "../../../services/newsApi";

interface CategoryWidgetProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryWidget({
  selectedCategory,
  onSelectCategory,
}: CategoryWidgetProps) {
  const [categories, setCategories] = useState<NewsCategory[]>([
    {
      id: 0,
      name: "Semua",
      slug: "all",
    },
  ]);

  useEffect(() => {
    let mounted = true;

    fetchNews()
      .then((news) => {
        if (!mounted) {
          return;
        }

        const uniqueCategories = news
          .map((item) => item.category)
          .filter(
            (category, index, self) =>
              index ===
              self.findIndex(
                (item) =>
                  item.slug === category.slug
              )
          );

        setCategories([
          {
            id: 0,
            name: "Semua",
            slug: "all",
          },
          ...uniqueCategories,
        ]);
      })
      .catch((error) => {
        console.error(
          "Gagal mengambil kategori berita:",
          error
        );
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="category-widget">
      <h3 className="widget-title">
        Kategori
      </h3>

      <ul className="category-widget__list">
        {categories.map((category) => (
          <li key={category.slug}>
            <button
              type="button"
              className={
                selectedCategory === category.slug
                  ? "active"
                  : ""
              }
              onClick={() =>
                onSelectCategory(category.slug)
              }
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
