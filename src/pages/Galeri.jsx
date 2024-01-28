import Tombol from "../component/Tombol"
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
                        nama="Pelantikan"
                        link="/galeri/isi"
                    // tStyle={{ borderColor: 'red' }}
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Bimtek 1"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Random"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Lol"
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
        </div>
    )
}

export default Anggota