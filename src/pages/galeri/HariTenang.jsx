import CardGaleri from "../../component/CardGaleri"
import TombolBack from "../../component/TombolBack"
import CardYt from "../../component/CardYt"

const HariTenang = () => {
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
                        gambar="\hariTenang\harit-1.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-2.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-3.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-4.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-5.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-6.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-7.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-8.jpg"
                    />

                    <CardGaleri
                        gambar="\hariTenang\harit-9.jpg"
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


                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}

export default HariTenang
