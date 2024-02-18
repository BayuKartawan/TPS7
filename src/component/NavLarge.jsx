import { Link } from "react-router-dom";

const NavLarge = () => {
    return (
        <section className="nav-large">
            <Link to="/" className="link-block-2 w-inline-block">
                <img
                    src="/assets/kpu.png"
                    loading="lazy" width="40" alt="" />
                <div className="link">TPS 07 <br />Penyenggir</div>
            </Link>

            <div className="w-layout-blockcontainer container-2 w-container">
                <Link to="/" className="link-block w-inline-block" >
                    <span className="link">Beranda</span>
                </Link>
                <Link to="/galeri" className="link-block w-inline-block" >
                    <span className="link">Galeri</span>
                </Link>
                <Link to="/anggota" className="link-block w-inline-block">
                    <span className="link">Anggota</span>
                </Link>
                <Link to="/dokumen" className="link-block w-inline-block">
                    <span className="link">Dokumen</span>
                </Link>
            </div>
        </section>
    )
}

export default NavLarge
