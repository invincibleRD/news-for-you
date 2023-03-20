import React from 'react';

function NewsList({ articles }) {
  return (
    <ul>
      {articles.map(article => (
        <li key={article.url}>
          <a href={article.url}>
            <img src={article.urlToImage} alt={article.title} />
            <h2>{article.title}</h2>
          </a>
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
