import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrolltoTop from "./components/common/ScrollToTop";

import Header from "./components/FH/Header";
import Footer from "./components/FH/Footer";

import Auth from "./components/auth/Auth";
import FindId from "./components/auth/FindID";
import FindPw from "./components/auth/FindPW";
import Join from "./components/auth/Join";

import Home from "./routes/Home";

import SellPage from "./routes/Seller/SellPage";
import SellManage from "./routes/Seller/Manager";
import SellOrder from "./routes/Seller/Order";
import SellList from "./routes/Seller/SellList";
import SellRegist from "./routes/Seller/Regist";
import SellModify from "./routes/Seller/Modify";

import AllProductList from "./routes/Product/ProductList/AllProductList";
import KorProductList from "./routes/Product/ProductList/KorProductList";
import YangProductList from "./routes/Product/ProductList/YangProductList";
import ChiProductList from "./routes/Product/ProductList/ChiProductList";
import AsiaProductList from "./routes/Product/ProductList/AsiaProductList";
import SalProductList from "./routes/Product/ProductList/SalProductList";

import Detail from "./routes/Product/Detail";

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

import Notice from "./routes/CsCenter/Notice";
import NoticeWrite from "./routes/CsCenter/NoticeWrite";
import NoticeModify from "./routes/CsCenter/NoticeModify";
import Faq from "./routes/CsCenter/Faq";
import QnA from "./routes/CsCenter/QnA";
import QnADetail from "./routes/CsCenter/QnADetail";
import QnAWrite from "./routes/CsCenter/QnAWrite";
import QnARewrite from "./routes/CsCenter/QnARewrite";


function App() {

  return (
    <Router>
      <ScrolltoTop />
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Auth" exact={true} component={Auth} />
          <Route path="/findid" exact={true} component={FindId} />
          <Route path="/findpw" exact={true} component={FindPw} />
          <Route path="/join" exact={true} component={Join} />
          
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

          <Route path="/product/detail/:id" exact={true} component={Detail} />

          <Route path="/todaysale" exact={true} component={TodaySale} />
          <Route path="/best" exact={true} component={BestProduct} />
          <Route path="/new" exact={true} component={NewProduct} />
          <Route path="/sale" exact={true} component={SaleProduct} />

          <Route path="/sellpage" exact={true} component={SellPage} />
          <Route path="/sellpage/manage" exact={true} component={SellManage} />
          <Route path="/sellpage/order" exact={true} component={SellOrder} />
          <Route path="/sellpage/list" exact={true} component={SellList} />
          <Route path="/sellregist" exact={true} component={SellRegist} />
          <Route path="/sellmodify" exact={true} component={SellModify} />

          <Route path="/mypage" exact={true} component={MyPage}/>
          <Route path="/mypage/order" exact={true} component={MyOrder}/>
          <Route path="/mypage/order/detail" exact={true} component={MyOrderDetail}/>
          <Route path="/cart" exact={true} component={Cart}/>
          <Route path="/order" exact={true} component={Order}/>
          <Route path="/orderend" exact={true} component={OrderEnd} />
          
          <Route path="/cscenter/notice" exact={true} component={Notice}/>
          <Route path="/cscenter/notice/write" exact={true} component={NoticeWrite}/>
          <Route path="/cscenter/notice/modify" exact={true} component={NoticeModify}/>
          <Route path="/cscenter/faq" exact={true} component={Faq}/>
          <Route path="/cscenter/qna" exact={true} component={QnA}/>
          <Route path="/cscenter/qna/detail" exact={true} component={QnADetail}/>
          <Route path="/cscenter/qna/write" exact={true} component={QnAWrite}/>
          <Route path="/cscenter/qna/rewrite" exact={true} component={QnARewrite}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
