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

import MyPage from "./routes/User/MyPage";
import MyOrder from "./routes/User/MyOrder";
import MyOrderDetail from "./routes/User/MyOrderDetail";
import Cart from "./routes/User/Cart";
import Order from "./routes/User/Order";
import OrderEnd from "./routes/User/OrderEnd";


function App() {
  return (
    <Router>
      <ScrolltoTop />
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          
          <Route path="/goods" exact={true} component={AllProductList} />
          <Route path="/goods/1" exact={true} component={KorProductList} />
          <Route path="/goods/2" exact={true} component={YangProductList} />
          <Route path="/goods/3" exact={true} component={ChiProductList} />
          <Route path="/goods/4" exact={true} component={AsiaProductList} />
          <Route path="/goods/5" exact={true} component={SalProductList} />

          <Route path="/todaysale" exact={true} component={TodaySale} />
          <Route path="/best" exact={true} component={BestProduct} />
          <Route path="/new" exact={true} component={NewProduct} />
          <Route path="/sale" exact={true} component={SaleProduct} />

          <Route path="/sellregist" exact={true} component={SellRegist} />

          <Route path="/mypage" exact={true} component={MyPage}/>
          <Route path="/mypage/order" exact={true} component={MyOrder}/>
          <Route path="/mypage/order/detail" exact={true} component={MyOrderDetail}/>
          <Route path="/cart" exact={true} component={Cart}/>
          <Route path="/order" exact={true} component={Order}/>
          <Route path="/orderend" exact={true} component={OrderEnd}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
