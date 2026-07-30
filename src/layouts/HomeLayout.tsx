import { Outlet } from "react-router-dom";

import SolidHeader from "../components/layout/SolidHeader/SolidHeader";
import Footer from "../components/layout/Footer";

export default function HomeLayout() {
  return (
    <>

      <SolidHeader />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
