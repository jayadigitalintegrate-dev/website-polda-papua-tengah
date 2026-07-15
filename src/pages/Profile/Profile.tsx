import ProfileHero from "../../components/profile/ProfileHero";
import WelcomeSection from "../../components/profile/WelcomeSection";
import HistorySection from "../../components/profile/HistorySection";
import VisionMission from "../../components/profile/VisionMission";
import ServiceCharter from "../../components/profile/ServiceCharter";
import OrganizationChart from "../../components/profile/OrganizationChart";
import Officials from "../../components/profile/Officials";

export default function Profile() {
  return (
    <>
      <ProfileHero />

      <WelcomeSection />

      <HistorySection />

      <VisionMission />

      <ServiceCharter />

      <OrganizationChart />

      <Officials />
    </>
  );
}