import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;

  /**
   * Tulisan kecil di atas judul
   * contoh:
   * BERITA TERKINI
   * QUICK ACCESS
   */
  eyebrow?: string;

  center?: boolean;

  className?: string;
}

function SectionTitle({
  title,
  subtitle,
  eyebrow,
  center = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={[
        "section-title",
        center
          ? "section-title--center"
          : "section-title--left",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span className="section-title__eyebrow">
          {eyebrow}
        </span>
      )}

      <span className="section-title__line"></span>

      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;