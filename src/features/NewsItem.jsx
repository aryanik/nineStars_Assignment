import PropTypes from "prop-types";

const NewsItem = ({ title, image, isMain = false, detailUrl }) => {
  return (
    <div className={` ${isMain ? "main-news" : "news-item"}`}>
      {isMain && (
        <a href={detailUrl} target="_blank">
          <p className="news-title">{title}</p>
        </a>
      )}
      {image ? (
        <img src={image} alt={title} className="news-image" />
      ) : (
        <img
          src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
          alt={title}
          className="news-image"
        />
      )}
      
      {!isMain && (
        <a href={detailUrl} target="_blank">
          {" "}
          <p className="news-title">{title}</p>{" "}
        </a>
      )}
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  isMain: PropTypes.bool,
  detailUrl: PropTypes.string.isRequired,
};

export default NewsItem;
