import PropTypes from "prop-types";
import TrendingItem from "../features/TrendingItem";
import AdPlugin from "../features/Adplugin";

const TrendingNews = ({ trendingNews }) => {
  // Map trending news items to elements
  const trendingNewsElements = [];
  trendingNews.forEach((article, index) => {
    trendingNewsElements.push(
      <div key={`trending-${index}`}>
        <TrendingItem
          title={article.title}
          image={article.urlToImage}
          numbers={index + 1}
          detailUrl={article.url}
        />
      </div>
    );
    // Inserting AdPlugin after every 4th trending item
    if ((index + 1) % 4 === 0) {
      trendingNewsElements.push(
        <div key={`ad-${index}`}>
          <AdPlugin />
        </div>
      );
    }
  });

  return (
    <div id="trending-news">
      <div id="trending-grid">
        {trendingNewsElements && trendingNewsElements.length > 0 ? (
          trendingNewsElements
        ) : (
          <p>Loading trending news...</p>
        )}
      </div>
    </div>
  );
};

TrendingNews.propTypes = {
  trendingNews: PropTypes.array.isRequired,
};

export default TrendingNews;
