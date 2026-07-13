import "../../Header/QuickAccess/QuickAccess.css";
import QuickAccessCard from "../../Header/QuickAccess/QuickAccessCard";
import { quickAccessData } from "../../Header/QuickAccess/quickAccessData";

function QuickAccess() {
  return (
    <section className="quick-access">
      <div className="quick-title">
        <h2>Akses Cepat</h2>
        <p>Pilih layanan kepolisian yang ingin Anda akses.</p>
      </div>

      <div className="quick-grid">
        {quickAccessData.map((item) => (
          <QuickAccessCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default QuickAccess;