import { Icon } from "@iconify/react";

import "./SearchButton.css";

type SearchButtonProps = {
  onClick?: () => void;
  ariaLabel?: string;
};

export default function SearchButton({
  onClick,
  ariaLabel = "Cari",
}: SearchButtonProps) {
  return (
    <button
      className="search-button"
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Icon
        icon="mdi:magnify"
        width="22"
        height="22"
        aria-hidden="true"
      />
    </button>
  );
}