import CardGaleri from "../../component/CardGaleri"
import TombolBack from "../../component/TombolBack"
import CardYt from "../../component/CardYt"

const SuratUndangan = () => {
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
                        gambar="\undangan\suratc-1.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-2.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-3.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-4.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-5.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-6.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-7.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-8.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-9.jpg"
                    />

                    <CardYt
                        idVidio="Fab-dx_kyWk"
                        title="penulisan c undangan untuk DPT"
                        deskripsi="penulisan c undangan untuk DPT"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-10.jpg"
                    />

                    <CardGaleri
                        gambar="\undangan\suratc-11.jpg"
                    />


                    <CardGaleri
                        gambar="\undangan\suratc-12.jpg"
                    />


                    <CardGaleri
                        gambar="\undangan\suratc-13.jpg"
                    />

                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}

export default SuratUndangan
