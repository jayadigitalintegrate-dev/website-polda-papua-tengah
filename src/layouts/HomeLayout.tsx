import { Outlet } from "react-router-dom";

import Announcement from "../components/announcement";
import SolidHeader from "../components/layout/SolidHeader/SolidHeader";
import Footer from "../components/layout/Footer";

export default function HomeLayout() {
  return (
    <>
      <Announcement />

      <SolidHeader />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}