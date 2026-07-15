import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

function SectionTitle({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`section-title ${
        center ? "section-title--center" : "section-title--left"
      }`}
    >
      <span className="section-title__line"></span>

      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;