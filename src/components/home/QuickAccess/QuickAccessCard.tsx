import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import type { QuickAccessItem } from "./quickAccessData";

interface Props {
  item: QuickAccessItem;
}

function QuickAccessCard({ item }: Props) {
  return (
    <Link
      to={item.url}
      className={`quick-card ${
        item.featured ? "featured" : ""
      }`}
    >
      {/* ===========================
          BADGE
      =========================== */}

      {item.badge && (
        <span className="quick-badge">
          {item.badge}
        </span>
      )}

      {/* ===========================
          ICON
      =========================== */}

      <div className="quick-icon">
        <Icon icon={item.icon} />
      </div>

      {/* ===========================
          CONTENT
      =========================== */}

      <div className="quick-content">

        <h3>
          {item.title}
        </h3>

        <p>
          {item.description}
        </p>

      </div>

      {/* ===========================
          FOOTER
      =========================== */}

      <div className="quick-footer">

        <span>
          Akses Layanan
        </span>

        <span className="quick-arrow">
          →
        </span>

      </div>

    </Link>
  );
}

export default QuickAccessCard;