import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";

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
import SellList from "./routes/Seller/SellList";
import SellRegist from "./routes/Seller/Regist";
import SellModify from "./routes/Seller/Modify";

import AllProductList from "./routes/Product/ProductList/AllProductList";
import KorProductList from "./routes/Product/ProductList/KorProductList";
import YangProductList from "./routes/Product/ProductList/YangProductList";
import ChiProductList from "./routes/Product/ProductList/ChiProductList";
import AsiaProductList from "./routes/Product/ProductList/AsiaProductList";
import SalProductList from "./routes/Product/ProductList/SalProductList";
import SearchList from "./routes/Product/SearchList";

import Detail from "./routes/Product/Detail";
import SDetail from "./routes/Seller/Detail";

import TodaySale from "./routes/Product/TodaySale";
import BestProduct from "./routes/Product/BestProduct";
import NewProduct from "./routes/Product/NewProduct";
import SaleProduct from "./routes/Product/SaleProduct";

import MyPage from "./routes/User/MyPage";
import MyOrder from "./routes/User/MyOrder";
import MyOrderDetail from "./routes/User/MyOrderDetail";
import Cart from "./routes/User/Cart";
import Order from "./routes/User/Order";
import selectOrder from "./routes/User/selectOrder";
import OrderEnd from "./routes/User/OrderEnd";

import Notice from "./routes/CsCenter/Notice";
import NoticeWrite from "./routes/CsCenter/NoticeWrite";
import NoticeModify from "./routes/CsCenter/NoticeModify";
import NoticeDetail from "./routes/CsCenter/NoticeDetail";
import Faq from "./routes/CsCenter/Faq";
import QnA from "./routes/CsCenter/QnA";
import QnADetail from "./routes/CsCenter/QnADetail";
import QnAWrite from "./routes/CsCenter/QnAWrite";
import QnARewrite from "./routes/CsCenter/QnARewrite";


import axios from 'axios';

import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';

import { createStore } from 'redux';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };


  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      token: cookies.get('token') || "",
      id: '',
      isseller:0,
      message: "FAIL",
      cartCnt:0
    }
  }

  componentDidMount() {
    if (this.state.token !== null) {
      axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/jwttoken/`, {
        params: {
          jwt: this.state.token
        }
      }).then(res => {
        if (res.data.message == "SUCCESS") {
          // console.log("jwt인증완료");
          this.setState({
            id: res.data.id,
            message:"SUCCESS"
          })
          if (res.data.isseller === "seller") {
            this.setState({
              isseller:1
            })
          }
          sessionStorage.setItem('id', this.state.id);
          sessionStorage.setItem('isseller', this.state.isseller);
        } else {
          this.setState({
              message:"FAIL"
          })
          sessionStorage.clear();
        }
      });
    }
    
  }

  cartCount = (e) => {
    if (this.state.id !== '') {
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/cart/count`, {
            params: {
                id: this.state.id
            }
        }).then(res => {
            // // console.log(res.data);
            var cartCnts = res.data;
            // // console.log(cartCnt);
            this.setState({
                cartCnt: cartCnts
            })
        })
    }
  }
  searchtxt = (e) => {
    // // console.log(e.target.value);
    this.setState({
        searchtxt: e.target.value
    })
}
goSearch = (e) => {
    e.preventDefault();

    window.location.replace('/search');
}

