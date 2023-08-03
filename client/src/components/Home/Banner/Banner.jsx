import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p></p>
                </div>
                <img src={BannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;
