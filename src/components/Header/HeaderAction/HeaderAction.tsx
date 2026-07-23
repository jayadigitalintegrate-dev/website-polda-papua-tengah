import "./HeaderAction.css";

import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";

function HeaderAction() {
  const { t } = useTranslation("header");

  return (
    <div className="header-action">
      <button
        className="header-search"
        aria-label={t("search")}
      >
        <Icon icon="solar:magnifer-linear" />
      </button>

      <LanguageSwitcher />

      <a
        href="tel:110"
        className="header-call"
      >
        <Icon icon="solar:phone-calling-linear" />

        <span>{t("call110")}</span>
      </a>
    </div>
  );
}

export default HeaderAction;