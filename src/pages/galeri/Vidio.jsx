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
                        idVidio="Fab-dx_kyWk"
                        title="penulisan c undangan untuk DPT"
                        deskripsi="penulisan c undangan untuk DPT"
                    />

                    <CardYt
                        idVidio="Jml3HjC4sWI"
                        title="Minjem bangku"
                        deskripsi="Minjem bangku"
                    />

                    <CardYt
                        idVidio="yCPQDUr7VT8"
                        title="Pembersihan poster caleg pt1"
                        deskripsi="Pembersihan poster caleg pt1"
                    />

                    <CardYt
                        idVidio="dae4f3NrJ48"
                        title="Pembersihan poster caleg pt2"
                        deskripsi="Pembersihan poster caleg pt2"
                    />

                    <CardYt
                        idVidio="S5IdOCqa7NA"
                        title="Minjem terop"
                        deskripsi="Minjem terop"
                    />

                    <CardYt
                        idVidio="Qps7E3BwSkY"
                        title="Progres TPS 7 pt.1"
                        deskripsi="Progres TPS 7 pt.1"
                    />

                    <CardYt
                        idVidio="8cV562Ppn90"
                        title="Progres TPS 7 pt.2"
                        deskripsi="Progres TPS 7 pt.2"
                    />

                    <CardYt
                        idVidio="toBo2lnY_to"
                        title="Jagain hansip lagi tidur"
                        deskripsi="Jagain hansip lagi tidur"
                    />

                </div>
            </section>

            <br /> <br />

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
