import { Outlet } from "react-router-dom";

import AnnouncementPopup from "../components/announcement/AnnouncementPopup/AnnouncementPopup";
import SolidHeader from "../components/layout/SolidHeader/SolidHeader";
import Footer from "../components/layout/Footer";

export default function HomeLayout() {
    return (
        <>
            <AnnouncementPopup />

            <SolidHeader />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}
