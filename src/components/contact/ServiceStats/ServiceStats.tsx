import "./ServiceStats.css";

import AnimatedCounter from "./AnimatedCounter";
import SatisfactionChart from "./SatisfactionChart";
import CompositionChart from "./CompositionChart";
import TrendSummaryTable from "./TrendSummaryTable";

type SummaryItem = {
  id: number;
  icon: string;
  value: number;
  title: string;
  description: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

const summary: SummaryItem[] = [
  {
    id: 1,
    icon: "⭐",
    value: 4.9,
    decimals: 1,
    suffix: " / 5.0",
    title: "Kepuasan Masyarakat",
    description: "Rata-rata penilaian masyarakat.",
  },
  {
    id: 2,
    icon: "💬",
    value: 1248,
    title: "Kritik & Saran",
    description: "Total masukan yang diterima.",
  },
  {
    id: 3,
    icon: "👍",
    value: 98,
    suffix: "%",
    title: "Respon Positif",
    description: "Persentase apresiasi masyarakat.",
  },
  {
    id: 4,
    icon: "⚡",
    value: 24,
    prefix: "< ",
    suffix: " Jam",
    title: "Estimasi Respon",
    description: "Rata-rata waktu respon operator.",
  },
];

export default function ServiceStats() {
  return (
    <section className="service-stats">
      <div className="service-stats__header">
        <span className="service-stats__badge">
          INDIKATOR PELAYANAN
        </span>

        <h2>Statistik Pelayanan Kepada Masyarakat</h2>

        <p>
          Statistik pelayanan yang akan diperbarui secara otomatis melalui CMS.
        </p>
      </div>

      <div className="service-stats__summary">
        {summary.map((item) => (
          <div
            key={item.id}
            className="service-stats__card"
          >
            <div className="service-stats__icon">
              {item.icon}
            </div>

            <div className="service-stats__content">
              <h3>
                <AnimatedCounter
                  end={item.value}
                  decimals={item.decimals ?? 0}
                  prefix={item.prefix ?? ""}
                  suffix={item.suffix ?? ""}
                />
              </h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="service-stats__analytics">
        <div className="service-stats__chart">
          <div className="service-stats__chart-title">
            📈 Grafik Tren Kepuasan
          </div>

          <SatisfactionChart />

          <TrendSummaryTable />
        </div>

        <div className="service-stats__chart">
          <div className="service-stats__chart-title">
            🥧 Diagram Komposisi
          </div>

          <CompositionChart />
        </div>
      </div>
    </section>
  );
}
