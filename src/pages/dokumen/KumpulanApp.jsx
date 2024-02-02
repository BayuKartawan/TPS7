import Tombol from "../../component/Tombol"
import Safe from 'react-safe'

const Anggota = () => {
    return (
        <div>
            <br />
            <br />
            <section className="galeri">
                <div className="w-layout-grid grid-galeri-list">


                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="SIREKAP ⚡⚡⚡"
                        link="https://sirekap-web.kpu.go.id/"

                    />

                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="Cek DPT ⚡⚡⚡"
                        link="https://cekdptonline.kpu.go.id/"
                    />

                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="Scan bar code 📷"
                        link="https://dnschecker.org/qr-code-scanner.php"
                    />

                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="SIAKBA ⚡⚡⚡"
                        link="https://siakba.kpu.go.id/"
                    />

                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="Cek Calon DPRD Kabupaten 🕵️‍♂️"
                        link="https://infopemilu.kpu.go.id/Pemilu/Dcs_dprd"
                    />

                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="Cek Calon DPRD Provinsi 🕵️‍♂️"
                        link="https://infopemilu.kpu.go.id/Pemilu/Dct_dprprov"
                    />

                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="Cek Calon DPD 🕵️‍♂️"
                        link="https://infopemilu.kpu.go.id/Pemilu/Dcs_dpd"
                    />

                    <Tombol
                        target="_blank"
                        rel="noopener noreferrer"
                        gambar="/assets/kpu.png"
                        nama="Cek Calon DPR 🕵️‍♂️"
                        link="https://infopemilu.kpu.go.id/Pemilu/Dcs_dpr"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Cek Calon Presiden 🕵️‍♂️"
                        link="/dokumen/kumpulan-app/calon-presiden"
                    />

                </div>
            </section>

            {/* keterangan tambahan */}
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <span style={{
                    marginTop: "40px",
                    padding: "8px",
                    backgroundColor: "#EB455F",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#FCFFE7",
                    fontFamily: "Montserrat, sans-serif",
                    borderRadius: "10px"
                }}>Ada yang kurang? komen di bawah</span>
            </div>


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
