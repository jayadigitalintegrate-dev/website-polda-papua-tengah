import { statistics } from "./statisticsData";

export default function TrendSummaryTable() {
  return (
    <div className="service-stats__summary-table">
      <h4 className="service-stats__table-title">
        Perkembangan Kepuasan Tahun 2026
      </h4>

      <table>
        <thead>
          <tr>
            <th>Indikator</th>

            {statistics.trend.map((item) => (
              <th key={item.month}>
                {item.month.replace(" 2026", "")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sangat Puas (%)</td>

            {statistics.trend.map((item) => (
              <td key={item.month}>
                {item.verySatisfied}
              </td>
            ))}
          </tr>

          <tr>
            <td>Puas (%)</td>

            {statistics.trend.map((item) => (
              <td key={item.month}>
                {item.satisfied}
              </td>
            ))}
          </tr>

          <tr>
            <td>Cukup Puas (%)</td>

            {statistics.trend.map((item) => (
              <td key={item.month}>
                {item.fairlySatisfied}
              </td>
            ))}
          </tr>

          <tr>
            <td>Kurang Puas (%)</td>

            {statistics.trend.map((item) => (
              <td key={item.month}>
                {item.lessSatisfied}
              </td>
            ))}
          </tr>

          <tr>
            <td>Rata-rata Skor</td>

            {statistics.trend.map((item) => (
              <td key={item.month}>
                {item.score.toFixed(2)}
              </td>
            ))}
          </tr>

          <tr>
            <td>Jumlah Responden</td>

            {statistics.trend.map((item) => (
              <td key={item.month}>
                {item.respondent.toLocaleString("id-ID")}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}