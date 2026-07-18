import "./CategoryWidget.css";

import { getCategories } from "../../../services/news.service";

interface CategoryWidgetProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryWidget({
  selectedCategory,
  onSelectCategory,
}: CategoryWidgetProps) {
  const categories = getCategories();

  return (
    <section className="category-widget">
      <h3>Kategori</h3>

      <ul>
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