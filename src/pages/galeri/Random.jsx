import CardGaleri from "../../component/CardGaleri"

const Random = () => {
    return (
        <div>
            <br />
            <br />

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
                        gambar="\random\r1.jpg"
                    />

                    <CardGaleri
                        gambar="\random\r2.jpg"
                    />

                    <CardGaleri
                        gambar="\random\r3.jpg"
                    />

                    <CardGaleri
                        gambar="\random\r4.jpg"
                    />

                    <CardGaleri
                        gambar="\random\r5.jpg"
                    />

                    <CardGaleri
                        gambar="\random\r6.jpg"
                    />

                    <CardGaleri
                        gambar="\random\r7.jpg"
                    />

                    <CardGaleri
                        gambar="\random\r8.jpg"
                    />

                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Random
