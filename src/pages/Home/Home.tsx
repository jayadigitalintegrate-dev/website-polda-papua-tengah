import Hero from "../../components/Hero/Hero";
import QuickAccess from "../../components/Header/QuickAccess/QuickAccess";

// sementara section lain kita nonaktifkan dulu
// import HeadlineNews from "../../components/home/HeadlineNews/HeadlineNews";
// import InformationCenter from "../../components/home/InformationCenter/InformationCenter";
// import MediaCenter from "../../components/home/MediaCenter/MediaCenter";
// import Statistics from "../../components/home/Statistics/Statistics";
// import Partners from "../../components/home/Partners/Partners";

function Home() {
  return (
    <>
      <Hero />

      <QuickAccess />

      {/* <HeadlineNews /> */}
      {/* <InformationCenter /> */}
      {/* <MediaCenter /> */}
      {/* <Statistics /> */}
      {/* <Partners /> */}
    </>
  );
}

export default Home;