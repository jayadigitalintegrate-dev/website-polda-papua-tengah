import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation("home");

  return (
    <section className="partners">
      <h2>{t("partners.title")}</h2>
    </section>
  );
}

export default Partners;
