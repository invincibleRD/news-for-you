
import React from 'react';
import NewsList from '../components/NewsList';

function NewsPage({ articles }) {
  return (
    <div>
      <h1>Noticias de Salud en Español</h1>
      <NewsList articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const apiKey = '3a3805f7bd9e4fa6a8a41aba22cc824d';
  const category = 'health';
  const language = 'en';
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&language=${language}&apiKey=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      articles,
    },
  };
}

export default NewsPage;
