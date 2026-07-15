import "./VisionMission.css";

const missions = [
  "Memberikan perlindungan, pengayoman dan pelayanan kepada masyarakat.",
  "Menegakkan hukum secara profesional, transparan dan berkeadilan.",
  "Meningkatkan kualitas pelayanan publik berbasis digital.",
  "Mewujudkan Polri Presisi yang modern dan terpercaya."
];

export default function VisionMission() {
  return (
    <section className="vision-section">
      <div className="vision-container">

        <span className="vision-label">
          VISI & MISI
        </span>

        <h2 className="vision-title">
          Landasan Arah Pembangunan Organisasi
        </h2>

        <div className="vision-grid">

          <article className="vision-card">

            <div className="vision-icon">
              🎯
            </div>

            <h3>Visi</h3>

            <p>
              Terwujudnya Polda Papua Tengah yang
              Presisi, profesional, modern,
              terpercaya serta dicintai masyarakat.
            </p>

          </article>

          <article className="vision-card">

            <div className="vision-icon">
              🚔
            </div>

            <h3>Misi</h3>

            <ul>

              {missions.map((mission, index) => (
                <li key={index}>
                  {mission}
                </li>
              ))}

            </ul>

          </article>

        </div>

      </div>
    </section>
  );
}