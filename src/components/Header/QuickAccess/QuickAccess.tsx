import "./QuickAccess.css";

import QuickAccessCard from "./QuickAccessCard";
import { quickAccessData } from "./quickAccessData";

function QuickAccess() {
  return (
    <section className="quick-access">

      <div className="quick-title">
        <h2>Akses Cepat</h2>
        <p>
          Pilih layanan yang ingin Anda akses.
        </p>
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