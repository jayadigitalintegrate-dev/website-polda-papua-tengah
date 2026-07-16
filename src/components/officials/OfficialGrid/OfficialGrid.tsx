import "./OfficialGrid.css";

import { officials } from "../../../data/officials";
import OfficialCard from "../OfficialCard/OfficialCard";

const OfficialGrid = () => {
  return (
    <section className="official-grid">
      {officials.map((official) => (
        <OfficialCard
          key={official.id}
          official={official}
        />
      ))}
    </section>
  );
};

export default OfficialGrid;