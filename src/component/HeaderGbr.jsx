const HeaderGbr = () => {
    return (
        <section className="h-gbr">
            <div className="w-layout-blockcontainer container-3 w-container">
                <img
                    src="/pelantikan/pelantikan9.jpg"
                    loading="lazy" sizes="(max-width: 1600px) 100vw, 1600px"
                    srcSet="/pelantikan/pelantikan9.jpg 500w, 
                    /pelantikan/pelantikan9.jpg 800w, 
                    /pelantikan/pelantikan9.jpg 1080w, 
                    /pelantikan/pelantikan9.jpg 1600w"
                    alt=""
                    className="image"
                />
            </div>
        </section>
    )
}

export default HeaderGbr
