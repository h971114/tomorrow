import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// const MyOrder = ({ history }) => {
class MyOrder extends React.Component {
    // useEffect(() => {
    //     document.getElementById("first_p").setAttribute("style", "background-image:url(/img/cart_sample.png)");
    // })

    componentDidMount() {
        const { location } = this.props;

        var id = location.state.id;
        var isSeller = location.state.isSeller;
        // //console.log(isSeller);

        // if (isSeller === '0') {
        //     document.getElementById('sellerMenu').setAttribute("style", "display:none");
        // } else if (isSeller === '1') {
        //     document.getElementById('userMenu').setAttribute("style", "display:none");
        // }

        this.setState({
            id: id,
            isSeller: isSeller
        })
    }

    render() {
        return (
            <div id="sub">
                <div className="inner_wrap order">
                    <div className="size sub_page">
                        <div className="cs_tab">
                            <div className="sub">
                                <ul className="clear" id="userMenu">
                                    <li className="itemList2">
                                        <Link
                                            to={{
                                                pathname: `/mypage`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                            className="on"
                                        >
                                            개인정보
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList2">
                                        <Link
                                            to={{
                                                pathname: `/mypage/order`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                        >
                                            주문내역
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order_wrap">
                            <h4 className="cs_title">주문내역</h4>
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
                                    {/* <tr className="myorder_tr" onClick={() => { history.push("/mypage/order/detail") }}>
                                        <td>
                                            <em>주문번호 : </em>210330-00001
                                    </td>
                                        <td>2021-03-30</td>
                                        <td className="product_name">
                                            <p id="first_p">
                                                <img src="/img/product_bg.png" /></p>
                                            <div>
                                                <p className="product"></p>
                                                <p className="num">수량 : 총 1개</p>
                                            </div>
                                        </td>
                                        <td className="price"><em>금액 : </em>31,900원</td>
                                        <td className="result ">배송 준비 중</td>
                                    </tr> */}

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
export default MyOrder;