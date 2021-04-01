import React, { useState, useEffect } from 'react';

const SellPage = () => {
    return (
        <div id="sub" className="sellManage">
            <div className="inner_wrap mypage">
                <div className="size sub_page">
                    <div className="cs_tab">
                        <div className="sub">
                            <ul className="clear">
                                <li className="itemList4">
                                    <a href="/sellpage">
                                        판매자 정보
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                                <li className="itemList4">
                                    <a href="/sellpage/manage" className="on">
                                        판매 관리
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                                <li className="itemList4">
                                    <a href="/sellpage/order/">
                                        판매 내역
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                                <li className="itemList4">
                                    <a href="/sellpage/order/">
                                        판매 목록
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </a>
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

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SellPage;