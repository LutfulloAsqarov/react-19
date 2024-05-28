import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Service from "../../components/service/Service";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Category />
            <Products />
            <Banner />
            <Service />
        </div>
    );
};

export default Home;
