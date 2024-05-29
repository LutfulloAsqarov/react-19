import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import category1 from "../../assets/images/single-product/category-1.svg";
import category2 from "../../assets/images/single-product/category-2.svg";
import category3 from "../../assets/images/single-product/category-3.svg";
import category4 from "../../assets/images/single-product/category-.svg";
import category5 from "../../assets/images/single-product/category-5.svg";
import fillPriceImg from "../../assets/images/single-product/fill-price.svg";

import "./SingleProduct.scss";
import Banner from "../../components/banner/Banner";

const SingleProduct = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        axios
            .get(`/products/${params.id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <section id="single-product">
                <div className="single-product container">
                    <div className="single-product__left">
                        <div className="single-product__top">
                            <div className="single-product__img">
                                <img
                                    className="single-product__img-main"
                                    src={data?.images[index]}
                                    alt=""
                                />
                                <div className="single-product__img-items">
                                    {data?.images?.map((url, i) => (
                                        <img
                                            className={`${
                                                index === i ? "active" : ""
                                            }`}
                                            onClick={() => setIndex(i)}
                                            src={url}
                                            key={i}
                                            alt="img"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="single-product__info">
                                <h1>{data?.title}</h1>
                                <div className="products__card-rating">
                                    <div className="products__card-stars">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>({data?.rating})</p>
                                </div>
                                <p className="single-product__price">
                                    ${data?.price}
                                </p>
                                <p className="single-product__desc">
                                    {data?.description}
                                </p>
                                <div className="single-product__size">
                                    <p>Size / Weight:</p>
                                    <button>50g</button>
                                    <button>60g</button>
                                    <button>80g</button>
                                    <button>100g</button>
                                    <button>150g</button>
                                </div>
                                <div className="single-product__add-cart">
                                    <span>1</span>
                                    <button>Add to cart</button>
                                    <button>
                                        <FaRegHeart />
                                    </button>
                                </div>
                                <div className="single-product__list">
                                    <ul>
                                        <li>
                                            Type: <span>Organic</span>
                                        </li>
                                        <li>
                                            MFG: <span>Jun 4.2022</span>
                                        </li>
                                        <li>
                                            LIFE: <span>70 days</span>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            SKU: <span>FWM15VKT</span>
                                        </li>
                                        <li>
                                            Tags:
                                            <span>Snack, Organic, Brown</span>
                                        </li>
                                        <li>
                                            Stock: <span>8 Items In Stock</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-product__bot">
                            <ul>
                                <li>Description</li>
                                <li>Additional info</li>
                                <li>Vendor</li>
                                <li>Reviews (3)</li>
                            </ul>
                            <p className="single-product__bot-desc">
                                Uninhibited carnally hired played in whimpered
                                dear gorilla koala depending and much yikes off
                                far quetzal goodness and from for grimaced
                                goodness unaccountably and meadowlark near
                                unblushingly crucial scallop tightly neurotic
                                hungrily some and dear furiously this apart.
                                Spluttered narrowly yikes left moth in yikes
                                bowed this that grizzly much hello on spoon-fed
                                that alas rethought much decently richly and wow
                                against the frequent fluidly at formidable
                                acceptably flapped besides and much circa far
                                over the bucolically hey precarious goldfinch
                                mastodon goodness gnashed a jellyfish and one
                                however because.
                            </p>
                            <h3>Packaging & Delivery</h3>
                            <p className=" single-product__bot-desc">
                                Laconic overheard dear woodchuck wow this
                                outrageously taut beaver hey hello far
                                meadowlark imitatively egregiously hugged that
                                yikes minimally unanimous pouted flirtatiously
                                as beaver beheld above forward energetic across
                                this jeepers beneficently cockily less a the
                                raucously that magic upheld far so the this
                                where crud then below after jeez enchanting
                                drunkenly more much wow callously irrespective
                                limpet.
                            </p>
                            <h3>Other Ingredients</h3>
                            <p className=" single-product__bot-desc">
                                Organic raw pecans, organic raw cashews.
                            </p>
                            <p className=" single-product__bot-desc">
                                Organic raw pecans, organic raw cashews.
                            </p>
                            <p className=" single-product__bot-desc">
                                Made in machinery that processes tree nuts but
                                does not process peanuts, gluten, dairy or soy
                            </p>
                            <h3>Warnings</h3>
                            <p className=" single-product__bot-desc">
                                Oil separation occurs naturally. May contain
                                pieces of shell.
                            </p>
                        </div>
                    </div>
                    <div className="single-product__right">
                        <div className="single-product__category">
                            <h3>Category</h3>
                            <div className="single-product__category__cards">
                                <div className="single-product__category__card">
                                    <div>
                                        <img src={category1} alt="img" />
                                        <p>Milks & Dairies</p>
                                    </div>
                                    <span>5</span>
                                </div>
                                <div className="single-product__category__card">
                                    <div>
                                        <img src={category2} alt="img" />
                                        <p>Clothing</p>
                                    </div>
                                    <span>6</span>
                                </div>
                                <div className="single-product__category__card">
                                    <div>
                                        <img src={category3} alt="img" />
                                        <p>Pet Foods</p>
                                    </div>
                                    <span>7</span>
                                </div>
                                <div className="single-product__category__card">
                                    <div>
                                        <img src={category4} alt="img" />
                                        <p>Baking material</p>
                                    </div>
                                    <span>12</span>
                                </div>
                                <div className="single-product__category__card">
                                    <div>
                                        <img src={category5} alt="img" />
                                        <p>Fresh Fruit</p>
                                    </div>
                                    <span>16</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-product__fillPrice">
                            <h3>Fill by Price</h3>
                            <img src={fillPriceImg} alt="" />
                            <div>
                                <p className="single-product__fillPrice__name">
                                    Color
                                </p>
                                <div className="single-product__fillPrice__input">
                                    <input type="checkbox" />
                                    <p> Red(56)</p>
                                </div>
                                <div className="single-product__fillPrice__input">
                                    <input type="checkbox" />
                                    <p> Green (78)</p>
                                </div>
                                <div className="single-product__fillPrice__input">
                                    <input type="checkbox" />
                                    <p>Blue (54)</p>
                                </div>
                            </div>
                            <div>
                                <p className="single-product__fillPrice__name">
                                    Item Condition
                                </p>
                                <div className="single-product__fillPrice__input">
                                    <input type="checkbox" />
                                    <p>New (1506)</p>
                                </div>
                                <div className="single-product__fillPrice__input">
                                    <input type="checkbox" />
                                    <p>Refurbished (27)</p>
                                </div>
                                <div className="single-product__fillPrice__input">
                                    <input type="checkbox" />
                                    <p>Used (45)</p>
                                </div>
                            </div>
                            <button>Fillter</button>
                        </div>
                    </div>
                </div>
            </section>
            <Banner />
        </>
    );
};

export default SingleProduct;
