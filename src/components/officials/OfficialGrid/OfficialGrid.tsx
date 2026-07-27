import { useState } from "react";

import "./OfficialGrid.css";

import { officials } from "../../../data/officials";
import type { Official } from "../../../types/official";

import OfficialCard from "../OfficialCard/OfficialCard";
import OfficialProfile from "../OfficialProfile/OfficialProfile";


const OfficialGrid = () => {

  const [
    selectedOfficial,
    setSelectedOfficial
  ] = useState<Official | null>(null);


  if (selectedOfficial) {

    return (
      <OfficialProfile
        official={selectedOfficial}
        onBack={() => setSelectedOfficial(null)}
      />
    );

  }


  const leadership = officials.filter(
    (item) => item.order <= 2
  );


  const support = officials.filter(
    (item) => item.order >= 3 && item.order <= 7
  );


  const directors = officials.filter(
    (item) => item.order >= 8
  );


  const renderSection = (
    title: string,
    data: Official[]
  ) => (

    <div className="official-group">

      <h3 className="official-group-title">
        {title}
      </h3>


      <section className="official-grid">

        {data.map((official) => (

          <OfficialCard

            key={official.id}

            official={official}

            onClick={() =>
              setSelectedOfficial(official)
            }

          />

        ))}

      </section>

    </div>

  );


  return (

    <div>

      {renderSection(
        "Unsur Pimpinan",
        leadership
      )}


      {renderSection(
        "Unsur Pengawas dan Pembantu Pimpinan",
        support
      )}


      {renderSection(
        "Unsur Pelaksana Operasional / Direktorat",
        directors
      )}

    </div>

  );

};


export default OfficialGrid;
