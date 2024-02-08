import FileDownloader from "../pdf/FileDownloader"
import TombolBack from '../../component/TombolBack';

import Safe from 'react-safe'

const BerkasP = () => {
    return (
        <div>
            <br />
            <br />

            <TombolBack
                menuju="/dokumen"
            />

            {/* hapus jika sudah ada file */}
            {/* <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <span style={{
                    padding: "10px",
                    backgroundColor: "#EB455F",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#FCFFE7",
                    fontFamily: "Montserrat, sans-serif",
                    borderRadius: "10px"
                }}>File Masi Kosong ....</span>
            </div> */}

            <section className="galeri">
                <div className="w-layout-grid grid-galeri-list">

                    <FileDownloader
                        filePath="https://drive.google.com/file/d/1Xc0wDDsaIeYP4qpbT_bqMaH8k8DvOYxo/view?usp=drive_link"
                        fileName="COVER BUKU PANDUAN KPPS PEMILU 2024"
                        buttonText="COVER BUKU PANDUAN KPPS PEMILU 2024"
                    />

                    <FileDownloader
                        filePath="https://drive.google.com/file/d/1Yocs0bTL6kPOv5nzHaBT6DlUjnTVhsmk/view?usp=drive_link"
                        fileName="BUKU PANDUAN KPPS PEMILU 2024_V3"
                        buttonText="BUKU PANDUAN KPPS PEMILU 2024_V3"
                    />

                    <FileDownloader
                        filePath="https://drive.google.com/file/d/1wVb1UAdAS7-j0Dvd8nwhEA6UQ0qONvC9/view?usp=drive_link"
                        fileName="Logistik Pemilu 2024_A4 (Greyscale)"
                        buttonText="Logistik Pemilu 2024_A4 (Greyscale)"
                    />


                    <FileDownloader
                        filePath="https://drive.google.com/file/d/1oeEv3XNlxG4fXbndJshLOJwjVBw4uhhd/view?usp=drive_link"
                        fileName="Surat suara sah tidak sah F4_(Greyscale)"
                        buttonText="Surat suara sah tidak sah F4_(Greyscale)"
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

export default BerkasP
