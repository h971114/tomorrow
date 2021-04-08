import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderEnd = () => {
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
        var Uid = sessionStorage.getItem('id');
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/getlastid`, {
            params: {
                id: Uid
            }
        }).then(res => {
            setOrderId(res.data);
            // console.log(res.data);
        })
    }, [])

    return (
        <div id="sub">
            <div className="size order_page">
                <div className="sequence">
                    <ul className="clear">
                        <li>
                            <div className="order">
                                <div className="tb">
                                    <div className="tbc">
                                        <img src="/img/sequence1.png" alt="장바구니" />
                                        <div className="txt">
                                            <em>STEP01</em>
                                            <span>장바구니</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="order">
                                <div className="tb">
                                    <div className="tbc">
                                        <img src="/img/sequence2.png" alt="주문하기" />
                                        <div className="txt">
                                            <em>STEP02</em>
                                            <span>주문하기</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="order">
                                <div className="tb">
                                    <div className="tbc">
                                        <img src="/img/sequence3.png" alt="주문확인" />
                                        <div className="txt">
                                            <em>STEP03</em>
                                            <span>주문확인</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="order last on">
                                <div className="tb">
                                    <div className="tbc">
                                        <img src="/img/sequence4.png" alt="주문완료" />
                                        <div className="txt">
                                            <em>STEP04</em>
                                            <span>주문완료</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="subCon">
                    <div className="size">
                        <div className="bbs mt50">
                            <div className="orderEnd">
                                <p><span>감사합니다.<br />
                                주문이 정상적으로 <em className="mbr">완료되었습니다.</em></span>
                                </p>
                                <div className="order_num">
                                    주문번호 : <strong>{orderId}</strong>
                                </div>
                                <p>
                                    주문하신 내역은 마이페이지에서 확인 가능합니다.
                                </p>
                            </div>
                            <div className="btnSet clear">
                                <a href="/mypage/order" className="btn big point">주문내역</a>
                                <Link
                                    to={{
                                        pathname: `/`
                                    }}
                                    className="btn big">
                                    메인
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderEnd;