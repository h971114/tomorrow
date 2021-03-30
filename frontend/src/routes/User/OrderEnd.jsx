import React, { useState, useEffect } from 'react';

const OrderEnd = () => {
    return (
        <div id="sub">
            <div className="size order_page">
                <div className="sequence">
                    <ul className="clear">
                        <li>
                            <div className="order">
                                <div className="tb">
                                    <div className="tbc">
                                        <img src="/img/sequence1.png" />
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
                                        <img src="/img/sequence2.png" />
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
                                        <img src="/img/sequence3.png" />
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
                                        <img src="/img/sequence4.png" />
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
                                    주문번호 : <strong>210330-00001</strong>
                                </div>
                                <p>
                                    주문하신 내역은 마이페이지에서 확인 가능합니다.
                                </p>
                            </div>
                            <div className="btnSet clear">
                                <a href="#" className="btn big point">주문내역</a>
                                <a href="/" className="btn big">메인</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderEnd;