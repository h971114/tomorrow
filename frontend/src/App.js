import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrolltoTop from "./components/common/ScrollToTop";

import Header from "./components/FH/Header";
import Footer from "./components/FH/Footer";

import Home from "./routes/Home";

import TodaySale from "./routes/Product/TodaySale";
import BestProduct from "./routes/Product/BestProduct";
import NewProduct from "./routes/Product/NewProduct";
import SaleProduct from "./routes/Product/SaleProduct";

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
          <Route path="/New" exact={true} component={NewProduct} />
          <Route path="/Sale" exact={true} component={SaleProduct} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
