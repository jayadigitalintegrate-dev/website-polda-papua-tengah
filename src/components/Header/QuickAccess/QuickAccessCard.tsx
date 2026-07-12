import type { QuickAccessItem } from "./quickAccessData";

interface Props {
  item: QuickAccessItem;
}

function QuickAccessCard({ item }: Props) {
  return (
    <div className="quick-card">
      <div className="quick-icon">
        {item.icon}
      </div>

      <h3>{item.title}</h3>
    </div>
  );
}

export default QuickAccessCard;