import HeaderGbr from "../component/HeaderGbr"
import CountDown from "../component/Countdown"
import MusicPlayer from "../component/MusicPlayer"

const Home = () => {

    const targetDate = '2024-02-14T00:00:00';

    return (
        <div>
            <HeaderGbr />
            <CountDown targetDate={targetDate} />
            <MusicPlayer source="/assets/kpu.mp3" />

        </div>

    )
}

export default Home
