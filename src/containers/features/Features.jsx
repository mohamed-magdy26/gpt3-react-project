import React from 'react';
import './features.css';
import { featuresData } from './constansts';
import { Feature } from '../../components';

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="container">
        <div className="gpt3__features-heading">
          <h3 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h3>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
          {featuresData.map((feature, index) => (
            <Feature key={index} title={feature.title} text={feature.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
