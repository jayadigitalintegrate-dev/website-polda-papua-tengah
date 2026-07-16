import { Outlet } from "react-router-dom";

import Announcement from "../components/announcement";

import Header from "../components/Header/Header";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <>

      <Announcement />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

    </>
  );
}