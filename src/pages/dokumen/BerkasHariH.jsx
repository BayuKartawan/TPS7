// import FileDownloader from "../pdf/FileDownloader"
import Safe from 'react-safe'

const BerkasHariH = () => {
    return (
        <div>
            <br />
            <br />

            {/* hapus jika sudah ada file */}
            <div style={{
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
            </div>

            <section className="galeri">
                <div className="w-layout-grid grid-galeri-list">

                    {/* <FileDownloader
                        filePath=".pdf"
                        fileName=".pdf"
                        buttonText=""
                    /> */}

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

export default BerkasHariH
