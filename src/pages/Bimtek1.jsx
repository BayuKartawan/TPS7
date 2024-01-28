import FileDownloader from "./pdf/FileDownloader"
import Safe from 'react-safe'

const Anggota = () => {
    return (
        <div>
            <br />
            <br />
            <section className="galeri">
                <div className="w-layout-grid grid-galeri-list">

                    <FileDownloader
                        filePath="/assets/dok/tes.pdf"
                        fileName="yuyu.pdf"
                        buttonText="ohayo"
                    />

                    <FileDownloader
                        filePath="/assets/dok/tes.pdf"
                        fileName="yuyu.pdf"
                        buttonText="ohayo"
                    />

                    <FileDownloader
                        filePath="/assets/dok/tes.pdf"
                        fileName="yuyu.pdf"
                        buttonText="ohayo"
                    />

                    <FileDownloader
                        filePath="/assets/dok/tes.pdf"
                        fileName="yuyu.pdf"
                        buttonText="ohayo"
                    />

                </div>
            </section>

            <br />
            <br />

            {/* FORM KOMENTAR */}
            <div id="disqus_thread" style={{ borderRadius: "7px", border: "1px solid #8ADAB2", padding: "10px" }} />
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
