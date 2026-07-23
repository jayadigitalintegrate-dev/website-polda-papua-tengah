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
      🔍
    </button>
  );
}