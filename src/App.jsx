import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLarge from "./component/NavLarge";
import NavHp from "./component/NavHp"
import JudulHp from "./component/JudulHp"
import MusicPlayer from "./component/MusicPlayer"
// halaman
import Home from './pages/Home'
import Anggota from "./pages/Anggota";
import Dokument from "./pages/Dokument"
import Galeri from "./pages/Galeri"
// isi galeri
import IsiGaleri from "./pages/galeri/IsiGaleri"
// isi dokumen
import Bimtek1 from "./pages/dokumen/Bimtek1"
import BerkasHariH from "./pages/dokumen/BerkasHariH";
import BerkasP from "./pages/dokumen/BerkasP"
import Bimtek2 from "./pages/dokumen/Bimtek2"
// halaman tidak ditemukan
import NotFound from "./pages/NotFound/NotFound";
// css
import './Tambah.css'

function App() {
  return (
    <Router>
      <div>
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
          <Route path="/galeri/isi" element={<IsiGaleri />} />
          {/* dokumen */}
          <Route path="/dokumen/bimtek1" element={<Bimtek1 />} />
          <Route path="/dokumen/berkas-hari-h" element={<BerkasHariH />} />
          <Route path="/dokumen/berkas-pendukung" element={<BerkasP />} />
          <Route path="/dokumen/bimtek2" element={<Bimtek2 />} />
          {/* halaman tidak di temukan */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
