import "./QuickAccess.css";

import { useTranslation } from "react-i18next";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import QuickAccessCard from "./QuickAccessCard";
import { quickAccessData } from "./quickAccessData";


function QuickAccess() {

  const { t } = useTranslation("home");


  return (

    <section className="quick-access">


      <SectionTitle

        eyebrow={t("quickAccess.eyebrow")}

        title={t("quickAccess.title")}

        subtitle={t("quickAccess.subtitle")}

      />



      <div className="quick-grid">

        {quickAccessData.map((item) => (

          <QuickAccessCard

            key={item.id}

            item={item}

          />

        ))}

      </div>



      <div className="quick-action">

        <a

          href="/layanan"

          className="quick-button"

        >

          {t("quickAccess.button")}

        </a>


      </div>


    </section>

  );

}


export default QuickAccess;
