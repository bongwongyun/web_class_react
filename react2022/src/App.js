import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Script from "./components/pages/Script";
import Youtube from "./components/pages/Youtube";
import TMDB from "./components/pages/TMDB";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Referencedetail from './components/pages/Referencedetail';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main}/>
      <Route path="/about" exact component={About}/>
      <Route path="/reference" exact component={Reference}/>
      <Route path="/reference-detail" exact component={Referencedetail}/>
      <Route path="/script" exact component={Script}/>
      <Route path="/youtube" exact component={Youtube}/>
      <Route path="/TMDB" exact component={TMDB}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/portfolio" exact component={Portfolio}/>
    </Router>
  );
}

export default App; 