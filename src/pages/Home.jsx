import HeaderGbr from "../component/HeaderGbr"
import CountDown from "../component/Countdown"
import "./footer.css"

const Home = () => {

    const targetDate = '2024-02-14T00:00:00';

    return (
        <div>
            <HeaderGbr />
            <CountDown targetDate={targetDate} />
            <div
                style={{ display: "flex", justifyContent: "center" }}>
                <h3
                    className="judul-lokasi"
                    style={{ fontFamily: "Montserrat, sans-serif", marginBottom: "30px" }}>🗺️ Lokasi TPS 07 Desa Sikur Barat</h3>
            </div>


            <div style={{ width: '100%', maxWidth: "900px", marginRight: "auto", marginLeft: "auto", display: "flex", gridColumn: "50px" }}>

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

            <hr
                style={{
                    color: "red",
                    marginTop: "120px"
                }} />

            <div className="footer">
                <div className="blok1">
                    <div className="teks-judul-f">Design with 💖 by Bayu Kartawan</div>
                    <div className="teks-judul-f-copy">© 2024 All Rights Reserved <br />TPS 7 Desa Sikur Barat</div>
                </div>
                <div className="blok1">
                    <div className="teks-judul-f">About me</div>
                    <div className="blok-sosmed">
                        <a href="https://www.facebook.com/tuanpapuk.tuanpapuk" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Facebook</a>
                        <a href="https://www.instagram.com/blim.bink/" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Instagram</a>
                        <a href="https://www.linkedin.com/in/bayu-kartawan-01bba4297/" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Inkedin</a>
                        <a href="https://www.youtube.com/@tipahgabe8878" target="_blank" rel="noopener noreferrer" className="teks-jdes-f">Youtube</a>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br />
        </div>

    )
}

export default Home
