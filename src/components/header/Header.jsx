import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import headerLogo from "../../assets/images/header.svg";
import { IoSearch } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuHeadphones } from "react-icons/lu";
import midCategoryImg from "../../assets/images/header/cube.svg";

const Header = () => {
    return (
        <header className="header container">
            <div className="header__top">
                <div className="header__top-left">
                    <ul className="header__top-list">
                        <li className="header__top-items">
                            <Link>About Us</Link>
                        </li>
                        <li className="header__top-items">
                            <Link>My Account</Link>
                        </li>
                        <li className="header__top-items">
                            <Link>Wishlist</Link>
                        </li>
                        <li className="header__top-items">
                            <Link>Order Tracking</Link>
                        </li>
                    </ul>
                </div>
                <div className="header__top-right">
                    <ul className="header__top-list">
                        <li className="header__top-items">
                            <Link>
                                Need help? Call Us:<span>+ 1800 900</span>
                            </Link>
                        </li>
                        <li className="header__top-items">
                            <select name="" id="">
                                <option value="english">English</option>
                                <option value="russian">Russian</option>
                                <option value="uzbek">Uzbek</option>
                            </select>
                        </li>
                        <li className="header__top-items">
                            <select name="" id="">
                                <option value="usd">USD</option>
                                <option value="rubel">RUBEL</option>
                                <option value="sum">SUM</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header__mid">
                <div className="header__mid-logo">
                    <Link to={"/"}>
                        <img src={headerLogo} alt="Logo" />
                    </Link>
                </div>
                <form className="header__mid-search">
                    <select name="" id="">
                        <option value="category">All Category</option>
                    </select>
                    <div className="header__mid-input">
                        <input type="text" placeholder="Search for items..." />
                        <IoSearch />
                    </div>
                </form>
                <select
                    name="location"
                    id="header__mid-location"
                    className="header__mid-location"
                >
                    <option value="location">Location</option>
                </select>
                <div className="header__mid-pages">
                    <Link className="header__mid-page">
                        <div className="header__mid-icon">
                            <BsArrowRepeat />
                            <sup>2</sup>
                        </div>
                        <p>Compare</p>
                    </Link>
                    <Link className="header__mid-page">
                        <div className="header__mid-icon">
                            <FaRegHeart />
                            <sup>2</sup>
                        </div>
                        <p>Wishlist</p>
                    </Link>
                    <Link className="header__mid-page">
                        <div className="header__mid-icon">
                            <FiShoppingCart />
                            <sup>2</sup>
                        </div>
                        <p>Cart</p>
                    </Link>
                    <Link className="header__mid-page">
                        <div className="header__mid-icon">
                            <RxPerson />
                        </div>
                        <p>Account</p>
                    </Link>
                </div>
            </div>
            <div className="header__bot">
                <div className="header__bot-left">
                    <div className="header__bot-category">
                        <img src={midCategoryImg} alt="" />
                        <select name="" id="">
                            <option value="category">
                                Browse All Categories
                            </option>
                        </select>
                    </div>
                    <ul className="header__bot-list">
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/home">
                                Home
                            </NavLink>
                        </ul>
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/about">
                                About
                            </NavLink>
                        </ul>
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/shop">
                                Shop
                            </NavLink>
                        </ul>
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/vendors">
                                Vendors
                            </NavLink>
                        </ul>
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/menu">
                                Mega menu
                            </NavLink>
                        </ul>
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/blog">
                                Blog
                            </NavLink>
                        </ul>
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/pages">
                                Pages
                            </NavLink>
                        </ul>
                        <ul className="header__bot-item">
                            <NavLink className="header__bot-link" to="/contact">
                                Contact
                            </NavLink>
                        </ul>
                    </ul>
                </div>
                <div className="header__bot-right">
                    <LuHeadphones />
                    <div>
                        <p>1900 - 888</p>
                        <p>24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
