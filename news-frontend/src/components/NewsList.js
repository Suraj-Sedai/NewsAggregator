import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/newsService';
import './NewsList.css';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div>
      <h1 className="page-header">Top Headlines</h1>
      <div className="news-container">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img   src={article.urlToImage || 'https://st3.depositphotos.com/11245678/36021/i/450/depositphotos_360215620-stock-photo-breaking-news-rendering-virtual-set.jpg'}alt="news" />

            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p className="published-date">{new Date(article.publishedAt).toLocaleString()}</p>
            <a className="read-more-btn" href={article.url} target="_blank" rel="noopener noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
