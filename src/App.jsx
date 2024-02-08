import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLarge from "./component/NavLarge";
import NavHp from "./component/NavHp"
import JudulHp from "./component/JudulHp"
import MusicPlayer from "./component/MusicPlayer"
import PreLoader from "./component/loader/PreLoader";
import ScrollTop from "./component/ScrollTop";
// halaman
import Home from './pages/Home'
import Anggota from "./pages/Anggota";
import Dokument from "./pages/Dokument"
import Galeri from "./pages/Galeri"
// isi galeri
import IsiGaleri from "./pages/galeri/IsiGaleri"
import GaleriBimtek1 from "./pages/galeri/GaleriBimtek1"
import GaleriBimtek2 from "./pages/galeri/GaleriBimtek2"
import GaleriHariH from "./pages/galeri/GaleriHariH"
import Random from "./pages/galeri/Random"
// isi dokumen
import Bimtek1 from "./pages/dokumen/Bimtek1"
import BerkasHariH from "./pages/dokumen/BerkasHariH";
import BerkasP from "./pages/dokumen/BerkasP"
import Bimtek2 from "./pages/dokumen/Bimtek2"
import KumpulanApp from "./pages/dokumen/KumpulanApp"
import Capres from "./pages/dokumen/Capres"
// vidio
import Vidio from "./pages/galeri/Vidio";
// halaman tidak ditemukan
import NotFound from "./pages/NotFound/NotFound";
// css
import './Tambah.css'

function App() {
  return (
    <Router>
      <div>
        <ScrollTop />
        <PreLoader />
        <NavLarge />
        <NavHp />
        <JudulHp />
        <MusicPlayer source="/assets/kpu.mp3" />
        <Routes>
          {/* menu utama */}
          <Route path="/" element={<Home />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/anggota" element={<Anggota />} />
          <Route path="/dokumen" element={<Dokument />} />
          {/* galeri */}
          <Route path="/galeri/pelantikan" element={<IsiGaleri />} />
          <Route path="/galeri/hari-h" element={<GaleriHariH />} />
          <Route path="/galeri/bimtek1" element={<GaleriBimtek1 />} />
          <Route path="/galeri/bimtek2" element={<GaleriBimtek2 />} />
          <Route path="/galeri/random" element={<Random />} />
          {/* dokumen */}
          <Route path="/dokumen/bimtek1" element={<Bimtek1 />} />
          <Route path="/dokumen/berkas-hari-h" element={<BerkasHariH />} />
          <Route path="/dokumen/berkas-pendukung" element={<BerkasP />} />
          <Route path="/dokumen/bimtek2" element={<Bimtek2 />} />
          <Route path="/dokumen/kumpulan-app" element={<KumpulanApp />} />
          <Route path="/dokumen/kumpulan-app/calon-presiden" element={<Capres />} />
          {/* VIDIO */}
          <Route path="/galeri/vidio" element={<Vidio />} />
          {/* halaman tidak di temukan */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
