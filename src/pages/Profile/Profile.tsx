import Breadcrumb from "../../components/common/Breadcrumb";
import PageHeader from "../../components/common/PageHeader";

import WelcomeSection from "../../components/profile/WelcomeSection";
import HistorySection from "../../components/profile/HistorySection";
import VisionMission from "../../components/profile/VisionMission";
import ServiceCharter from "../../components/profile/ServiceCharter";
import OrganizationChart from "../../components/profile/OrganizationChart";
import Officials from "../../components/profile/Officials";

export default function Profile() {
  return (
    <>
     <Breadcrumb
  items={[
    { label: "Beranda", href: "/" },
    { label: "Profil" },
  ]}
/>

<PageHeader
  eyebrow="PROFIL"
  title="Profil Polda Papua Tengah"
  description="Informasi mengenai sejarah, visi, misi, struktur organisasi, serta pejabat utama Kepolisian Daerah Papua Tengah sebagai wujud transparansi kepada masyarakat."
/>

      <WelcomeSection />

      <HistorySection />

      <VisionMission />

      <ServiceCharter />

      <OrganizationChart />

      <Officials />
    </>
  );
}