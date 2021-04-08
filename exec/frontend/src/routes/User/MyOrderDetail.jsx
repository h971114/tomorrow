import React, { useState, useEffect } from 'react';

const MyOrderDetail = () => {
    return (
        <div id="sub">
            <div className="size order_page check order_view">
                <form>
                    <div className="cs_tab">
                        <div className="sub">
                            <ul className="clear">
                                <li className="itemList2">
                                    <a href="/mypage/">
                                        개인정보
                                    <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                                <li className="itemList2">
                                    <a href="/mypage/order/" className="on">
                                        주문내역
                                    <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">주문내역</h4>

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
                                        <p>
                                            <img src="/img/cart_sample.png" />
                                    밀키트 이름
                                </p>
                                    </td>
                                    <td className="m_info">
                                        <em className="m_block">판매가 :
                                </em> 31,900원
							</td>
                                    <td className="m_info">
                                        <em className="m_block">수량 :
                                </em> 1개
							</td>
                                    <td className="m_info bottom">
                                        <em className="m_block">합계 :
                                </em> 31,900원
							</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="price_result clear">
                        <span>상품 구매금액
                            <b> 31,900</b>
                            원 + 배송비 <b>
                                0
                            </b>원
                            <em className="mbr">= 총 합계
                            <b className="result"> 31,900
                                <span>원</span>
                                </b>
                            </em>
                        </span>
                    </div>

                    <div className="order_info">
                        <h3>주문자 정보</h3>

                        <table className="write">
                            <colgroup>
                                <col width="13%" />
                                <col width="*" />
                                <col width="13%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th className="first">주문번호</th>
                                    <td className="first"><b>210330-00001</b></td>
                                    <th className="first">주문일</th>
                                    <td className="first">2021-03-30</td>
                                </tr>
                                <tr>
                                    <th>주문하시는 분</th>
                                    <td>이름 값</td>
                                    <th>아이디</th>
                                    <td>아이디 값</td>
                                </tr>
                                <tr>
                                    <th>휴대폰번호</th>
                                    <td>010-3788-3468</td>
                                    <th className="last">이메일 주소</th>
                                    <td className="last">prestto@kakao.com</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>배송지 정보</h3>
                        <table className="write">
                            <colgroup>
                                <col width="13%" />
                                <col width="37%" />
                                <col width="13%" />
                                <col width="37%" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th className="first">받으시는 분</th>
                                    <td className="delivery_n first">이름</td>
                                    <th className="first none"></th>
                                    <td className="first none"></td>
                                </tr>
                                <tr>
                                    <th>휴대폰번호</th>
                                    <td className="delivery_p">	010-3788-3468</td>
                                    <th>운송장번호</th>
                                    <td className="order_num"></td>
                                </tr>

                                <tr>
                                    <th className="addr_th">주소</th>
                                    <td className="addr" colSpan="3">
                                        <span>(우편번호)</span>
                                수령지 주소
                            </td>
                                </tr>
                                <tr>
                                    <th className="last">남기실 말씀</th>
                                    <td className="last" colSpan="3"></td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>결제 정보</h3>
                        <table className="write">
                            <colgroup>
                                <col width="13%" />
                                <col width="37%" />
                                <col width="13%" />
                                <col width="37%" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th className="first"><span>상품 구매금액</span></th>
                                    <td className="first" colSpan="3">31,900원 (사용 적립금: 0원)</td>
                                </tr>
                                <tr>
                                    <th><span>예상 적립금액</span></th>
                                    <td>638원</td>
                                    <th><span>사용 적립금액</span></th>
                                    <td>0원</td>
                                </tr>
                                <tr>
                                    <th><span>총 결제 금액</span></th>
                                    <td className="total">
                                        <span>31,900</span>원
							</td>
                                    <th>결제일</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th className="last">주문상태</th>
                                    <td className="result order last">배송 준비 중</td>
                                    <th className="last none"></th>
                                    <td className="last none"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="btnSet clear">
                        <div className="fl_l">
                            <a href="/mypage/order">목록</a>
                        </div>
                        <div className="fl_r">
                            <a className="pop" id="pop2">주문취소</a>
                            <a href="/mypage">확인</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MyOrderDetail;
