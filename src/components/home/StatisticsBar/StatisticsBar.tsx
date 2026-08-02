import "./StatisticsBar.css";

import { useTranslation } from "react-i18next";

import StatisticsItem from "./StatisticsItem";
import { statistics } from "./statistics";


export default function StatisticsBar() {

  const { t } = useTranslation("home");


  return (
    <section className="statistics-bar">

      <div className="statistics-bar__container">

        {statistics.map((item) => (

          <StatisticsItem
            key={item.id}
            item={{
              ...item,
              label: t(item.label),
            }}
          />

        ))}

      </div>

    </section>
  );
}

