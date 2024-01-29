import CardAnggota from "../component/CardAnggota"

const Anggota = () => {
    return (
        <div>
            <br />
            <br />
            <section className="container-card">
                <div className="w-layout-grid grid">

                    <CardAnggota
                        gambar="/pBay.jpg"
                        nama="✨Bayu Kartawan✨"
                        ig="https://www.instagram.com/blim.bink/"
                        fb="https://www.facebook.com/tuanpapuk.tuanpapuk"
                        yt="https://www.youtube.com/@tipahgabe8878"
                        posisi="(KPPS 5)"
                    />

                    <CardAnggota
                        gambar="/profil/pEka.jpg"
                        nama="✨Eka Mulia Wardini✨"
                        ig="https://www.instagram.com/eka.muliaa/"
                        // fb=""
                        // yt=""
                        posisi="(KPPS 1)"
                    />

                    <CardAnggota
                        gambar="/profil/pNunung.jpg"
                        nama="✨Nunung Elinda Aswari✨"
                        // ig=""
                        // fb=""
                        // yt=""
                        posisi="(KPPS 4)"
                    />

                    <CardAnggota
                        gambar="/profil/pIjuk.jpg"
                        nama="✨Indra Setiawan✨"
                        // ig=""
                        // fb=""
                        // yt=""
                        posisi="(KPPS 6)"
                    />

                    <CardAnggota
                        gambar="/profil/pYoni.jpg"
                        nama="✨Yoni Sulastri✨"
                        // ig=""
                        // fb=""
                        // yt=""
                        posisi="(KPPS 3)"
                    />

                    <CardAnggota
                        gambar="/profil/pTia.jpg"
                        nama="✨Septiana Azmi✨"
                        // ig=""
                        // fb=""
                        // yt=""
                        posisi="(KPPS 2)"
                    />

                    <CardAnggota
                        gambar="/profil/pOjan.jpg"
                        nama="✨Paozan Azima✨"
                        ig="https://www.instagram.com/paozanazima__/"
                        // fb=""
                        // yt=""
                        posisi="(KPPS 7)"
                    />

                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Anggota
