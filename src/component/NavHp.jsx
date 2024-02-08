import { NavLink } from "react-router-dom"

const NavHp = () => {
    return (
        <section
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="nav-mobile">
            <NavLink
                to="/"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block"
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                <img
                    src="/nav/home.svg"
                    loading="lazy"
                    width="50"
                    height="72"
                    alt=""
                    className="icon-nav"
                />
                <span
                    className="bawah-icon-nav">
                    Beranda
                </span>
            </NavLink>
            <NavLink
                to="/galeri"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block"
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                <img
                    src="/nav/galeri.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
                <span
                    className="bawah-icon-nav">
                    Galeri
                </span>
            </NavLink>
            <NavLink
                to="/anggota"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block"
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                <img
                    src="/nav/anggota.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
                <span
                    className="bawah-icon-nav">
                    Anggota
                </span>
            </NavLink>
            <NavLink
                to="/dokumen"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block"
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                <img
                    src="/nav/file.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
                <span
                    className="bawah-icon-nav">
                    Dokumen
                </span>
            </NavLink>
        </section >
    )
}

export default NavHp
