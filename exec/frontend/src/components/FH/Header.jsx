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
        // console.log(props);

        const { cookies } = props;
        this.state = {
            token: cookies.get('token') || "",
            searchtxt: ""
        }
    };

    componentDidMount() {
        const { location } = this.props;
        // // console.log(location.state.id);

        this.cartCount();

        // if (sessionStorage.getItem('id') !== null) {
        //     var Uid = sessionStorage.getItem('id');
        //     // console.log(Uid);
        //     axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/isseller/` + Uid
        //     ).then(res => {
        //         if (res.data === "SUCCESS") {
        //             document.getElementById('noSeller').setAttribute("style", "display:none");
        //             document.getElementById('Seller').setAttribute("style", "display:inline-block");

        //             this.setState({
        //                 isSeller: 1
        //             })
        //         } else {
        //             document.getElementById('Seller').setAttribute("style", "display:none");
        //             document.getElementById('noSeller').setAttribute("style", "display:inline-block");

        //             this.setState({
        //                 isSeller: 0
        //             })
        //         }
        //     })
        // }
        // // // console.log(this.state.cartCnt);
    }

    // shouldComponentUpdate()

    cartCount = (e) => {
        if (sessionStorage.getItem('id') !== null) {
            var Uid = sessionStorage.getItem('id');
            // console.log(Uid);
            axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/cart/count`, {
                params: {
                    id: Uid
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
        // window.location.replace("/");
    };

    render() {
        const {
            cartCnt
        } = this.state;
        return (
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
                                    <span>'??????' ???????????????</span><img src="/img/top_banner.png" alt="top_banner" className="img1" />
                                    <span>???????????? ??????<img src="/img/top_banner_go.png" className="go"></img></span>
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
                                    <input type="text" id="search_text" name="head_val" onChange={this.searchtxt} placeholder="?????? ??????"></input>

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
                                            isSeller: this.state.isSeller
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
                                            <a href="/Auth">?????????</a>
                                        </li>
                                        <li className="nologin">
                                            <a href="/Auth">????????????</a>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {this.state.id !== "" &&
                                <div className="util">
                                    <ul className="clear">
                                        <li className="login">
                                            <a onClick={this.logout} href="/">????????????</a>
                                        </li>
                                        <li className="login" id="noSeller">
                                            <Link
                                                to={{
                                                    pathname: `/mypage`,
                                                    state: {
                                                        id: this.state.id,
                                                        isSeller: this.state.isSeller
                                                    }
                                                }}
                                            >???????????????</Link>
                                        </li>
                                        <li className="login" id="Seller" style={{ display: `none` }}>
                                            <Link
                                                to={{
                                                    pathname: `/mypage`,
                                                    state: {
                                                        id: this.state.id,
                                                        isSeller: this.state.isSeller
                                                    }
                                                }}
                                            >???????????????</Link>
                                        </li>
                                        <li><Link
                                            to={{
                                                pathname: `/cart`,
                                                state: {
                                                    id: this.state.id
                                                }
                                            }}
                                        >
                                            ???????????? <span id="cartCnt">{cartCnt}</span>
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
                                        <a href="/goods">??????????????????</a>
                                        <ul className="clear" id="menu_all_sub">
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/1`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >??????</Link>
                                            </li>
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/2`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >??????</Link>
                                            </li>
                                            <li className="has-sub">

                                                <Link
                                                    to={{
                                                        pathname: `/goods/3`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >??????/??????</Link>
                                            </li>
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/4`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >?????????</Link>
                                            </li>
                                            <li className="has-sub">
                                                <Link
                                                    to={{
                                                        pathname: `/goods/5`
                                                    }}
                                                    className="categoryDepthLink"
                                                    aria-label="submenu"
                                                >?????????</Link>

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
                                            ????????? ??????
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/new`
                                            }}
                                        >
                                            ?????????
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/TodaySale`
                                            }}
                                        >
                                            ????????? ??????
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/Sale`
                                            }}
                                        >
                                            ????????????
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/cscenter/notice`
                                            }}
                                        >
                                            ????????????
                                            </Link>
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