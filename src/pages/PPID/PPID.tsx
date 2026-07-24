import "./PPID.css";

import PPIDHero from "../../components/ppid/PPIDHero";
import PPIDAbout from "../../components/ppid/PPIDAbout";
import PPIDRights from "../../components/ppid/PPIDRights";
import PPIDInfoTypes from "../../components/ppid/PPIDInfoTypes";
import PPIDTimeline from "../../components/ppid/PPIDTimeline";
import PPIDDocuments from "../../components/ppid/PPIDDocuments";
import PPIDFAQ from "../../components/ppid/PPIDFAQ";
import PPIDContact from "../../components/ppid/PPIDContact";
import PPIDCTA from "../../components/ppid/PPIDCTA";


export default function PPID() {

  return (
    <main className="ppid-page">

      <PPIDHero />

      <PPIDAbout />

      <PPIDRights />

      <PPIDInfoTypes />

      <PPIDTimeline />

      <PPIDDocuments />

      <PPIDFAQ />

      <PPIDContact />

      <PPIDCTA />

    </main>
  );
}