import PropTypes from 'prop-types';
import { useState } from 'react';

const CardGaleri = (props) => {

    const handleUnduh = async () => {
        try {
            const response = await fetch(props.gambar);
            const blob = await response.blob();

            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'dokumen-kpps7-penyenggir.jpg'; // Ganti 'nama_file_gambar.jpg' sesuai dengan nama file yang diinginkan
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Gagal mengunduh gambar:', error);
        }
    }

    // logika zoom
    
    const [fullscreen, setFullscreen] = useState(false);

  const handleZoom = () => {
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
  }

    return (
        <div
            id="w-node-_77b48ea0-353a-601b-d9d5-28440378953c-c4b99cfa"
            className="div-block-9">
            <img
                src={props.gambar}
                loading="lazy"
                id="w-node-_6fdcc847-3394-b0e0-f1a3-f44f6aaf49db-c4b99cfa"
                sizes="(max-width: 479px) 63vw, (max-width: 991px) 100vw, 900px"
                srcSet={`${props.gambar} 500w, ${props.gambar} 800w, ${props.gambar} 1080w, ${props.gambar} 1600w`}
                className="image-4" />

            <div className="div-block-10">
                <img
                    src="/zoom.svg"
                    loading="lazy"
                    width="30"
                    height="30"
                    className="icon-perbesar"
                    onClick={handleZoom}
                />

                // tampilan full screen 
                   {fullscreen && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img src={props.gambar} alt="Gambar" />
        </div>
      )}
                
                <img
                    src="/unduh.svg"
                    loading="lazy"
                    width="30"
                    height="30"
                    className="icon-perbesar"
                    onClick={handleUnduh}
                />
            </div>
        </div>
    )
}

CardGaleri.propTypes = {
    gambar: PropTypes.string.isRequired,
};

export default CardGaleri;
