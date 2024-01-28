import Tombol from "../component/Tombol"
import FileDownloader from "./pdf/FileDownloader"

const Anggota = () => {
    return (
        <div>
            <br />
            <br />
            <section className="galeri">
                <div className="w-layout-grid grid-galeri-list">

                    <FileDownloader
                        filePath="/assets/dok/tes.pdf"
                        fileName="yuyu.pdf"
                        buttonText="ohayo"
                    />
                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="File SK"
                    // tStyle={{ borderColor: 'red' }}
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="File Bimtek 1"
                        link="/dok/kpu.pdf"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Berkas Hari H"
                    />

                    <Tombol
                        gambar="/assets/kpu.png"
                        nama="Berkas Pendukung"
                    />

                </div>
            </section>
        </div>
    )
}

export default Anggota
