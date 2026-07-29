import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import ContentLayout from "../layouts/ContentLayout";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import News from "../pages/News/News";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import Gallery from "../pages/Gallery/Gallery";
import Services from "../pages/Services/Services";
import ContactPage from "../pages/Contact/ContactPage";

import DetailPolres from "../pages/Polres/DetailPolres";
import PolresPage from "../pages/PolresPage";
import OfficialsPage from "../pages/Officials/OfficialsPage";

import PPID from "../pages/PPID/PPID";
import PPIDRequest from "../pages/PPIDRequest";

import SambutanKapolda from "../pages/SambutanKapolda/SambutanKapolda";

import Pengaduan from "../pages/Pengaduan/Pengaduan";
import CekPengaduan from "../pages/CekPengaduan/CekPengaduan";

import Download from "../pages/Download/Download";

import Pengumuman from "../pages/Pengumuman/Pengumuman";
import PengumumanDetail from "../pages/PengumumanDetail/PengumumanDetail";

import ServiceDetail from "../pages/ServiceDetail";

const basename = import.meta.env.DEV
  ? "/"
  : "/website-polda-papua-tengah";

function AppRoutes() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>

        {/* ===========================
            HOME
        =========================== */}
        <Route element={<HomeLayout />}>
          <Route
            path="/"
            element={<Home />}
          />
        </Route>

        {/* ===========================
            CONTENT
        =========================== */}
        <Route element={<ContentLayout />}>

          <Route
            path="/profil"
            element={<Profile />}
          />

          <Route
            path="/sambutan-kapolda"
            element={<SambutanKapolda />}
          />

          <Route
            path="/officials"
            element={<OfficialsPage />}
          />

          <Route
            path="/berita"
            element={<News />}
          />

          <Route
            path="/berita/:slug"
            element={<NewsDetail />}
          />

          <Route
            path="/galeri"
            element={<Gallery />}
          />

          <Route
            path="/layanan"
            element={<Services />}
          />

          <Route
            path="/layanan/:slug"
            element={<ServiceDetail />}
          />

          <Route
            path="/pengumuman"
            element={<Pengumuman />}
          />

          <Route
            path="/pengumuman/:slug"
            element={<PengumumanDetail />}
          />

          <Route
            path="/download"
            element={<Download />}
          />

          <Route
            path="/ppid"
            element={<PPID />}
          />

          <Route
            path="/ppid/request"
            element={<PPIDRequest />}
          />

          <Route
            path="/pengaduan"
            element={<Pengaduan />}
          />

          <Route
            path="/cek-pengaduan"
            element={<CekPengaduan />}
          />

          <Route
            path="/kontak"
            element={<ContactPage />}
          />

          {/* DAFTAR POLRES */}
          <Route
            path="/polres"
            element={<PolresPage />}
          />

          {/* Alternatif akses profil */}
          <Route
            path="/profil/polres"
            element={<PolresPage />}
          />

          {/* DETAIL POLRES */}
          <Route
            path="/polres/:slug"
            element={<DetailPolres />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;