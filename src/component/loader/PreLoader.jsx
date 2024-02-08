import { useEffect } from "react";
import { preLoaderAnim } from "./Animation";
import './PreLoader.css'

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Welcome</span>
                <span>to</span>
                <span>TPS 07🔥</span>
            </div>
        </div>
    );
};

export default PreLoader;