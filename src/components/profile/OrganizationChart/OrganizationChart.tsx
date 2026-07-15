import "./OrganizationChart.css";

export default function OrganizationChart() {
  return (
    <section className="organization-chart">

      <div className="organization-container">

        <span className="organization-label">
          STRUKTUR ORGANISASI
        </span>

        <h2 className="organization-title">
          Struktur Organisasi
          <br />
          Polda Papua Tengah
        </h2>

        <p className="organization-description">
          Struktur organisasi Polda Papua Tengah disusun untuk
          mendukung pelayanan yang profesional, modern,
          transparan dan terpercaya kepada masyarakat.
        </p>

        <div className="org-tree">

          {/* Level 1 */}
          <div className="org-level">
            <div className="org-card chief">
              <h3>Kapolda</h3>
              <span>Irjen. Pol.</span>
            </div>
          </div>

          <div className="vertical-line"></div>

          {/* Level 2 */}
          <div className="org-level two-column">

            <div className="org-card">
              <h3>Wakapolda</h3>
            </div>

            <div className="org-card">
              <h3>Irwasda</h3>
            </div>

          </div>

          <div className="vertical-line short"></div>

          {/* Level 3 */}
          <div className="org-grid">

            <div className="org-card">
              <h3>Ro Ops</h3>
            </div>

            <div className="org-card">
              <h3>Ro SDM</h3>
            </div>

            <div className="org-card">
              <h3>Ro Log</h3>
            </div>

            <div className="org-card">
              <h3>Ro Renmin</h3>
            </div>

            <div className="org-card">
              <h3>Bid Humas</h3>
            </div>

            <div className="org-card">
              <h3>Bid Propam</h3>
            </div>

            <div className="org-card">
              <h3>Bid Dokkes</h3>
            </div>

            <div className="org-card">
              <h3>Bid TIK</h3>
            </div>

            <div className="org-card">
              <h3>Dit Intelkam</h3>
            </div>

            <div className="org-card">
              <h3>Dit Reskrimum</h3>
            </div>

            <div className="org-card">
              <h3>Dit Reskrimsus</h3>
            </div>

            <div className="org-card">
              <h3>Dit Resnarkoba</h3>
            </div>

            <div className="org-card">
              <h3>Dit Lantas</h3>
            </div>

            <div className="org-card">
              <h3>Dit Samapta</h3>
            </div>

            <div className="org-card">
              <h3>Dit Binmas</h3>
            </div>

            <div className="org-card">
              <h3>Dit Polairud</h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}