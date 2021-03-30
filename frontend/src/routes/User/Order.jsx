import React, { useState, useEffect } from 'react';

const Order = ({ history }) => {

    useEffect(() => {
        document.getElementById('pro1_img').setAttribute('style', 'background-image:url(/img/cart_sample.png)');
    })

    const goBack = () => {
        history.goBack();
    };

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
                            <div className="order on">
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
                            <div className="order last">
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
                <div className="product_list">
                    <table>
                        <colgroup>
                            <col width="*" />
                            <col width="15%" />
                            <col width="5%" />
                            <col width="10%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>상품정보</th>
                                <th>판매가</th>
                                <th>수량</th>
                                <th>합계</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pro_info">
                                    <a>
                                        <div>
                                            <p id="pro1_img">
                                                <img src="/img/product_bg.png" />
                                            </p>
                                            <span>밀키트 이름 1</span>
                                        </div>
                                    </a>
                                </td>
                                <td className="m_info">
                                    <em className="m_block">판매가 :</em> 31,900원
                                </td>
                                <td className="m_info">
                                    <em className="m_block">수량 :</em> 1 </td>
                                <td className="m_info bottom">
                                    <em className="m_block">합계 :</em> 31,900원
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="price_result clear">
                    <span>상품 구매금액 <b>31,900</b>원	+ 배송비 <b>0</b>원 <em className="mbr">= 총 합계 <b className="result">31,900<span>원</span></b></em></span>
                </div>

                <div className="util_bt">
                    <a onClick={goBack}><img src="/img/pro_back.png" />이전 페이지</a>
                </div>

                <div className="order_info">
                    <h3>주문자 정보</h3>
                    <table className="write">
                        <colgroup>
                            <col width="13%" />
                            <col width="*" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th className="first"><span>주문하시는 분 <em className="essential">*</em></span></th>
                                <td className="order_n first">
                                    <input type="text" id="order_name" name="ordername" value="구매자" />
                                </td>
                            </tr>
                            <tr>
                                <th><span>휴대폰번호 <em className="essential">*</em></span></th>
                                <td className="order_p">
                                    <input type="text" id="order_phone" name="orderhp" value="010-1234-5678" />
                                </td>
                            </tr>
                            <tr>
                                <th className="last"><span>이메일 주소 <em className="essential">*</em></span></th>
                                <td className="order_e last">
                                    <input type="text" id="order_email" name="orderemail" value="buyer@buyer.com" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>배송지 정보</h3>
                    <table className="write">
                        <colgroup>
                            <col width="13%" />
                            <col width="*" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th className="first"><span>배송지 확인</span></th>
                                <td className="delivery_check first">
                                    <input type="checkbox" id="delivery_same" />
                                    {/* onClick="주소랑 데이터 가져오기" */}
                                    <label htmlFor="delivery_same">주문자 정보와 동일</label>
                                </td>
                            </tr>
                            <tr>
                                <th><span>받으시는 분<em className="essential">*</em></span></th>
                                <td className="delivery_n">
                                    <input type="text" id="delivery_name" name="receiptname" />
                                </td>
                            </tr>
                            <tr>
                                <th><span>휴대폰번호 <em className="essential">*</em></span></th>
                                <td className="delivery_p">
                                    <input type="text" id="delivery_p" name="receipthp" />
                                </td>
                            </tr>
                            <tr>
                                <th className="addr_th"><span>주소 <em className="essential">*</em></span></th>
                                <td colSpan="3" className="addr">
                                    <p className="clear">
                                        <input type="text" name="receiptzipcode" id="zipcode" className="wid200" readOnly />
                                        <a>우편번호</a>
                                        {/* 우편번호 api */}
                                    </p>
                                    <p className="inline">
                                        <input type="text" name="receiptaddr1" id="addr1" readOnly placeholder="기본주소" />
                                    </p>
                                    <p className="inline">
                                        <input type="text" name="receiptaddr2" id="addr2" placeholder="나머지주소" />
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th className="last"><span>남기실 말씀</span></th>
                                <td className="last">
                                    <input type="text" id="comment" name="memo" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* 결제정보 */}

                    <h3>결제 정보</h3>
                    <table className="write">
                        <colgroup>
                            <col width="13%" />
                            <col width="*" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th className="first"><span>상품 구매금액</span></th>
                                <td className="first">
                                    31,900원
                                </td>
                            </tr>
                            <tr>
                                <th><span>배송비</span></th>
                                <td>
                                    0원
                                </td>
                            </tr>
                            <tr>
                                <th className="point_th"><span>사용 적립금</span></th>
                                <td className="point">
                                    <input type="text" name="usepoint" id="usepoint" value="" />
                                    <a>전액사용</a> <span>보유적립금 : <em id="nowpoint">포인트 출력</em></span>
                                </td>
                            </tr>
                            <tr>
                                <th className="point_th"><span>적립 예상금액</span></th>
                                <td className="point">
                                    <span className="getPoint">638</span>원
                                </td>
                            </tr>
                            <tr>
                                <th className="last"><span>총 결제 금액</span></th>
                                <td className="total last">
                                    <span id="resultprice">31,900</span>원
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="last_check">
                    <input type="checkbox" id="last_ck" name="order_agree" />
                    <label htmlFor="last_ck">구매하실 상품의 결제정보를 확인하였으며, <em class="mbr">구매진행에 동의합니다.</em></label>

                    <div class="bt">
                        <a>결제하기</a>
                        {/* 백엔드 연동 예정 */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order;