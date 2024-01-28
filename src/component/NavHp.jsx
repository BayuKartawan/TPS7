import { Link } from "react-router-dom"

const NavHp = () => {
    return (
        <section className="nav-mobile">
            <Link
                to="/"
                href="#"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/home.svg"
                    loading="lazy"
                    width="50"
                    height="72"
                    alt=""
                    className="icon-nav"
                />
            </Link>
            <Link
                to="/galeri"
                href="#"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/galeri.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
            </Link>
            <Link
                to="/anggota"
                href="#"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/anggota.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
            </Link>
            <Link
                to="/dokumen"
                href="#"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/file.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
            </Link>

        </section>
    )
}

export default NavHp
