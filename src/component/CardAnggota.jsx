import PropTypes from 'prop-types';

const CardAnggota = (props) => {
    return (
        <div id="w-node-e20d8371-3017-f059-0577-5fedb2b2dcd9-c4b99cfa" className="div-block-6">
            <img
                src={props.gambar}
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 400px"
                srcSet={`${props.gambar} 500w, ${props.gambar} 800w, ${props.gambar} 1080w, ${props.gambar} 1600w`}
                className="image-2" />

            <div className="div-block-8">
                <div className="text-block-6">{props.nama}</div>
                <div className="div-block-7">

                    <a href={props.fb} target="_blank" rel="noopener noreferrer">
                        <img
                            src="/fb.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="image-3" />
                    </a>
                    <a href={props.ig} target="_blank" rel="noopener noreferrer">
                        <img
                            src="ig.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt="" className="image-3" />
                    </a>
                    <a href={props.yt} target="_blank" rel="noopener noreferrer">
                        <img
                            src="yt.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="image-3" />
                    </a>

                </div>
            </div>
        </div>
    )
}

CardAnggota.propTypes = {
    gambar: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    ig: PropTypes.string.isRequired,
    yt: PropTypes.string.isRequired,
    fb: PropTypes.string.isRequired,
};


export default CardAnggota
