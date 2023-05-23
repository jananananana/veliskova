// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// Pages
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Work';


function App() {
  return (
    <div className="App">
      <img src="../content/images/portraits/photo1.jpg" alt="Jana standing in a red dress with city in the background" />
      <Router>
        <Header/>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
