import React, { useState, useEffect } from 'react';

import '../css/User.css';

const Cart = ({ history }) => {
    const [amount, setAmount] = useState(1);
    const [pay, setPay] = useState(31900);

    useEffect(() => {
        document.getElementById('pro1_img').setAttribute('style', 'background-image:url(/img/cart_sample.png)');

    })

    const goBack = () => {
        history.goBack();
    };

    // // 체크박스 전체 선택
    // const handleAllCheck = (checked) => {
    //     if (checked) {
    //         // console.log("wow");
    //         const idArray = [];
    //     // 전체 체크 박스가 체크 되면 id를 가진 모든 elements를 배열에 넣어주어서,
    //     // 전체 체크 박스 체크
    //         posts.htmlForEach((el) => idArray.push(el.id));
    //         setCheckItems(idArray);
    //     }

    //     // 반대의 경우 전체 체크 박스 체크 삭제
    //     else {
    //         setCheckItems([]);
    //     }
    // };

    const upAmount = (e) => {
        var amounts = document.getElementById("amountCnt").value;
        var pay;
        if (amount < 9) {
            amounts = Number(amounts) + 1;
            pay = amounts * 31900;
            setAmount(amounts);
            setPay(pay);
        }
    }

    const downAmount = (e) => {
        var amounts = document.getElementById("amountCnt").value;
        var pay;
        if (amount > 1) {
            amounts = Number(amounts) - 1;
            pay = amounts * 31900;
            setAmount(amounts);
            setPay(pay);
        }
    }

    return (
        <div id="sub">
            <div className="size basket">
                <div className="sequence">
                    <ul className="clear">
                        <li>
                            <div className="order on">
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
                <form name="cartFrm" id="frm">
                    <div className="product_list">
                        <table>
                            <colgroup>
                                <col width="5%" />
                                <col width="60%" />
                                <col width="10%" />
                                <col width="15%" />
                                <col width="10%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" className="pro_check" id="check_all" />
                                        <label htmlFor="check_all"></label>
                                    </th>
                                    <th>상품정보</th>
                                    <th>판매가</th>
                                    <th>수량</th>
                                    <th>합계</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr className="se1">
                                    <td className="check">
                                        <input type="checkbox" className="numchk" />
                                        <input type="checkbox" className="session_check" id="pro_1" />
                                        <label htmlFor="pro_1"></label>
                                    </td>
                                    <td className="pro_info">
                                        <a>
                                            <div>
                                                <p id="pro1_img">
                                                    <img src="/img/product_bg.png" />
                                                </p>
                                                <span>밀키트 이름</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <em className="m_block">판매가 : </em>
                                        <span className="each_price">
                                            31,900 원
                                </span></td>
                                    <td className="amount">
                                        <div className="a_wrap">
                                            <a className="amount_down" onClick={downAmount} ></a>
                                            <input type="text" className="amount txt amount_val" id="amountCnt" value={amount} readOnly />
                                            <a className="amount_up" onClick={upAmount}></a>
                                        </div>
                                    </td>
                                    <td className="total">
                                        <em className="m_block">합계 : </em>
                                        <span className="eachtotal">{pay}</span>원
                                    <input type="hidden" name="eachtotal[]" className="eachtotal_val" value="31900" />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="price_result clear">
                        <span>상품 구매금액
                        <input type="hidden" name="myTotalPrice" value="31900" id="mytotalprice_val" />
                            <b id="totalprice"> 31,900</b>

                            원	+ 배송비 <b id="deliveryprice">
                                0</b>원 <em className="mbr">= 총 합계 <b className="result">
                                <input type="hidden" name="delivery" value="0" />
                                <span id="resultVal">31,900</span><span>원</span></b></em></span>
                    </div>

                    <div className="util_bt">
                        <a ><img src="/img/pro_delete.png" />선택상품삭제</a>
                        <a onClick={goBack}><img src="/img/pro_back.png" />쇼핑 계속하기</a>
                    </div>

                    <div className="last_bt">
                        <a>선택 상품 주문</a>
                        <a>전체 상품 주문</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Cart;