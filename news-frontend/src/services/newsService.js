const API_URL = 'http://localhost:8000/api/newsapi-articles/';

export const fetchArticles = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
