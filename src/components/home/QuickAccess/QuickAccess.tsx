import "./QuickAccess.css";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import QuickAccessCard from "./QuickAccessCard";
import { quickAccessData } from "./quickAccessData";

function QuickAccess() {
  return (
    <section className="quick-access">
      <SectionTitle
        eyebrow="QUICK ACCESS"
        title="Layanan Digital Kepolisian"
        subtitle="Akses layanan kepolisian secara cepat, mudah, dan aman melalui platform digital Polda Papua Tengah."
      />

      <div className="quick-grid">
        {quickAccessData.map((item) => (
          <QuickAccessCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="quick-action">
        <a
          href="/layanan"
          className="quick-button"
        >
          Lihat Semua Layanan
        </a>
      </div>
    </section>
  );
}

export default QuickAccess;