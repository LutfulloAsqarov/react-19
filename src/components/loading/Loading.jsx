import "./Loading.scss";

const Loading = () => {
    const lodingCard = (
        <div className="loading">
            <div className="loading__item">
                <div className="loading__img bg__animation"></div>
                <div className="loading__title bg__animation"></div>
                <div className="loading__title bg__animation"></div>
            </div>
        </div>
    );
    return (
        <div className="loading__wrapper">
            {lodingCard}
            {lodingCard}
            {lodingCard}
            {lodingCard}
            {lodingCard}
        </div>
    );
};

export default Loading;
