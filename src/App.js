import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';

// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// Pages
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';


// GA
import ReactGA from 'react-ga';
const TRACKING_ID = "367154554";
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Montserrat', 'Roboto Slab', 'Roboto', 'Material Icons'],
      },
    });
  }, []);

  return (
    <div className="">
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>
      </BrowserRouter>

      <div className="j-home">
        <div className="j-home__pic-container">
          <img className="j-home__pic" src={process.env.PUBLIC_URL + '/images/portraits/photo-2.jpg'}  alt="Jana standing in a red dress with city in the background" />
        </div>

      </div>

      <Footer/>
    </div>
  );
}

export default App;
