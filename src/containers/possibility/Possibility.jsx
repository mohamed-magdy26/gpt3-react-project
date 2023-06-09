import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.avif';

const Possibility = () => {
  return (
    <div
      className="gpt3__possibility section__padding"
      id="possibility"
    >
      <div className="container">
        <div className="gpt3__possibility-image">
          <img
            src={possibilityImage}
            alt="possibility"
            loading="lazy"
          />
        </div>
        <div className=" gpt3__possibility-content">
          <p>Request Early Access to Get Started</p>
          <h3 className="gradient__text">
            The possibilities are beyond your imagination
          </h3>
          <p>
            Yet bed any for travelling assistance indulgence
            unpleasing. Not thoughts all exercise blessing. Indulgence
            way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
