
import HeaderGbr from "../component/HeaderGbr"
import CountDown from "../component/Countdown"
// component pertanyaan
import Bertanya from "../component/pertanyaan/Bertanya"
import Larangan from "../component/pertanyaan/Larangan"
// css style
import "./footer.css"

const Home = () => {

    const targetDate = '2024-02-14T00:00:00';

    // Fungsi untuk membagikan link ke WhatsApp
    const shareToWhatsApp = () => {

        // Ganti 'TEXT_TO_SHARE' dengan teks yang ingin Anda tambahkan
        const textToShare = '🗳️ Pakettt                           \n' + '.                        \n' +
            'Kami dengan gembira mengundang Anda untuk hadir dan berpartisipasi dalam proses demokrasi! Datanglah ke Tempat Pemungutan Suara (TPS) pada:\n' +
            '📅 Tanggal: 14 Februari 2024\n' +
            '📍 Lokasi TPS 07: \n[Halaman Rumah H. Mawardi]\natau bisa lihat di google map🗺️\nhttps://maps.app.goo.gl/cGo6jbmkoH3sj1Yx8\n' + '.\n' +
            'Terima kasih atas partisipasi Anda. Mari kita jadikan tanggal 14 Februari sebagai momen untuk memberikan suara dan memperkuat suara kita dalam membangun masyarakat yang lebih baik.\n' + '.\n' +
            'Kunjungi website kami:👇🏼👇🏼👇🏼\n' + 'https://tps7-penyenggir.vercel.app/\n.\n' +
            '🇮🇩 #Pemilu2024 #SuaraAndaMenentukan #TPS07DesaSikurBarat';


        // Membuat link WhatsApp dengan pesan
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${textToShare}`)}`;

        // Buka link WhatsApp di jendela baru
        window.open(whatsappLink, '_blank');
    }

    // Fungsi untuk menangani klik tombol
    const handleButtonClick = () => {
        // Panggil fungsi membagikan ke WhatsApp
        shareToWhatsApp();
    }

    return (
        <div>
            <HeaderGbr />
            <CountDown targetDate={targetDate} />

            {/* lokasi */}
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                style={{ display: "flex", justifyContent: "center" }}>
                <h3
                    className="judul-lokasi"
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        marginBottom: "10px"
                    }}>Lokasi TPS 07 Desa Sikur Barat🗺️</h3>
            </div>
            {/* map */}
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                style={{ width: '100%', maxWidth: "900px", marginRight: "auto", marginLeft: "auto", display: "flex", gridColumn: "50px" }}>
                <iframe
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=-8.642244432818648,%20116.443631275681+(TPS%207)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Google Map"
                >
                    <a href="https://www.maps.ie/population/">Population Estimator map</a>
                </iframe>
            </div>
            {/* share lokasi */}
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "30px"
                }}>

                <button
                    className="share-wa"
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        textAlign: "center",
                        marginLeft: "10px",
                        marginRight: "10px",
                        padding: "10px",
                        border: "1px solid #630b0b",
                        borderRadius: "10px",
                        boxShadow: "0px 5px 15px rgba(44, 44, 44, 0.126)"
                    }}
                    onClick={handleButtonClick} // Menambahkan event handler untuk klik tombol
                >
                    Tekan untuk membagikan lokasi dan undangan ke TPS 07 Desa Sikur Barat 📤
                </button>
            </div>

            {/* komponen pertanyaan */}

            <Larangan
                pertanyaan="Larangan Pemilih Membawa HP di Bilik Suara TPS?"
                judul="(Menurut Peraturan KPU No. 25 Tahun 2023)"
                pasal1="Pasal 25"
                despasal="Sebelum Pemilih melakukan pemberian suara,  ketua KPPS:"
                list1="Menandatangani surat suara masing-masing jenis Pemilu pada tempat yang telah ditentukan untuk diberikan kepada Pemilih;"
                list2="Memanggil Pemilih yang telah mengisi daftar hadir untuk memberikan suara berdasarkan prinsip urutan kehadiran Pemilih"
                list3="Memberikan 5 (lima) jenis surat suara yang telah ditandatangani sebagaimana dimaksud dalam huruf a, terdiri dari Surat Suara Presiden dan Wakil Presiden, Surat Suara DPR, Surat Suara DPD, Surat Suara DPRD Provinsi serta Surat Suara DPRD Kabupaten/Kota, dalam keadaan baik/tidak rusak serta dalam keadaan terlipat kepada Pemilih, kecuali untuk wilayah Provinsi Daerah Khusus Ibukota Jakarta, hanya diberikan 4 (empat) jenis surat suara, yang terdiri dari Surat Suara Presiden dan Wakil Presiden, Surat Suara DPR, Surat Suara DPD, dan Surat Suara DPRD provinsi;"
                list4="Mengingatkan Pemilih untuk memeriksa dan meneliti surat suara tersebut dalam keadaan tidak rusak; dan "
                list5="Mengingatkan dan melarang Pemilih membawa telepon genggam dan/atau alat perekam gambar lainnya ke bilik suara."
                pasal2="Pasal 28"
                despasal2="Pemilih tidak boleh membubuhkan tulisan dan/atau catatan apa pun pada surat suara."
                despasal3=" Pemilih tidak boleh mendokumentasikan hak pilihnya di bilik suara."
            />

            <Bertanya
                pertanyaan="Ape te jauk jok TPS?"
                list1="Formulir C-6 Pemberitahuan (Surat Undangan)"
                gambar1="https://rumahpemilu.org/wp-content/uploads/2017/04/C6.jpg"
                alt1="Formulir C-6 Pemberitahuan (Surat Undangan)"
                list2="KTP-elektronik asli"
                gambar2="https://jintung.kec-ayah.kebumenkab.go.id/uploads/gambar/14122020113249-Jintung-Kebumen-gutama.jpg"
                list3="Surat Keterangan (Suket) Perekaman e-KTP (misal ndekman jari KTP)"
                gambar3="https://blogpictures.99.co/cara-membuat-ktp-sementara.png"
                list4="Jauk semeton n"
                gambar4="https://media.tenor.com/IngwHN9bpEMAAAAM/tkthao219-bubududu.gif"
            />
            <Bertanya
                pertanyaan="Brembe ruen surat suara nukn?"
                gambar1="https://infopublik.id/assets/upload/headline//pp2crbmh8dstxjy.jpeg"
                list2="Kertas warna abu-abu untuk calon Presiden dan Wakil Presiden"
                list3="Kertas warna kuning untuk calon DPR RI"
                list4="Kertas warna merah untuk calon DPD RI"
                list5="Kertas warna biru untuk calon DPRD Provinsi"
                list6="Kertas warna hijau untuk calon DPRD Kota/Kabupaten"
            />
            <Bertanya
                pertanyaan="Informasi Penggunaan Hak Pilih di TPS !!!"
                gambar1="\assets\dok\1.Penggunaan Hak Pilih di TPS A3.png"
                gambar2="\assets\dok\2.Penggunaan Hak Pilih di TPS A3.png"
                list3="download gambar lebih jelas di dokumen pendukung"
            />

            <Bertanya
                pertanyaan="Berembe ruen surat suara sah dan tidak sah?"
                list1=""
                gambar1="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-1-2048.jpg?cb=1666717487"
                alt1="Panduan Tentang Suara Sah dan Tidak Sah Pada Pemilu Tahun 2019 (Pemilihan Presiden dan Wakil Presiden, DPD, DPR RI, DPRD Provinsi, DPRD Kabupaten Kota"
                list2=""
                gambar2="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-2-2048.jpg?cb=1666717487"
                list3="Surat suara sah"
                gambar3="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-3-2048.jpg?cb=1666717487"
                gambar4="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-4-2048.jpg?cb=1666717487"
                gambar5="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-5-2048.jpg?cb=1666717487"
                gambar6="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-6-2048.jpg?cb=1666717487"
                gambar7="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-7-2048.jpg?cb=1666717487"
                gambar8="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-8-2048.jpg?cb=1666717487"
                gambar9="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-9-2048.jpg?cb=1666717487"
                gambar10="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-10-2048.jpg?cb=1666717487"
                gambar11="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-11-2048.jpg?cb=1666717487"
                gambar12="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-12-2048.jpg?cb=1666717487"
                gambar13="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-13-2048.jpg?cb=1666717487"
                gambar14="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-14-2048.jpg?cb=1666717487"
                gambar15="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-15-2048.jpg?cb=1666717487"
                gambar16="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-16-2048.jpg?cb=1666717487"
                gambar17="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-17-2048.jpg?cb=1666717487"
                gambar18="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-18-2048.jpg?cb=1666717487"
                gambar19="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-19-2048.jpg?cb=1666717487"
                gambar20="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-20-2048.jpg?cb=1666717487"
                gambar21="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-21-2048.jpg?cb=1666717487"
                gambar22="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-22-2048.jpg?cb=1666717487"
                gambar23="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-23-2048.jpg?cb=1666717487"
                gambar24="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-24-2048.jpg?cb=1666717487"
                gambar25="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-25-2048.jpg?cb=1666717487"
                gambar26="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-26-2048.jpg?cb=1666717487"
                gambar27="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-27-2048.jpg?cb=1666717487"
                gambar28="https://image.slidesharecdn.com/suratsuarasahdantidaksah-190414012035/75/surat-suara-sah-dan-tidak-sah-28-2048.jpg?cb=1666717487"
                list4="Surat suara sah"
                list5="Surat suara sah"
                list6="Surat suara sah"
                list7="Surat suara sah"
                list8="Surat suara sah"
                list9="Surat suara sah"
                list10="Surat suara sah"
                list11="Surat suara sah"
                list12="Surat suara sah"
                list13="Surat suara sah"
                list14="Surat suara sah"
                list15="Surat suara sah"
                list16="Surat suara sah"
                list17="Surat suara sah"
                list18="Surat suara sah"
                list19="Surat suara sah"
                list20="Surat suara sah"
                list21="Surat suara sah"
                list22="Surat suara sah"
                list23="Surat suara sah"
                list24="Surat suara sah"
                list25="Tidak Sah"
                list26="Tidak Sah"
                list27="Tidak Sah"
                list28="Tidak Sah"
            />

            <hr
                style={{
                    color: "red",
                    marginTop: "120px"
                }} />

            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="footer">
                <div className="blok1">
                    <div className="teks-judul-f">Design with 💖 by Bayu Kartawan</div>
                    <div className="teks-judul-f-copy">© 2024 All Rights Reserved <br />TPS 7 Desa Sikur Barat</div>
                </div>
                <div className="blok1">
                    <div className="teks-judul-f">About me</div>
                    <div className="blok-sosmed">
                        <a href="https://www.facebook.com/tuanpapuk.tuanpapuk" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Facebook</a>
                        <a href="https://www.instagram.com/blim.bink/" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Instagram</a>
                        <a href="https://www.linkedin.com/in/bayu-kartawan-01bba4297/" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Linkedin</a>
                        <a href="https://www.youtube.com/@tipahgabe8878" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Youtube</a>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br />
        </div>

    )
}

export default Home
