import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLarge from "./component/NavLarge";
import NavHp from "./component/NavHp"
import JudulHp from "./component/JudulHp"
import MusicPlayer from "./component/MusicPlayer"
import Home from './pages/Home'
import Anggota from "./pages/Anggota";
import Dokument from "./pages/Dokument"
import Galeri from "./pages/Galeri"
import IsiGaleri from "./pages/IsiGaleri"
import Bimtek1 from "./pages/Bimtek1"
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
          <Route path="/" element={<Home />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/anggota" element={<Anggota />} />
          <Route path="/dokumen" element={<Dokument />} />
          <Route path="/galeri/isi" element={<IsiGaleri />} />
          <Route path="/dokumen/bimtek1" element={<Bimtek1 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
