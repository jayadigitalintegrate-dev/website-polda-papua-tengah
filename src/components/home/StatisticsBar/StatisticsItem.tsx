import type { StatisticItem } from "./statistics";

interface StatisticsItemProps {
  item: StatisticItem;
}

export default function StatisticsItem({
  item,
}: StatisticsItemProps) {
  return (
    <div className="statistics-item">
      <div className="statistics-item__icon">
        {item.icon}
      </div>

      <div className="statistics-item__value">
        {item.value}
      </div>

      <div className="statistics-item__label">
        {item.label}
      </div>
    </div>
  );
}