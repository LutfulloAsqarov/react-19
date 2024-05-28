import axios from "../../api";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Products.scss";
import { FiShoppingCart } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

let limit = 5;

const Products = () => {
    const [products, setProducts] = useState(null);
    const [offset, setOffset] = useState(1);
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("all");

    useEffect(() => {
        AOS.init();
    }, []);
    useEffect(() => {
        let category =
            categoryName === "all"
                ? "/products"
                : `/products/category/${categoryName}`;
        axios
            .get(`${category}?limit=${limit * offset}`)
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err));
    }, [offset, categoryName]);

    useEffect(() => {
        axios
            .get(`/products/category-list`)
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err));
    }, []);

    let productsCard = products?.map((el) => (
        <div data-aos="fade-right" key={el.id} className="products__card">
            <div className="products__card__about">New</div>
            <div className="products__card__img">
                <img src={el.images[0]} alt="logo" />
            </div>
            <div className="products__card-info">
                <h3>{el.title}</h3>
                <div className="products__card-rating">
                    <div className="products__card-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p>({el.rating})</p>
                </div>
                <div className="products__card-price">
                    <p>${el.price}</p>

                    <button>
                        <FiShoppingCart /> Add
                    </button>
                </div>
            </div>
        </div>
    ));

    let categoryItems = categories?.map((el) => (
        <li key={el}>
            <data
                onClick={(e) => setCategoryName(e.target.value)}
                value={el}
                className={categoryName === el ? "active" : ""}
            >
                {el}
            </data>
        </li>
    ));

    return (
        <section>
            <div className="products container">
                <div className="products__top">
                    <h2>Popular Products</h2>
                    <ul className="products__categories">
                        <li key={"all"}>
                            <data
                                onClick={(e) => setCategoryName(e.target.value)}
                                value={"all"}
                                className={
                                    categoryName === "all" ? "active" : ""
                                }
                            >
                                all
                            </data>
                        </li>
                        {categoryItems}
                    </ul>
                </div>
                <div className="products__cards">{productsCard}</div>
                <button
                    onClick={() => setOffset((p) => p + 1)}
                    className="see-more"
                >
                    See more
                </button>
            </div>
        </section>
    );
};

export default Products;
