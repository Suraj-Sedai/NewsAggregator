// src/services/newsService.js
const API_URL = 'http://localhost:8000/api/articles/';

export const fetchArticles = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
