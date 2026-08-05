import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { statistics } from "./statisticsData";

import "./ServiceStats.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export default function SatisfactionChart() {
  const data = {
    labels: statistics.trend.map((item) => item.month),

    datasets: [
      {
        label: "Indeks Kepuasan",

        data: statistics.trend.map((item) => item.score),

        borderColor: "#0B4F8A",

        backgroundColor: "rgba(11,79,138,.12)",

        fill: true,

        tension: 0.35,

        pointRadius: 6,

        pointHoverRadius: 8,

        pointBorderWidth: 2,

        pointBackgroundColor: statistics.trend.map(
          (item) => item.color
        ),

        pointBorderColor: statistics.trend.map(
          (item) => item.color
        ),
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      intersect: false,
      mode: "index" as const,
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          title(items: any) {
            return items[0].label;
          },

          label(context: any) {
            const item =
              statistics.trend[context.dataIndex];

            return [
              `Nilai : ${item.score.toFixed(2)}`,
              `Kategori : ${item.category}`,
            ];
          },
        },
      },
    },

    scales: {
      y: {
        min: 4,

        max: 5,

        ticks: {
          stepSize: 0.1,
        },
      },
    },
  };

  return (
    <>
      <div className="service-stats__legend-scale">

        <div className="legend-item">

          <span
            className="legend-dot"
            style={{
              backgroundColor: "#22C55E",
            }}
          />

          <span>Sangat Puas</span>

        </div>

        <div className="legend-item">

          <span
            className="legend-dot"
            style={{
              backgroundColor: "#2563EB",
            }}
          />

          <span>Puas</span>

        </div>

        <div className="legend-item">

          <span
            className="legend-dot"
            style={{
              backgroundColor: "#FACC15",
            }}
          />

          <span>Cukup Puas</span>

        </div>

        <div className="legend-item">

          <span
            className="legend-dot"
            style={{
              backgroundColor: "#EF4444",
            }}
          />

          <span>Kurang Puas</span>

        </div>

      </div>

      <div className="service-stats__chart-canvas">

        <Line
          data={data}
          options={options}
        />

      </div>

    </>
  );
}