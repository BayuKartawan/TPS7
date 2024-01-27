import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import playIcon from '../assets/pause.svg';
import pauseIcon from '../assets/play.svg';

const MusicPlayer = ({ source }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const isPageReloaded = useRef(true);

    useEffect(() => {
        const audio = audioRef.current;

        // Mengecek apakah halaman di-reload atau tidak
        if (isPageReloaded.current) {
            // Mulai pemutaran musik secara otomatis saat halaman dimuat atau direload
            audio.play().catch(error => {
                // Tangani kesalahan jika pemutaran musik tidak dapat dimulai secara otomatis
                console.error('Autoplay error:', error);
            });
            isPageReloaded.current = false;
        }

        return () => {
            // Hentikan pemutaran musik saat komponen dibongkar
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;

        // Mengatur pemutaran/pause musik saat state isPlaying berubah
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-layout-blockcontainer musik w-container"><button onClick={togglePlayPause}>
            {isPlaying ? (
                <img src={pauseIcon} alt="Pause" style={{ width: '40px', height: '40px' }} />
            ) : (
                <img src={playIcon} alt="Play" style={{ width: '40px', height: '40px' }} />
            )}
        </button>
            <audio ref={audioRef} src={source} /></div>

    );
};

MusicPlayer.propTypes = {
    source: PropTypes.string.isRequired,
};

export default MusicPlayer;
