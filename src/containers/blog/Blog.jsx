import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { data } from './import.js';
const Blog = () => {
  console.log(data);

  // const showArticles = () => {
  //   return data.map((item) => <Article {...item} key={item.id} />);
  // };

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="container">
        <div className="gpt3__blog-header">
          <h4 className="gradient__text">
            A lot is happening,
            <br />
            We are blogging about it.
          </h4>
        </div>
        <div className="gpt3__blog-article__container">
          <div className="gpt3__blog-article-groupA">
            <Article {...data[0]} />
          </div>
          <div className="gpt3__blog-article-groupB">
            {data.slice(1).map((item) => (
              <Article {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
