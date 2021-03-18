import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrolltoTop from "./components/common/ScrollToTop";

import Header from "./components/FH/Header";
import Footer from "./components/FH/Footer";

import Home from "./routes/Home";

import TodaySale from "./routes/Product/TodaySale";
import BestProduct from "./routes/Product/BestProduct";

function App() {
  return (
    <Router>
      <ScrolltoTop />
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/TodaySale" exact={true} component={TodaySale} />
          <Route path="/Best" exact={true} component={BestProduct} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