logout = (e) => {
    const { cookies } = this.props;

  cookies.remove('token');
  sessionStorage.clear();
    window.location.replace("/");
};

  render() {
    // // console.log(this.state.id);
    const {
      message,
      id,
      isseller,
      cartCnt
    } = this.state;
    
    return (
      <Router>
        <ScrolltoTop />
        <div className="wrapper" >
          {/* <Header render={() => <Header Uid={id} />} /> */}
          
{/* 헤더 시작 */}
<div id="header">
                {this.state.id === "" &&
                    <div id="joinInduce">
                        <div className="size clear">
                            <p className="coupon">
                                <Link
                                    to={{
                                        pathname: `/join`
                                    }}
                                >
                                    <span>'내일' 회원가입시</span><img src="/img/top_banner.png" alt="top_banner" className="img1" />
                                    <span>할인쿠폰 지급<img src="/img/top_banner_go.png" className="go"></img></span>
                                </Link>

                            </p>
                        </div>
                    </div>
                }
                <div className="inner">
                    <div className="header_top">
                        <div className="size">
                            <div className="search">
                                <form>
                                    <input type="text" id="search_text" name="head_val" onChange={this.searchtxt} placeholder="제품 검색"></input>

                                    <Link
                                        to={{
                                            pathname: `/search/${this.state.searchtxt}`,
                                            state: {
                                                searchtxt: this.state.searchtxt
                                            }
                                        }}
                                    ><input type="submit" value=""></input>
                                    </Link>
                                </form>
                            </div>
                            <h1 className="logo">
                                <Link
                                    to={{
                                        pathname: `/`,
                                        state: {
                                            id: this.state.id,
                                            isSeller: isseller
                                        }
                                    }}
                                >
                                    <img src="/img/logo.png"></img>
                                </Link>
                            </h1>
                            {this.state.id === "" &&
                                <div className="util">
                                    <ul className="clear">
                                        <li className="nologin">
                        <Link
                          to={{
                            pathname: `/auth`
                          }} >
                              로그인</Link>
                                        </li>
                                        <li className="nologin">
                        <Link
                          to={{
                            pathname:`/join`
                          }}>회원가입</Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {this.state.id !== "" &&
                                <div className="util">
                                    <ul className="clear">
                                        <li className="login">
                                            <a onClick={this.logout}>로그아웃</a>
                                        </li>
                                        <li className="login" id="noSeller">
                                            <Link
                                                to={{
                                                    pathname: `/mypage`,
                                                    state: {
                                                        id: id,
                                                        isSeller: isseller
                                                    }
                                                }}
                                            >마이페이지</Link>
                                        </li>
                                        <li className="login" id="Seller" style={{ display: `none` }}>
                                            <Link
                                                to={{
                                                    pathname: `/mypage`,
                                                    state: {
                                                        id: id,
                                                        isSeller: isseller
                                                    }
                                                }}
                                            >마이페이지</Link>
                                        </li>
                                        <li><Link
                                            to={{
                                                pathname: `/cart`,
                                                state: {
                                                    id: id
                                                }
                                            }}
                                        >
                                            장바구니
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="gnb menu_tab">
                        <div className="size clear">
                            <div className="menu_all">
                                <ul className="clear">
                                    <li className="header_all">
                        <Link to="/goods">
                          전체카테고리</Link>
                                        <ul className="clear" id="menu_all_sub">
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/1`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >한식</Link>
                                            </li>
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/2`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >양식</Link>
                                            </li>
                                            <li className="has-sub">

                                                <Link
                                                    to={{
                                                        pathname: `/goods/3`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >중식/일식</Link>
                                            </li>
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/4`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >동남아</Link>
                                            </li>
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/5`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >샐러드</Link>

                                            </li>
                                        </ul>
                                        <div className="header_bg"></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu_other">
                                <ul className="clear depth1">
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/best`
                                            }}
                                        >
                                            베스트 상품
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/new`
                                            }}
                                        >
                                            신상품
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/TodaySale`
                                            }}
                                        >
                                            오늘만 특가
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/Sale`
                                            }}
                                        >
                                            알뜰쇼핑
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/cscenter/notice`
                                            }}
                                        >
                                            고객센터
                                            </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



{/* 헤더 종료 */}

          <Switch>
            <Route path="/" exact={true} render={() => <Home Uid={id} isseller={isseller}/>} />
            
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
            <Route path="/search/:keyword" exact={true} component={SearchList}/>
          
            <Route path="/TodaySale" exact={true} component={TodaySale} />
            <Route path="/Best" exact={true} component={BestProduct} />
            <Route path="/New" exact={true} component={NewProduct} />
            <Route path="/Sale" exact={true} component={SaleProduct} />
  
            <Route path="/product/detail/:id" exact={true} component={Detail} />
            <Route path="/product/seller/:id" exact={true} component={SDetail} />
  
            <Route path="/todaysale" exact={true} component={TodaySale} />
            <Route path="/best" exact={true} component={BestProduct} />
            <Route path="/new" exact={true} component={NewProduct} />
            <Route path="/sale" exact={true} component={SaleProduct} />
  
            <Route path="/sellpage" exact={true} render={() => <SellPage Uid={id} isseller={isseller} />} />
            <Route path="/sellpage/manage" exact={true} render={() => <SellManage Uid={id} isseller={isseller} />} />
            <Route path="/sellpage/list" exact={true} render={() => <SellList Uid={id} isseller={isseller}/>} />
            <Route path="/sellregist" exact={true} render={() => <SellRegist Uid={id} isseller={isseller}/>} />
            <Route path="/sellmodify/:id" exact={true} component={SellModify} />
  
            <Route path="/mypage" exact={true} render={() => <MyPage Uid={id} isseller={isseller}/> }/>
            <Route path="/mypage/order" exact={true} render={() => <MyOrder Uid={id} isseller={isseller}/> }/>
            <Route path="/mypage/order/detail" exact={true} component={MyOrderDetail}/>
            <Route path="/cart" exact={true} render={() => <Cart Uid={id} isseller={isseller}/>}/>
            <Route path="/order" exact={true} component={Order}/>
            <Route path="/selorder" exact={true} component={selectOrder}/>
            <Route path="/orderend" exact={true} component={OrderEnd} />
            
            <Route path="/cscenter/notice" exact={true} component={Notice}/>
            <Route path="/cscenter/notice/write" exact={true} component={NoticeWrite}/>
            <Route path="/cscenter/notice/:id/modify" exact={true} component={NoticeModify}/>
            <Route path="/cscenter/notice/:id" exact={true} component={NoticeDetail}/>
            <Route path="/cscenter/faq" exact={true} component={Faq}/>
            <Route path="/cscenter/qna" exact={true} render={() => <QnA Uid={id} isseller={isseller} />}/>
            <Route path="/cscenter/qna/detail" exact={true} component={QnADetail}/>
            <Route path="/cscenter/qna/write" exact={true} component={QnAWrite}/>
            <Route path="/cscenter/qna/:id/rewrite" exact={true} component={QnARewrite}/>
            <Route path="/cscenter/qna/:id" exact={true} component={QnADetail}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
