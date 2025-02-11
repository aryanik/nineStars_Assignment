import PropTypes from "prop-types";

const TrendingItem = ({ title, image, numbers, detailUrl }) => {
  return (
    <div className="trending-item">
      <div className="trending-header">
        {numbers === 1 ? (
          <span className="trending-title">TRENDING</span>
        ) : (
          <span></span>
        )}
        <span className="trending-number">
          {numbers < 10 ? `0${numbers}` : numbers}
        </span>
      </div>
      <a href={detailUrl} target="_blank">
        {image ? (
          <img src={image} alt={title} className="news-image" />
        ) : (
          <img
            src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
            alt={title}
            className="news-image"
          />
        )}
      </a>
      <p className="trending-description">{title}</p>
    </div>
  );
};

TrendingItem.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  numbers: PropTypes.number,
  detailUrl: PropTypes.string.isRequired,
};

export default TrendingItem;
