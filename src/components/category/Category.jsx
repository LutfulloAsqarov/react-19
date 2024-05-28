import { CATEGORY, CATEGORYCARDS } from "../../static";
import "./Category.scss";

const Category = () => {
    let categoryItems = CATEGORY?.map((el) => (
        <div
            data-aos="fade-right"
            key={el.id}
            className="category__card"
            style={{ background: el.bgColor }}
        >
            <img src={el.img} alt="img" />
            <h3>{el.title}</h3>
            <p>{el.desc}</p>
        </div>
    ));

    let categoryCards = CATEGORYCARDS?.map((el) => (
        <div
            data-aos="fade-left"
            key={el.id}
            className="category__bot-card"
            style={{
                background: `url(${el.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h3>{el.title}</h3>
            <button>Shop now</button>
        </div>
    ));

    return (
        <section id="category">
            <div className="category container">
                <h2>Featured Categories</h2>
                <div className="category__cards">{categoryItems}</div>
                <div className="category__bot__cards">{categoryCards}</div>
            </div>
        </section>
    );
};

export default Category;
