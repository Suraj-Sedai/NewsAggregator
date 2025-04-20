import { useEffect, useState } from "react";
import { fetchArticles } from "../services/newsService"; // adjust path if needed
import "./NewsList.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div>
      <h1>News Articles</h1>
      <div className="news-container">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.urlToImage} alt="news" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{new Date(article.publishedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
