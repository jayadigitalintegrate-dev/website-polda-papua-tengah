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
      className={`quick-card ${item.featured ? "featured" : ""}`}
    >
      <div className="quick-icon">
        <Icon icon={item.icon} />
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>
    </Link>
  );
}

export default QuickAccessCard;