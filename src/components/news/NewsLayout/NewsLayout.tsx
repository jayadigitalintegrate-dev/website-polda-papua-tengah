import "./NewsLayout.css";

import type { ReactNode } from "react";

interface NewsLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

export default function NewsLayout({
  children,
  sidebar,
}: NewsLayoutProps) {
  return (
    <div className="news-layout">
      <main className="news-layout__content">
        {children}
      </main>

      <aside className="news-layout__sidebar">
        {sidebar}
      </aside>
    </div>
  );
}