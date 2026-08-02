import { useTranslation } from "react-i18next";

function BreakingNews() {

  const { t } = useTranslation("home");

  return (
    <section className="breaking-news">
      <h2>{t("breakingNews.title")}</h2>
    </section>
  );
}

export default BreakingNews;

