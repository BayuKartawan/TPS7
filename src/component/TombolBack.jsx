import { Link } from "react-router-dom"

const TombolBack = (pergi) => {
    return (
        <Link to={pergi.menuju} className="w-layout-blockcontainer tombol-bk w-container">
            <button className='tombol-musik'>
                <img
                    src="/nav/back.svg"
                    alt="tombol kembali"
                    width="30"
                    height="25"
                    style={{
                        margin: "3px"
                    }}
                />
            </button>
        </Link >

    )
}

export default TombolBack
