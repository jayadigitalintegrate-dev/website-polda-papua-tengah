import "./SearchWidget.css";

import { Icon } from "@iconify/react";

interface SearchWidgetProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchWidget({
  value = "",
  onChange,
}: SearchWidgetProps) {
  return (
    <section className="search-widget">
      <h3 className="widget-title">
        Cari Berita
      </h3>

      <form
        className="search-widget__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          value={value}
          placeholder="Cari berita..."
          aria-label="Cari berita"
          onChange={(e) => onChange?.(e.target.value)}
        />

        <button type="submit">
          <Icon icon="mdi:magnify" />
        </button>
      </form>
    </section>
  );
}