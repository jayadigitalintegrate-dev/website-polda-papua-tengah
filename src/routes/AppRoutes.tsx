import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import News from "../pages/News/News";
import Announcement from "../pages/Announcement/Announcement";
import Gallery from "../pages/Gallery/Gallery";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import DetailPolres from "../pages/Polres/DetailPolres";

function AppRoutes() {
  return (
    <BrowserRouter basename="/website-polda-papua-tengah">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/berita" element={<News />} />
          <Route path="/pengumuman" element={<Announcement />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/polres/:slug" element={<DetailPolres />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;