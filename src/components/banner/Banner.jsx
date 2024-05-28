import bannerImg from "../../assets/images/banner/banner.jpg";
import "./Banner.scss";

const Banner = () => {
    return (
        <section id="banner">
            <div className="container banner">
                <div className="banner__item">
                    <img className="banner__img" src={bannerImg} alt="" />
                    <div className="banner__content">
                        <h1 className="banner__title">
                            Fresh Vegetables Big discount
                        </h1>
                        <p className="banner__desc">
                            Save up to 50% off on your first order
                        </p>
                        <div className="banner__search">
                            <input
                                className="banner__input"
                                type="text"
                                placeholder="Your email address"
                            />
                            <button className="banner__btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
