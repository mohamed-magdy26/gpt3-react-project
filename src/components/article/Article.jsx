import React from 'react';
import './article.css';

const Article = ({ title, date, image }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} alt="" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h5>{title}</h5>
        </div>
        <a>Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
