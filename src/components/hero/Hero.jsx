import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import heroImg1 from "../../assets/images/hero/heroImg.svg";
import heroImg2 from "../../assets/images/hero/heroImg2.jpg";
import "./Hero.scss";

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero container">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="hero__swiper"
                >
                    <SwiperSlide>
                        <div className="hero__item">
                            <img className="hero__img" src={heroImg1} alt="" />
                            <div className="hero__content">
                                <h1 className="hero__title">
                                    Fresh Vegetables Big discount
                                </h1>
                                <p className="hero__desc">
                                    Save up to 50% off on your first order
                                </p>
                                <div className="hero__search">
                                    <input
                                        className="hero__input"
                                        type="text"
                                        placeholder="Your email address"
                                    />
                                    <button className="hero__btn">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__item">
                            <img className="hero__img" src={heroImg2} alt="" />
                            <div className="hero__content">
                                <h1 className="hero__title">
                                    Fresh Vegetables Big discount
                                </h1>
                                <p className="hero__desc">
                                    Save up to 50% off on your first order
                                </p>
                                <div className="hero__search">
                                    <input
                                        className="hero__input"
                                        type="text"
                                        placeholder="Your email address"
                                    />
                                    <button className="hero__btn">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;
