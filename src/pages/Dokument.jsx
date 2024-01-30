import Tombol from "../component/Tombol"
import FileDownloader from "./pdf/FileDownloader"
import Safe from 'react-safe'

const Anggota = () => {
    return (
        <div>
            <br />
            <br />
            <section className="galeri">
                <div className="w-layout-grid grid-galeri-list">

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Kumpulan Aplikasi KPU 🖥️⚡"
                        link="/dokumen/Kumpulan-app"
                    />

                    <FileDownloader
                        filePath="\assets\dok\PEDOMAN-TEKNIS-PELAKSANAAN-PEMUNGUTAN-DAN-PENGHITUNGAN-SUARA.pdf"
                        fileName=""
                        buttonText="Pedoman Teknis Pelaksanaan Pemungutan dan Penghitungan Suara"
                    />
                    <FileDownloader
                        filePath="/assets/dok/SK-KPPS-SIKU- BARAT.pdf"
                        fileName="SK KPPS Sikur Barat 2024.pdf"
                        buttonText="SK KPPS Sikur Barat 2024"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="File Bimtek 1"
                        link="/dokumen/bimtek1"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="File Bimtek 2"
                        link="/dokumen/bimtek2"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Berkas Hari H"
                        link="/dokumen/berkas-hari-h"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Berkas Pendukung"
                        link="/dokumen/berkas-pendukung"
                    />


                </div>
            </section>

            <br />
            <br />

            {/* FORM KOMENTAR */}
            <div id="disqus_thread" style={{ borderRadius: "7px", border: "1px solid #8ADAB2", padding: "10px", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }} />
            <Safe.script>
                {
                    (function () { // DON'T EDIT BELOW THIS LINE
                        var d = document, s = d.createElement('script');
                        s.src = 'https://tps7.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                    })()
                }
            </Safe.script>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Anggota
