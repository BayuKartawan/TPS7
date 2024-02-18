

const CardYt = (Des) => {
    return (

        <div
            id="w-node-c9a548d2-1449-da8f-b2fd-762ada99759e-c4b99cfa"
            className="div-block-11"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom">
            <div id="w-node-_85b77a4a-a448-0399-b174-12105e6b3f54-c4b99cfa"
                style={{ paddingTop: "56.17021276595745%" }}
                className="w-embed-youtubevideo">

                <iframe
                    src={`https://www.youtube.com/embed/${Des.idVidio}?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0`}
                    frameBorder="0"
                    style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto' }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={Des.title}
                />
            </div>
            <div className="judul-yt" style={{ marginLeft: "5px", marginRight: "5px" }}>{Des.deskripsi}</div>
        </div>

    )
}

export default CardYt
