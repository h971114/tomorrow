import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';

import "./Header.css";

import App from '../../App';
import axios from "axios";

class Header extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            id: cookies.get('id') || "",
            token: cookies.get('token') || "",
            isSeller: cookies.get('isSeller') || "0",
        }
    };

    componentDidMount() {
        this.cartCount();
        // console.log(this.state.cartCnt);
    }

    cartCount = (e) => {
        if (localStorage.getItem('id') !== null) {
            var Uid = localStorage.getItem('id');
            console.log(Uid);
            axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/cart/count`, {
                params: {
                    id: Uid
                }
            }).then(res => {
                console.log(res.data);
                var cartCnts = res.data;
                // console.log(cartCnt);
                this.setState({
                    cartCnt: cartCnts
                })
            })
        }
    }

    logout = (e) => {
        const { cookies } = this.props;

        window.localStorage.clear();
        cookies.remove('id');
        cookies.remove('token');
        cookies.remove('isSeller');
        window.location.replace("/");
    };

    render() {
        if (window.location.pathname === '/Auth') return null;
        return (
            <div id="header">
                {this.state.id === "" &&
                    <div id="joinInduce">
                        <div className="size clear">
                            <p className="coupon">
                                <a href="/Auth">
                                    <span>'내일' 회원가입시</span><img src="/img/top_banner.png" alt="top_banner" className="img1" />
                                    <span>할인쿠폰 지급<img src="/img/top_banner_go.png" className="go"></img></span>
                                </a>
                            </p>
                        </div>
                    </div>
                }
                <div className="inner">
                    <div className="header_top">
                        <div className="size">
                            <div className="search">
                                <form>
                                    <input type="text" id="search_text" name="head_val" placeholder="제품 검색"></input>
                                    <input type="submit" value=""></input>
                                </form>
                            </div>
                            <h1 className="logo">
                                <a href="/">
                                    <img src="/img/logo.png"></img>
                                </a>
                            </h1>
                            {this.state.id === "" &&
                                <div className="util">
                                    <ul className="clear">
                                        <li className="nologin">
                                            <a href="/Auth">로그인</a>
                                        </li>
                                        <li className="nologin">
                                            <a href="/Auth">회원가입</a>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {this.state.id !== "" &&
                                <div className="util">
                                    <ul className="clear">
                                        <li className="login">
                                            <a onClick={this.logout} style={{ cursor: "pointer" }}>로그아웃</a>
                                        </li>
                                        <li className="login">
                                            {
                                                this.state.isSeller === "0" &&
                                                <Link
                                                    to={{
                                                        pathname: `/mypage`,
                                                        state: {
                                                            id: this.state.id
                                                        }
                                                    }}
                                                >마이페이지</Link>
                                            }
                                            {
                                                this.state.isSeller === "1" &&
                                                <a href="/sellPage">판매자 페이지</a>
                                            }
                                        </li>
                                        <li>
                                            <a href="/cart">장바구니 <span>{this.state.cartCnt}</span></a>
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
                                        <a href="/goods">전체카테고리</a>
                                        <ul className="clear" id="menu_all_sub">
                                            <li className="has-sub">
                                                <a className="categoryDepthLink" aria-label="submenu" href="/goods/1">
                                                    한식
                                                </a>
                                            </li>
                                            <li className="has-sub">
                                                <a className="categoryDepthLink" aria-label="submenu" href="/goods/2">
                                                    양식
                                                </a>
                                            </li>
                                            <li className="has-sub">
                                                <a className="categoryDepthLink" aria-label="submenu" href="/goods/3">
                                                    중식/일식
                                                </a>
                                            </li>
                                            <li className="has-sub">
                                                <a className="categoryDepthLink" aria-label="submenu" href="/goods/4">
                                                    동남아
                                                </a>
                                            </li>
                                            <li className="has-sub">
                                                <a className="categoryDepthLink" aria-label="submenu" href="/goods/5">
                                                    샐러드
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="header_bg"></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu_other">
                                <ul className="clear depth1">
                                    <li>
                                        <a href="/Best">
                                            베스트 상품</a>
                                    </li>
                                    <li>
                                        <a href="/New" >
                                            신상품</a>
                                    </li>
                                    <li>
                                        <a href="/TodaySale" >
                                            오늘만 특가</a>
                                    </li>
                                    <li>
                                        <a href="/Sale" >
                                            알뜰쇼핑</a>
                                    </li>
                                    <li>
                                        <a href="/cscenter/notice" >
                                            고객센터</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default withCookies(Header);