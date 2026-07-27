import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { QuickAccessItem } from "./quickAccessData";


interface Props {

  item: QuickAccessItem;

}



function QuickAccessCard({ item }: Props) {


  const { t } = useTranslation("home");



  return (

    <Link

      to={item.url}

      className={`quick-card ${
        item.featured ? "featured" : ""
      }`}

    >



      {item.badge && (

        <span className="quick-badge">

          {t(item.badge)}

        </span>

      )}



      <div className="quick-icon">

        <Icon icon={item.icon} />

      </div>




      <div className="quick-content">


        <h3>

          {t(item.title)}

        </h3>



        <p>

          {t(item.description)}

        </p>


      </div>




      <div className="quick-footer">


        <span>

          {t("quickAccess.access")}

        </span>



        <span className="quick-arrow"><Icon icon="mdi:arrow-right" /></span>


      </div>


    </Link>

  );

}


export default QuickAccessCard;


