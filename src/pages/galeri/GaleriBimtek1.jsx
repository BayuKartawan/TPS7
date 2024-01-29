import CardGaleri from "../../component/CardGaleri"

const GaleriBimtek1 = () => {
    return (
        <div>
            <br />
            <br />
            <section className="isi-galeri">
                <div className="w-layout-grid">

                    <CardGaleri
                        gambar="\bimtek1\bt1-1.jpg"
                    />

                    <CardGaleri
                        gambar="\bimtek1\bt1-2.jpg"
                    />

                    <CardGaleri
                        gambar="\bimtek1\bt1-3.jpg"
                    />

                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}

export default GaleriBimtek1
