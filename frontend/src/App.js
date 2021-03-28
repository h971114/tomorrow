import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrolltoTop from "./components/common/ScrollToTop";

import Header from "./components/FH/Header";
import Footer from "./components/FH/Footer";

import Home from "./routes/Home";

import SellRegist from "./routes/Seller/Regist";

import AllProductList from "./routes/Product/ProductList/AllProductList";
import KorProductList from "./routes/Product/ProductList/KorProductList";
import YangProductList from "./routes/Product/ProductList/YangProductList";
import ChiProductList from "./routes/Product/ProductList/ChiProductList";
import AsiaProductList from "./routes/Product/ProductList/AsiaProductList";
import SalProductList from "./routes/Product/ProductList/SalProductList";

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
          
          <Route path="/goods" exact={true} component={AllProductList} />
          <Route path="/goods/1" exact={true} component={KorProductList} />
          <Route path="/goods/2" exact={true} component={YangProductList} />
          <Route path="/goods/3" exact={true} component={ChiProductList} />
          <Route path="/goods/4" exact={true} component={AsiaProductList} />
          <Route path="/goods/5" exact={true} component={SalProductList} />

          <Route path="/TodaySale" exact={true} component={TodaySale} />
          <Route path="/Best" exact={true} component={BestProduct} />
          <Route path="/New" exact={true} component={NewProduct} />
          <Route path="/Sale" exact={true} component={SaleProduct} />

          <Route path="/SellRegist" exact={true} component={SellRegist} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
