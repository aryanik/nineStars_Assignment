import PropTypes from "prop-types";
import NewsItem from "../features/NewsItem";

const HeadingNews = ({ mainNews, sidebarNews }) => {
  return (
    <div id="heading-news">
      <div id="main-news">
        {mainNews ? (
          <NewsItem
            title={mainNews.title}
            image={mainNews.urlToImage}
            isMain={true}
            detailUrl={mainNews.url}
          />
        ) : (
          <p>Loading main news...</p>
        )}
      </div>

      <div id="sidebar-news">
        {sidebarNews && sidebarNews.length > 0 ? (
          sidebarNews.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              image={article.urlToImage}
              detailUrl={article.url}
            />
          ))
        ) : (
          <p>Loading sidebar news...</p>
        )}
      </div>
    </div>
  );
};

HeadingNews.propTypes = {
  mainNews: PropTypes.object,
  sidebarNews: PropTypes.array,
};

export default HeadingNews;
