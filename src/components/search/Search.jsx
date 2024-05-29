import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import dataPropType from "./path/to/dataPropType";

const Search = ({ data }) => {
    let searchItems = data?.map((el) => (
        <Link key={el.id} to={`/single/${el.id}`}>
            <div>
                <img src={el.images[0]} alt="" width={50} />
                <p>{el.title}</p>
            </div>
        </Link>
    ));
    return (
        <div className="header__mid-input-result">
            {data && data.length === 0 ? (
                <h3>Malumot topilmadi</h3>
            ) : (
                <>{searchItems}</>
            )}
        </div>
    );
};

Search.propTypes = {
    data: PropTypes,
};

export default Search;
