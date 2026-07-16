import { Outlet } from "react-router-dom";

import TopBar from "../components/layout/TopBar/TopBar";
import SolidHeader from "../components/layout/SolidHeader/SolidHeader";
import Footer from "../components/layout/Footer";

export default function ContentLayout() {
  return (
    <>
      <TopBar />

      <SolidHeader />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}