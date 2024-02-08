import CardGaleri from "../../component/CardGaleri"
import TombolBack from "../../component/TombolBack"

const GaleriBimtek1 = () => {
    return (
        <div>
            <br />
            <br />
            <TombolBack
                menuju="/galeri"
            />
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

                    <CardGaleri
                        gambar="\bimtek1\bt1-4.jpg"
                    />

                    <CardGaleri
                        gambar="\bimtek1\bt1-5.jpg"
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
