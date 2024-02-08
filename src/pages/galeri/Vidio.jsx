import CardYt from "../../component/CardYt"
import TombolBack from "../../component/TombolBack"

import Safe from 'react-safe'
import "./Vidio.css"

const Vidio = () => {
    return (
        <div>
            <br />
            <br />

            <TombolBack
                menuju="/galeri"
            />

            <section className="container-card">
                <div className="w-layout-grid grid">

                    <CardYt
                        idVidio="NS4XLioucLo"
                        title="Arsip Keluarga Besar Sari || Penyenggir, Sikur 2007"
                        deskripsi="Arsip Keluarga Besar Sari || Penyenggir, Sikur 2007"
                    />

                </div>
            </section>

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
        </div>
    )
}

export default Vidio
