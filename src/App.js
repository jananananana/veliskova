import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';

// import logo from './logo.svg';
//  npm run deploy  in gh-pages
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


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Montserrat', 'Roboto Slab', 'Roboto', 'Source Sans Pro', 'Material Icons'],
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
      <Footer/>
    </div>
  );
}

export default App;
