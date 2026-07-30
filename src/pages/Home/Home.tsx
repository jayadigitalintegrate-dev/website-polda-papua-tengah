import Hero from "../../components/Hero/Hero";
import StatisticsBar from "../../components/home/StatisticsBar";
import QuickAccess from "../../components/home/QuickAccess/QuickAccess";
import HeadlineNews from "../../components/home/HeadlineNews/HeadlineNews";
import NewsVideo from "../../components/news/NewsVideo";

import MediaCenter from "../../components/home/MediaCenter";
import Announcement from "../../components/announcement";

function Home() {
  return (
    <>
      <Hero />

      <Announcement />

      <StatisticsBar />

      <QuickAccess />

      <HeadlineNews />

      <NewsVideo />


      <MediaCenter />
    </>
  );
}

export default Home;
