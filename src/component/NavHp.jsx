import { NavLink } from "react-router-dom"

const NavHp = () => {
    return (
        <section className="nav-mobile">
            <NavLink
                to="/"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/home.svg"
                    loading="lazy"
                    width="50"
                    height="72"
                    alt=""
                    className="icon-nav"
                />
            </NavLink>
            <NavLink
                to="/galeri"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/galeri.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
            </NavLink>
            <NavLink
                to="/anggota"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/anggota.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
            </NavLink>
            <NavLink
                to="/dokumen"
                href="#"
                activeClassName="active"
                className="link-block-3 w-inline-block">
                <img
                    src="/nav/file.svg"
                    loading="lazy"
                    width="72"
                    height="72"
                    alt=""
                    className="icon-nav" />
            </NavLink>

        </section>
    )
}

export default NavHp
