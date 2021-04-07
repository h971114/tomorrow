import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class SellPage extends React.Component {

    constructor(props) {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        if (sessionStorage.getItem('id') !== null) {
            var Uid = sessionStorage.getItem('id');

            // this.setState({
            //     id: Uid
            // })
            // console.log(Uid);
            axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/isseller/` + Uid
            ).then(res => {
                if (res.data === "SUCCESS") {
                    document.getElementById('noSeller').setAttribute("style", "display:none");
                    document.getElementById('Seller').setAttribute("style", "display:inline-block");

                    this.setState({
                        isSeller: 1
                    })
                } else {
                    document.getElementById('Seller').setAttribute("style", "display:none");
                    document.getElementById('noSeller').setAttribute("style", "display:inline-block");

                    this.setState({
                        isSeller: 0
                    })
                }
            })
        }
    }

    render() {
        return (
            <div id="sub" className="sellManage" >
                <div className="inner_wrap mypage">
                    <div className="size sub_page">
                        <div className="cs_tab">
                            <div className="sub">
                                <ul className="clear" id="sellerMenu">
                                    <li className="itemList4">
                                        <Link
                                            to={{
                                                pathname: `/mypage`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                        >
                                            판매자 정보
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList4">
                                        <Link
                                            to={{
                                                pathname: `/sellpage/manage`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                            className="on"
                                        >
                                            판매 관리
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList4">
                                        <Link
                                            to={{
                                                pathname: `/sellpage/order`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                        >
                                            판매 내역
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList4">
                                        <Link
                                            to={{
                                                pathname: `/sellpage/order`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                        >
                                            판매 목록
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="cs_title">판매 관리</h4>
                        <form name="board" id="board">
                            <div className="member bbs">
                                <table className="write mt30 join">
                                    <caption className="display">
                                        회원정보
                                    </caption>
                                    <colgroup>
                                        <col width="20%" />
                                        <col width="25%" />
                                        <col width="15%" />
                                        <col width="25%" />
                                        <col width="15%" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th rowSpan="2" className="tit">
                                                <img src="/img/sell_img1.png" />판매 현황</th>
                                            <th className="subtit">입금 대기</th>
                                            <td><span className="greenTxt">0</span>건</td>
                                            <th className="subtit">반품 요청</th>
                                            <td><span className="redTxt">0</span>건</td>
                                        </tr>
                                        <tr>
                                            <th className="subtit">취소 요청</th>
                                            <td><span className="redTxt">0</span>건</td>
                                            <th className="subtit">교환 요청</th>
                                            <td><span className="redTxt">0</span>건</td>
                                        </tr>
                                        <tr className="topLine">
                                            <th rowSpan="2" className="tit">
                                                <img src="/img/sell_img3.png" />배송 현황
                                                </th>
                                            <th className="subtit">배송 준비</th>
                                            <td><span className="greenTxt">1</span>건</td>
                                            <th className="subtit">배송 중</th>
                                            <td><span className="greenTxt">2</span>건</td>
                                        </tr>
                                        <tr>
                                            <th className="subtit">배송완료</th>
                                            <td><span className="greenTxt">20</span>건</td>
                                            <th className="subtit">구매확정</th>
                                            <td><span className="greenTxt">65</span>건</td>
                                        </tr>
                                        <tr className="topLine">
                                            <th rowSpan="2" className="tit">
                                                <img src="/img/sell_img2.png" />
                                                상품 현황</th>
                                            <th rowSpan="2" className="subtit valign">판매 중 상품</th>
                                            <td rowSpan="2" className="valign"><span className="greenTxt">15</span>건</td>
                                            <th className="subtit">재고 부족 상품</th>
                                            <td><span className="redTxt">2</span>건</td>
                                        </tr>
                                        <tr>
                                            {/* <th rowSpan="2">상품 현황</th> */}
                                            {/* <th>판매 중 상품</th>
                                            <td>15건</td> */}
                                            <th className="subtit">품절 상품</th>
                                            <td><span className="redTxt">2</span>건</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="color_btnSet clear">
                                    <div className="clear">
                                        <a className="btn fl_r" href="/sellregist">상품 등록</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default SellPage;