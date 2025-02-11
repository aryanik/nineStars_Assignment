import PropTypes from "prop-types";
import useArticles from "../hooks/useArticles";
import HeadingNews from "../components/HeadingNews";
import TrendingNews from "../components/TrendingNews";
import "../styles/home.css";
import Spinner from "../components/Spinner";

const Home = ({ category }) => {
  // Custom hook to fetch the news data.
  const { articles, error, loading } = useArticles(category);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  // divided the fetched data into different section
  const mainNews = articles[0];
  const sidebarNews = articles.slice(1, 4);
  const trendingNews = articles.slice(4, 18);

  return (
    <div id="home">
      <HeadingNews mainNews={mainNews} sidebarNews={sidebarNews} />
      <TrendingNews trendingNews={trendingNews} />
    </div>
  );
};

Home.propTypes = {
  category: PropTypes.any.isRequired,
};

export default Home;
