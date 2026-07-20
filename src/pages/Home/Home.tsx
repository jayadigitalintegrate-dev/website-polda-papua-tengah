import Hero from "../../components/Hero/Hero";
import StatisticsBar from "../../components/home/StatisticsBar";
import QuickAccess from "../../components/home/QuickAccess/QuickAccess";
import HeadlineNews from "../../components/home/HeadlineNews/HeadlineNews";

function Home() {
  return (
    <>
      <Hero />

      <StatisticsBar />

      <QuickAccess />

      <HeadlineNews />
    </>
  );
}

export default Home;