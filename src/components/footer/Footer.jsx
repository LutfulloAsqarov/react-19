import logo from "../../assets/images/header.svg";
import "./Footer.scss";
import fooIcon1 from "../../assets/images/footer/footer-icon-1.svg";
import fooIcon2 from "../../assets/images/footer/footer-icon-2.svg";
import fooIcon3 from "../../assets/images/footer/footer-icon-3.svg";
import fooIcon4 from "../../assets/images/footer/footer-icon-4.svg";
import { Link } from "react-router-dom";
import appStore from "../../assets/images/footer/app-store.svg";
import gooPlay from "../../assets/images/footer/google-play.svg";
import payment from "../../assets/images/footer/payment.svg";
import phone from "../../assets/images/footer/phone-call.svg";
import link1 from "../../assets/images/footer/link1.svg";
import link2 from "../../assets/images/footer/link2.svg";
import link3 from "../../assets/images/footer/link3.svg";
import link4 from "../../assets/images/footer/link4.svg";
import link5 from "../../assets/images/footer/link5.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer container">
                <div className="footer__top">
                    <div className="footer__left">
                        <img src={logo} alt="logo" />
                        <p>Awesome grocery store website template</p>
                        <ul>
                            <li>
                                <img src={fooIcon1} alt="" />
                                Address: 5171 W Campbell Ave
                            </li>
                            <li>
                                <img src={fooIcon2} alt="" />
                                Call Us:(+91) - 540-025-124553
                            </li>
                            <li>
                                <img src={fooIcon3} alt="" />
                                Email:sale@Nest.com
                            </li>
                            <li>
                                <img src={fooIcon4} alt="" />
                                Hours:10:00 - 18:00, Mon - Sat
                            </li>
                        </ul>
                    </div>
                    <ul className="footer__list">
                        <h3>Company</h3>
                        <li>
                            <Link>About Us</Link>
                        </li>
                        <li>
                            <Link>Delivery Information</Link>
                        </li>
                        <li>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                        <li>
                            <Link>Support Center</Link>
                        </li>
                        <li>
                            <Link>Careers</Link>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <h3>Account</h3>
                        <li>
                            <Link>Sign In</Link>
                        </li>
                        <li>
                            <Link>View Cart</Link>
                        </li>
                        <li>
                            <Link>My Wishlist</Link>
                        </li>
                        <li>
                            <Link>Track My Order</Link>
                        </li>
                        <li>
                            <Link>Help Ticket</Link>
                        </li>
                        <li>
                            <Link>Shipping Details</Link>
                        </li>
                        <li>
                            <Link>Compare products</Link>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <h3>Corporate</h3>
                        <li>
                            <Link>Become a Vendor</Link>
                        </li>
                        <li>
                            <Link>Affiliate Program</Link>
                        </li>
                        <li>
                            <Link>Farm Business</Link>
                        </li>
                        <li>
                            <Link>Farm Careers</Link>
                        </li>
                        <li>
                            <Link>Our Suppliers</Link>
                        </li>
                        <li>
                            <Link>Accessibility</Link>
                        </li>
                        <li>
                            <Link>Promotions</Link>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <h3>Popular</h3>
                        <li>
                            <Link>Milk & Flavoured Milk</Link>
                        </li>
                        <li>
                            <Link>Butter and Margarine</Link>
                        </li>
                        <li>
                            <Link>Eggs Substitutes</Link>
                        </li>
                        <li>
                            <Link>Marmalades</Link>
                        </li>
                        <li>
                            <Link>Sour Cream and Dips</Link>
                        </li>
                        <li>
                            <Link>Tea & Kombucha</Link>
                        </li>
                        <li>
                            <Link>Cheese</Link>
                        </li>
                    </ul>
                    <div className="footer__right">
                        <h3>Install App</h3>
                        <p>From App Store or Google Play</p>
                        <div>
                            <img src={appStore} alt="" />
                            <img src={gooPlay} alt="" />
                        </div>
                        <p>Secured Payment Gateways</p>
                        <div>
                            <img src={payment} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>
                        © 2022, Nest - HTML Ecommerce Template All rights
                        reserved
                    </p>
                    <div className="footer__bottom__call">
                        <img src={phone} alt="" />
                        <div>
                            <p>1900 - 6666</p>
                            <p>Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="footer__bottom__follow">
                        <p>Follow Us</p>
                        <img src={link1} alt="" />
                        <img src={link2} alt="" />
                        <img src={link3} alt="" />
                        <img src={link4} alt="" />
                        <img src={link5} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
