import NavLarge from "../component/NavLarge"
import NavHp from "../component/NavHp"
import JudulHp from "../component/JudulHp"
import HeaderGbr from "../component/HeaderGbr"
import CountDown from "../component/Countdown"
import MusicPlayer from "../component/MusicPlayer"

const Home = () => {

    const targetDate = '2024-02-14T07:00:00';

    return (
        <div>
            <NavLarge />
            <NavHp />
            <JudulHp />
            <HeaderGbr />
            <CountDown />
            <CountDown targetDate={targetDate} />
            <MusicPlayer source="/assets/kpu.mp3" />

        </div>

    )
}

export default Home
