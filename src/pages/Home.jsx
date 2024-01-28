import HeaderGbr from "../component/HeaderGbr"
import CountDown from "../component/Countdown"

const Home = () => {

    const targetDate = '2024-02-14T00:00:00';

    return (
        <div>
            <HeaderGbr />
            <CountDown targetDate={targetDate} />
        </div>

    )
}

export default Home
