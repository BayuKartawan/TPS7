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
        audio.play().catch(error => {
            console.error('Autoplay error:', error);
        });


        // Menambahkan event listener untuk event 'ended'
        audio.addEventListener('ended', handleMusicEnd);

        return () => {
            // Hentikan pemutaran musik saat komponen dibongkar
            audio.removeEventListener('ended', handleMusicEnd);
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

    const handleMusicEnd = () => {
        // Memulai ulang pemutaran musik dari awal ketika musik selesai diputar
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    return (
        <div className="w-layout-blockcontainer musik w-container">
            <button
                className='tombol-musik'
                onClick={togglePlayPause}>
                {isPlaying ? (
                    <img src={pauseIcon} alt="Pause" style={{ width: '35x', height: '35px' }} />
                ) : (
                    <img src={playIcon} alt="Play" style={{ width: '35px', height: '35px' }} />
                )}
            </button>
            <audio ref={audioRef} src={source} />
        </div>

    );
};

MusicPlayer.propTypes = {
    source: PropTypes.string.isRequired,
};

export default MusicPlayer;
