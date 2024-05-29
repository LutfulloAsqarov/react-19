import Header from "../../components/header/Header";
import notFoundImg from "../../assets/images/notFound.webp";

const NotFound = () => {
    return (
        <div>
            <Header />
            <img
                src={notFoundImg}
                alt=""
                style={{ margin: "30px auto", width: "50%", display: "block" }}
            />
        </div>
    );
};

export default NotFound;
