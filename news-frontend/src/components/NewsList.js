import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/newsService'; // adjust path if needed

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div>
      <h1>News Articles</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
