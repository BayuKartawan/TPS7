import { Link } from "react-router-dom";

const NavLarge = () => {
    return (
        <section className="nav-large">
            <Link to="/" className="link-block-2 w-inline-block"><img
                src="/assets/kpu.png"
                loading="lazy" width="40" alt="" />
                <div className="link">TPS 07 <br />Penyenggir</div>
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
