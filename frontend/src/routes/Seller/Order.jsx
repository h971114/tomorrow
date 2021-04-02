import React, { useState, useEffect } from 'react';

const Order = ({ history }) => {
    const [state, setState] = useState(1);

    useEffect(() => {
        document.getElementById("first_p").setAttribute("style", "background-image:url(/img/cart_sample.png)");
    })

    const changeState = () => {
        document.getElementById('result').setAttribute("style", "display:none");
        document.getElementById('changeState').setAttribute("style", "display:");
    }

    const stateChange = () => {
        var states = document.getElementById("state").value;
        if (window.confirm("배송 상태를 변경하시겠습니까?")) {
            setState(states);
            alert("변경되었습니다.");
        } else {
            alert("취소하셨습니다.");
        }
        document.getElementById("state").value = state;
        document.getElementById('result').setAttribute("style", "display:");
        document.getElementById('changeState').setAttribute("style", "display:none");
        // console.log(state);
    }

    return (
        <div id="sub">
            <div className="inner_wrap order">
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
                                    <a href="/sellpage/manage">
                                        판매 관리
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                                <li className="itemList4">
                                    <a href="/sellpage/order/" className="on">
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
                                    <td className="product_name" style={{ cursor: 'pointer' }} onClick={() => { history.push("/mypage/order/detail") }}>
                                        <p id="first_p">
                                            {/* p태그의 백그라운드로 이미지 넣기 */}
                                            <img src="/img/product_bg.png" /></p>
                                        <div>
                                            <p className="product"></p>
                                            <p className="num">수량 : 총 1개</p>
                                        </div>
                                    </td>
                                    <td className="price"><em>금액 : </em>31,900원</td>
                                    <td id="result" className="result">배송 준비 중<br />
                                        <input className="stateBtn" type="button" value="주문 상태 변경" onClick={changeState} />
                                    </td>
                                    <td id="changeState" className="changeState" style={{ display: 'none' }}>
                                        <select id="state" onChange={stateChange} >
                                            <option value="1">배송 준비 중</option>
                                            <option value="2">배 송 중</option>
                                            <option value="3">배송 완료</option>
                                        </select>
                                    </td>
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
export default Order;