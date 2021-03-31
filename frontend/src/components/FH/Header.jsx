import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';

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
        }
        console.log(cookies)
    };

    render() {
        if (window.location.pathname === '/Auth') return null;
        return (
            <div id="header">
                <div id="joinInduce">
                    <div className="size clear">
                        <p className="coupon"><span>'내일' 회원가입시</span><img src="/img/top_banner.png" alt="top_banner" className="img1" />
                            <span>할인쿠폰 지급<img src="/img/top_banner_go.png" className="go"></img></span></p>
                        <a href="#" className="closeBanner"><em>오늘하루 다시 열지 않기</em>
                            <img src="/img/top_banner_close.png"></img></a>
                    </div>
                </div>
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
                            <div className="util">
                                <ul className="clear">
                                    {this.state.id === "" &&
                                    <div>
                                        <li className="nologin">
                                            <a href="/Auth">로그인</a>
                                        </li>
                                        <li className="nologin">
                                            <a href="/Auth">회원가입</a>
                                        </li>
                                    </div>
                                    }
                                    {this.state.id !== "" &&
                                    <div>
                                        <li className="login">
                                            <a href="#">로그아웃</a>
                                        </li>
                                        <li className="login">
                                            <a href="#">마이페이지</a>
                                        </li>
                                    </div>
                                    }
                                    <li>
                                        <a href="#">장바구니 <span>0</span></a>
                                    </li>
                                </ul>
                            </div>
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
                                        <a href="#" >
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