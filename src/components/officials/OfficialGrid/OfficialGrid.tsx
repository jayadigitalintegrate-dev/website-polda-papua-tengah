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

        onBack={() =>
          setSelectedOfficial(null)
        }

      />

    );

  }



  return (

    <section className="official-grid">


      {
        officials.map((official) => (

          <OfficialCard

            key={official.id}

            official={official}

            onClick={() =>
              setSelectedOfficial(official)
            }

          />

        ))
      }


    </section>

  );

};


export default OfficialGrid;
