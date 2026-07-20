import "./StatisticsBar.css";

import StatisticsItem from "./StatisticsItem";
import { statistics } from "./statistics";

export default function StatisticsBar() {
  return (
    <section className="statistics-bar">
      <div className="statistics-bar__container">
        {statistics.map((item) => (
          <StatisticsItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}