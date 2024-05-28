import { SERVICE } from "../../static";
import "./Service.scss";

const Service = () => {
    let service = SERVICE?.map((el) => (
        <div key={el.id} className="service__card">
            <img src={el.img} alt="" />
            <div className="service__card-info">
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
            </div>
        </div>
    ));
    return (
        <div className="container service">
            <div className="service__cards">{service}</div>
        </div>
    );
};

export default Service;
