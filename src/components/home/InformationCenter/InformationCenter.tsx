import { useTranslation } from "react-i18next";

function InformationCenter() {
  const { t } = useTranslation("home");

  return (
    <section className="information-center">
      <h2>{t("informationCenter.title")}</h2>
    </section>
  );
}

export default InformationCenter;
