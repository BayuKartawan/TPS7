import HeaderGbr from "../component/HeaderGbr"
import CountDown from "../component/Countdown"

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

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>

    )
}

export default Home
