import { useEffect } from "react";
import admin from "../../assets/images/footer/admin.png";
import "./Admin.scss";
const Admin = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div className="container">
            <div className="admin">
                <div className="admin__panel">
                    <h3>Admin panel</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </p>
                </div>
                <div className="admin__info">
                    <div className="admin__info__top">
                        <div className="admin__info__frame">
                            <h4>01. Visit Feedback</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        <div className="admin__info__frame">
                            <h4>02. Employer Services</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>
                    <div className="admin__info__bottom">
                        <div className="admin__info__frame">
                            <h4>03. Billing Inquiries</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        <div className="admin__info__frame">
                            <h4>04.General Inquiries</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043794!2d69.20123767552849!3d41.28551820230849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1716987314561!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: "none" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="admin__cards">
                <div className="admin__card">
                    <h3>Office</h3>
                    <div>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                    </div>
                    <button>View map</button>
                </div>
                <div className="admin__card">
                    <h3>Office</h3>
                    <div>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                    </div>
                    <button>View map</button>
                </div>
                <div className="admin__card">
                    <h3>Office</h3>
                    <div>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                    </div>
                    <button>View map</button>
                </div>
            </div>
            <div className="admin__bottom">
                <div className="admin__bottom__left">
                    <span>Contact form</span>
                    <h2 className="admin__bottom__title">Drop Us a Line</h2>
                    <p>
                        Your email address will not be published. Required
                        fields are marked *
                    </p>
                    <form className="admin__bottom__form" action="">
                        <div className="admin__bottom__form__group">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="First Name" />
                        </div>
                        <textarea name="" id=""></textarea>
                        <div>
                            <button>Send message</button>
                        </div>
                    </form>
                </div>
                <div className="admin__bottom__right">
                    <img src={admin} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Admin;
