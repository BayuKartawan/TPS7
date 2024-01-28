import { Link } from "react-router-dom";

const NavLarge = () => {
    return (
        <section className="nav-large">
            <Link to="/" className="link-block-2 w-inline-block"><img
                src="https://assets-global.website-files.com/65b3ea448c2bd342c4b99cf7/65b4e8e5fe1ff665b8d62e6f_1627539868logo-kpu%20(1).png"
                loading="lazy" width="40" alt="" />
                <div className="link">KPPS 07 <br />Penyenggir</div>
            </Link>

            <div className="w-layout-blockcontainer container-2 w-container">
                <Link to="/galeri" className="ink-block w-inline-block"><div className="link">Galeri</div></Link>
                <Link to="/anggota" className="ink-block w-inline-block"><div className="link">Anggota</div></Link>
                <Link to="/dokumen" className="ink-block w-inline-block"><div className="link">Dokumen</div></Link>
            </div>
        </section>
    )
}

export default NavLarge
