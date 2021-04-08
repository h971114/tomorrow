import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Order extends React.Component {

    constructor(props) {
        super();
        this.state = {
            id: sessionStorage.getItem('id')
        }
    }
    componentDidMount() {
        var Uid = this.state.id;
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/list`, {
            params: {
                member_id: Uid
            }
        }
        ).then(res => {
            // console.log(res);
        })
    }


    render() {
        return (
            <div id="sub">
                <div className="inner_wrap order">
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
                                            className="on"
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
                        <div className="order_wrap">
                            <h4 className="cs_title">판매 내역</h4>
                            <table className="table_form">
                                <colgroup>
                                    <col width="15%" />
                                    <col width="12%" />
                                    <col width="*" />
                                    <col width="12%" />
                                    <col width="15%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>주문번호</th>
                                        <th>주문일자</th>
                                        <th>제품명</th>
                                        <th>금액(원)</th>
                                        <th>주문상태</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="sellorder_tr">
                                        <td>
                                            <em>주문번호 : </em>210330-00001
                                    </td>
                                        <td>2021-03-30</td>
                                        <td className="product_name" style={{ cursor: 'pointer' }} >
                                            <p id="first_p">
                                                {/* p태그의 백그라운드로 이미지 넣기 */}
                                                <img src="/img/product_bg.png" /></p>
                                            <div>
                                                <p className="product"></p>
                                                <p className="num">수량 : 총 1개</p>
                                            </div>
                                        </td>
                                        <td className="price"><em>금액 : </em>31,900원</td>
                                        <td id="result" className="result">배송 준비 중<br /></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="pagenate btnSet clear">
                            <ul className="paging">
                                <li>
                                    <a className="current">1</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Order;