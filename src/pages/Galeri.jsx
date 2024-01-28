import Tombol from "../component/Tombol"

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

        </div>
    )
}

export default Anggota
