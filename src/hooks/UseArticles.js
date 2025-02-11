import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/apiConfig";

const useArticles = (category) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let URL = BASE_URL;
    if (category) {
      URL = URL + `&category=${category}`;
    }
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        if (response.data.articles) {
          setArticles(response.data.articles);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
        setLoading(false);
      });
  }, [category]);

  return { articles, error, loading };
};

export default useArticles;
