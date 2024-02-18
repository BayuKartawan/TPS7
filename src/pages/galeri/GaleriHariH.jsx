import CardGaleri from "../../component/CardGaleri"
import TombolBack from "../../component/TombolBack"
import CardYt from "../../component/CardYt"

const GaleriHariH = () => {
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
                        gambar="\hariH\harih-1.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-2.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-3.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-4.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-5.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-6.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-7.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-8.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-9.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-10.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-11.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-12.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-13.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-14.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-15.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-16.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-17.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-18.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-19.jpg"
                    />

                    <CardGaleri
                        gambar="\hariH\harih-20.jpg"
                    />

                    <CardYt
                        idVidio="toBo2lnY_to"
                        title="Jagain hansip lagi tidur"
                        deskripsi="Jagain hansip lagi tidur"
                    />

                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}

export default GaleriHariH
