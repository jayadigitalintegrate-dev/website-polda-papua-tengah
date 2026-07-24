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
import Contact from "../pages/Contact/Contact";
import DetailPolres from "../pages/Polres/DetailPolres";
import PolresPage from "../pages/PolresPage";
import OfficialsPage from "../pages/Officials/OfficialsPage";
import SambutanKapolda from "../pages/SambutanKapolda/SambutanKapolda";

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
            path="/kontak"
            element={<Contact />}
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