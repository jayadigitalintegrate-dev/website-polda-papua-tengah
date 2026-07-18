import "./HeaderAction.css";

import { Icon } from "@iconify/react";

function HeaderAction() {
  return (
    <div className="header-action">

      <button
        className="header-search"
        aria-label="Cari"
      >
        <Icon icon="solar:magnifer-linear" />
      </button>

      <a
        href="tel:110"
        className="header-call"
      >
        <Icon icon="solar:phone-calling-linear" />

        <span>Lapor Polisi 110</span>

      </a>

    </div>
  );
}

export default HeaderAction;