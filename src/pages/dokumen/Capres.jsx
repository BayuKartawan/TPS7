import { Link } from "react-router-dom"

const Capres = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column", // Mengatur elemen secara vertikal
                alignItems: "center", // Mengatur agar elemen berada di tengah secara horizontal
                maxWidth: "400px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingRight: "5px",
                paddingLeft: "5px"
            }}>
            <h1
                className="capres"
                style={{
                    fontFamily: "Montserrat, sans-serif"
                }}>Calon Presiden RI 2029 ⚡</h1>
            <img
                loading="lazy"
                src="/pBay.jpg"
                alt="calon presiden 2024"
                style={{
                    aspectRatio: "1/1",
                    objectFit: "cover"
                }} />
            <br /><br />

            <Link to="/dokumen/kumpulan-app"
                style={{
                    fontFamily: "Montserrat, sans-serif",
                    textDecoration: "none",
                    padding: "10px",
                    border: "1px solid #758696",
                    borderRadius: "10px"
                }}
            >Kembali</Link>
        </div>

    )
}

export default Capres
