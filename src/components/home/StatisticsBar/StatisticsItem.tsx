import { useTranslation } from "react-i18next";

import type { StatisticItem } from "./statistics";


interface StatisticsItemProps {

  item: StatisticItem;

}



export default function StatisticsItem({

  item,

}: StatisticsItemProps) {


  const { t } = useTranslation("home");


  return (

    <div className="statistics-item">


      <div className="statistics-item__icon">

        {item.icon}

      </div>



      <div className="statistics-item__value">

        {item.value}

      </div>



      <div className="statistics-item__label">

        {t(item.label)}

      </div>


    </div>

  );

}
