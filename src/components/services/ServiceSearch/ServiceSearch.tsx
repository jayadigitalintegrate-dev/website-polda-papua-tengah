import "./ServiceSearch.css";

interface ServiceSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ServiceSearch({
  value,
  onChange,
}: ServiceSearchProps) {
  return (
    <div className="service-search">
      <input
        type="text"
        className="service-search__input"
        placeholder="Cari layanan..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}