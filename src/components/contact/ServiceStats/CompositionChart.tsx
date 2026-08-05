import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { statistics } from "./statisticsData";
import "./ServiceStats.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function CompositionChart() {
  const data = {
    labels: statistics.composition.map((item) => item.label),

    datasets: [
      {
        data: statistics.composition.map((item) => item.value),

        backgroundColor: statistics.composition.map(
          (item) => item.color
        ),

        borderColor: "#ffffff",

        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "60%",

    plugins: {
      legend: {
        display: false,
      },
    },
  };

 return (
  <div>

    <div className="service-stats__chart-canvas">
      <Doughnut
        data={data}
        options={options}
      />
    </div>

    <div className="service-stats__legend">

      <div className="service-stats__respondent">

        <strong>
          {statistics.totalRespondent.toLocaleString("id-ID")}
        </strong>

        <span>Total Responden</span>

      </div>

      {statistics.composition.map((item) => (

        <div
          key={item.label}
          className="service-stats__legend-item"
        >

          <div className="service-stats__legend-left">

            <span
              className="service-stats__dot"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span>{item.label}</span>

          </div>

          <div className="service-stats__legend-right">

            <strong>{item.value}%</strong>

                       <span
              className={
                item.change >= 0
                  ? "service-stats__up"
                  : "service-stats__down"
              }
            >
              {item.change >= 0 ? "▲" : "▼"}{" "}
              {Math.abs(item.change)}%
            </span>

          </div>

        </div>

      ))}

    </div>

  </div>
  );
}