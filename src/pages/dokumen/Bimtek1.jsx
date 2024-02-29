import FileDownloader from "../pdf/FileDownloader"
import TombolBack from "../../component/TombolBack"
import Safe from 'react-safe'

const Bimtek1 = () => {
    return (
        <div>
            <br />
            <br />

            <TombolBack
                menuju="/dokumen"
            />

            <section className="galeri">
                <div className="w-layout-grid grid-galeri-list">

                    <FileDownloader
                        filePath="\assets\dok\modul-pelatihan-kpps.pdf"
                        fileName="Modul pelatihan KPPS.pdf"
                        buttonText="Modul pelatihan KPPS"
                    />

                    <FileDownloader
                        filePath="\assets\dok\PEMUNGUTAN-DAN-PENGHITUNGAN-SUARA.pdf"
                        fileName="PEMUNGUTAN-DAN-PENGHITUNGAN-SUARA.pdf"
                        buttonText="Pemungutan Dan Penghitungan Suara"
                    />

                    <FileDownloader
                        filePath="\assets\dok\SUBSTANSI-PENGATURAN-PEDOMAN-TEKNIS-PEMUNGUTAN-DAN-PENGHITUNGAN-SUARA.pdf"
                        fileName=""
                        buttonText="Substansi Pengaturan Pedoman Teknis Pemungutan Dan Penghitungan Suara"
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

export default Bimtek1
