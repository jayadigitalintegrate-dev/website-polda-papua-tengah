import { useTranslation } from "react-i18next";

function Statistics() {

  const { t } = useTranslation("home");

  return (
    <section className="statistics">
      <h2>{t("statistics.title")}</h2>
    </section>
  );
}

export default Statistics;

