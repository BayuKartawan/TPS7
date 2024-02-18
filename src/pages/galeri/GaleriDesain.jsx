import CardGaleri from "../../component/CardGaleri"
import TombolBack from "../../component/TombolBack"

const Desain = () => {
    return (
        <div>
            <br />
            <br />

            <TombolBack
                menuju="/galeri"
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
                }}>Gambar Masi Kosong ....</span>
            </div> */}

            <section className="isi-galeri">
                <div className="w-layout-grid">

                    <CardGaleri
                        gambar="\desain\[1x1] larangan-01.jpg"
                    />

                    <CardGaleri
                        gambar="\desain\[2x1] selamat datang TPS 7-01.jpg"
                    />

                    <CardGaleri
                        gambar="\desain\sumber.jpg"
                    />

                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Desain
