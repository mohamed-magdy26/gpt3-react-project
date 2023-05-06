import React from 'react';
import './app.css';
import './index.css';

import {
  Blog,
  Features,
  Header,
  Possibility,
  Footer,
  WhatGPT3,
} from './containers';

import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;