import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import '../css/User.css';

const Cart = ({ history }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(1);
    const [pay, setPay] = useState(31900);
    const [totpay, setTotPay] = useState(0);
    const [totpayString, setTotPayString] = useState('');

    useEffect(() => {
        // document.getElementById('pro1_img').setAttribute('style', 'background-image:url(/img/cart_sample.png)');

        var Uid = localStorage.getItem('id');
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/cart`, {
            params: {
                id: Uid
            }
        }).then(res => {
            setPosts(res.data);
            console.log(res.data.length);
            var totPrices = 0;
            for (var i = 0; i < res.data.length; i++) {
                var thisPrice = res.data[i].price * res.data[i].amount;
                totPrices = totPrices + thisPrice;
                // console.log(totPrices);
            }
            setTotPay(totPrices);
            setTotPayString(totPrices.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
        })
    }, []);

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

    const goBack = () => {
        history.goBack();
    };

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
                                {
                                    posts.map((post, idx) => {
                                        var pay = post.amount * post.price;
                                        var payString = pay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        var checkBoxid = "pro" + (idx + 1);
                                        var pImgId = "pro" + (idx + 1) + "_img";
                                        var amountCntId = "amountCnt" + (idx + 1);
                                        var upAmountCntId = "1amountCnt" + (idx + 1);
                                        var downAmountCntId = "2amountCnt" + (idx + 1);
                                        var priceString = post.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        var payId = "eachtotal" + (idx + 1);

                                        const upAmount = (e) => {
                                            var amounts = document.getElementById(amountCntId).value;
                                            var totpays = totpay - (post.price * amounts);
                                            console.log(totpay);
                                            if (post.amount < 9) {
                                                amounts = Number(amounts) + 1;
                                                pay = amounts * post.price;
                                                post.amount = amounts;
                                                payString = pay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                document.getElementById(amountCntId).value = post.amount;
                                                document.getElementById(payId).innerText = payString;
                                                setTotPay(totpays + pay);
                                            }
                                        }

                                        const downAmount = (e) => {
                                            var amounts = document.getElementById(amountCntId).value;
                                            var totpays = totpay - (post.price * amounts);
                                            console.log(totpay);
                                            if (post.amount > 1) {
                                                amounts = Number(amounts) - 1;
                                                pay = amounts * post.price;
                                                post.amount = amounts;
                                                payString = pay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                document.getElementById(amountCntId).value = post.amount;
                                                document.getElementById(payId).innerText = payString;
                                                setTotPay(totpays + pay);
                                            }
                                        }

                                        return (
                                            <tr className="se1" key={idx}>
                                                {/* idx, amount, member_id, menu_id, name, price  */}
                                                <td className="check">
                                                    <input type="checkbox" className="numchk" />
                                                    <input type="checkbox" className="session_check" id={checkBoxid} />
                                                    <label htmlFor={checkBoxid}></label>
                                                </td>
                                                <td className="pro_info">
                                                    <a>
                                                        <div>
                                                            {/* <p id={pImgId} style={{ backgroundImage: `url(${img1})` }}>
                                <img src="/img/product_bg.png" />
                            </p> */}
                                                            <span>{post.name}</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>
                                                    <em className="m_block">판매가 : </em>
                                                    <span className="each_price">
                                                        {priceString} 원
</span></td>
                                                <td className="amount">
                                                    <div className="a_wrap">
                                                        <a className="amount_down" onClick={downAmount} id={downAmountCntId} ></a>
                                                        <input type="text" className="amount txt amount_val" id={amountCntId} value={post.amount} readOnly />
                                                        <a className="amount_up" onClick={upAmount} id={upAmountCntId}></a>
                                                    </div>
                                                </td>
                                                <td className="total">
                                                    <em className="m_block">합계 : </em>
                                                    <span className="eachtotal" id={payId} >{payString}</span>원
    <input type="hidden" name="eachtotal[]" className="eachtotal_val" value="31900" />
                                                </td>
                                            </tr>

                                        )
                                    }
                                    )}

                            </tbody>
                            {/* {posts.map((post, idx) => (
                                <List
                                    key={idx}
                                    amount={post.amount}
                                    member_id={post.member_id}
                                    menu_id={post.menu_id}
                                    name={post.name}
                                    price={post.price}
                                />
                            ))} */}
                        </table>
                    </div>
                    <div className="price_result clear">
                        <span>상품 구매금액
        <input type="hidden" name="myTotalPrice" value={totpay} id="mytotalprice_val" />
                            <b id="totalprice"> {totpay}</b>

            원	+ 배송비 <b id="deliveryprice">
                                0</b>원 <em className="mbr">= 총 합계 <b className="result">
                                <input type="hidden" name="delivery" value="0" />
                                <span id="resultVal">{totpay}</span><span>원</span></b></em></span>
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
        </div >
    )
}
export default Cart;