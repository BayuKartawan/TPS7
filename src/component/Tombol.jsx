import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tombol = (props) => {
    return (

        <Link
            to={props.link}
            id="w-node-_810fe0a4-027b-107d-06b7-0dd7dc8b6f03-c4b99cfa"
            className="item-galeri"
            target={props.target}
            rel={props.rel}
            style={{ textDecoration: "none", color: "black" }}
        >
            <img
                src={props.gambar}
                loading="lazy"
                width="30"
                height="30"
                id="w-node-_810fe0a4-027b-107d-06b7-0dd7dc8b6f04-c4b99cfa"
                className="icon-galeri"
                style={props.tStyle} />

            <div
                id="w-node-_810fe0a4-027b-107d-06b7-0dd7dc8b6f05-c4b99cfa"
                className="judul-item">{props.nama}</div>
        </Link>

    )
}

Tombol.propTypes = {
    gambar: PropTypes.string.isRequired,
    tStyle: PropTypes.object.isRequired,
    nama: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    rel: PropTypes.string.isRequired,
};

export default Tombol
