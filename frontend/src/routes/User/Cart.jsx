import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import '../css/User.css';

const Cart = ({ history }) => {
    const [posts, setPosts] = useState([]);
    const [amount, setAmount] = useState(1);
    const [sendpay, setSendPay] = useState(2500);
    const [pays, setPays] = useState(0);
    const [totpay, setTotPay] = useState(0);
    const [totpayString, setTotPayString] = useState('');
    const [sendpayString, setSendPayString] = useState('');
    const [paysString, setPaysString] = useState('');

    useEffect(() => {
        var Uid = localStorage.getItem('id');
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/cart`, {
            params: {
                id: Uid
            }
        }).then(res => {
            setPosts(res.data);
            var totPrices = 0;
            var sendprice = 0;
            // for (var i = 0; i < res.data.length; i++) {
            //     var thisPrice = res.data[i].price * res.data[i].amount;
            //     totPrices = totPrices + thisPrice;
            //     console.log(totPrices);
            // }
            // console.log(posts);
            // setPosts(postsTemp);
            if (totPrices > 30000) {
                sendprice = 0;
            } else {
                sendprice = 2500;
            }
            setPays(totPrices);
            setPaysString(totPrices.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));

            setSendPay(sendprice);
            setSendPayString(sendprice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));

            setTotPay(totPrices + sendprice);
            setTotPayString((totPrices + sendprice).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
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

    const checkAll = (e) => {
        var checkall = document.getElementById("check_all");
        var checkboxes = document.getElementsByClassName("session_check");
        // session_check
        var Pays = 0, sendpays = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = checkall.checked;
        }

        if (checkall.checked) {
            posts.map((post, idx) => {
                // console.log(post);
                var realPrice = post.price;
                var date = new Date().getDate();
                // console.log(date);
                if (date < 10)
                    date = '0' + date;

                var days = post.todaysale;
                days = days.substr(days.length - 2, 2);
                // console.log(days);
                if (date === days)
                    realPrice = post.price / 100 * (100 - post.tdr);
                else if (post.discount_rate > 0)
                    realPrice = post.price / 100 * (100 - post.discount_rate);

                Pays += (realPrice * post.amount);
            })
        } else {
            Pays = 0;
            sendpays = 2500;
        }
        if (Pays > 30000)
            sendpays = 0;
        else {
            sendpays = 2500;
        }

        setPays(Pays);
        setPaysString(Pays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
        setTotPay(Pays + sendpays);

        setSendPay(sendpays);
        var totpayStrings = (Pays + sendpays).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        setTotPayString(totpayStrings);
        setSendPayString(sendpays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));


        // console.log(e.target.checked);
        // console.log(checkall.checked);
    }

    const deleteCart = (e) => {
        var checkboxes = document.getElementsByClassName("session_check");

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked === true) {
                var cartId = checkboxes[i].value;
                axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/cart`, {
                    params: {
                        id: cartId
                    }
                }).then(res => {
                    alert('삭제되었습니다.');
                })
            }
        }
        window.location.replace("/cart");
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
                                        <input type="checkbox" className="pro_check" id="check_all" onChange={checkAll} />
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
                                        // console.log(post);
                                        var realPrice = post.price;
                                        var date = new Date().getDate();
                                        // console.log(date);
                                        if (date < 10)
                                            date = '0' + date;

                                        var days = post.todaysale;
                                        days = days.substr(days.length - 2, 2);
                                        // console.log(days);
                                        if (date === days)
                                            realPrice = post.price / 100 * (100 - post.tdr);
                                        else if (post.discount_rate > 0)
                                            realPrice = post.price / 100 * (100 - post.discount_rate);

                                        var eachpay = post.amount * realPrice;
                                        var eachpayString = eachpay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        var checkBoxid = "pro" + (idx + 1);
                                        var pImgId = "pro" + (idx + 1) + "_img";
                                        var amountCntId = "amountCnt" + (idx + 1);
                                        var upAmountCntId = "1amountCnt" + (idx + 1);
                                        var downAmountCntId = "2amountCnt" + (idx + 1);
                                        var priceString = realPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        var payId = "eachtotal" + (idx + 1);

                                        const upAmount = (e) => {
                                            var amounts = document.getElementById(amountCntId).value;
                                            var checkboxes = document.getElementById(checkBoxid);

                                            if (post.amount < 9) {
                                                amounts = Number(amounts) + 1;
                                                eachpay = amounts * realPrice;
                                                post.amount = amounts;
                                                eachpayString = eachpay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                document.getElementById(amountCntId).value = post.amount;
                                                document.getElementById(payId).innerText = eachpayString;
                                            }
                                            if (checkboxes.checked === true) {
                                                var totpays = pays - (realPrice * (amounts - 1));
                                                var sendpays = sendpay;
                                                if ((totpays + eachpay) >= 30000) {
                                                    sendpays = 0;
                                                }
                                                else {
                                                    sendpays = 2500;
                                                }
                                                setPays(totpays + eachpay);
                                                setPaysString((totpays + eachpay).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                                                setSendPay(sendpays);
                                                setTotPay(totpays + eachpay + sendpays);
                                                var totpayStrings = (totpays + eachpay + sendpays).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                setTotPayString(totpayStrings);
                                                setSendPayString(sendpays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));

                                            }
                                        }

                                        const downAmount = (e) => {
                                            var amounts = document.getElementById(amountCntId).value;
                                            var checkboxes = document.getElementById(checkBoxid);

                                            if (post.amount > 1) {
                                                amounts = Number(amounts) - 1;
                                                eachpay = amounts * realPrice;
                                                post.amount = amounts;
                                                eachpayString = eachpay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                document.getElementById(amountCntId).value = post.amount;
                                                document.getElementById(payId).innerText = eachpayString;
                                                if (checkboxes.checked === true) {
                                                    var totpays = pays - (realPrice * (amounts + 1));
                                                    var sendpays = sendpay;
                                                    if ((totpays + eachpay) >= 30000) {
                                                        sendpays = 0;
                                                    }
                                                    else {
                                                        sendpays = 2500;
                                                    }
                                                    setPays(totpays + eachpay);
                                                    setPaysString((totpays + eachpay).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                                                    setSendPay(sendpays);
                                                    setTotPay(totpays + eachpay + sendpays);
                                                    var totpayStrings = (totpays + eachpay + sendpays).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                    setTotPayString(totpayStrings);
                                                    setSendPayString(sendpays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));

                                                }
                                            }

                                        }

                                        const handleChange = (e) => {
                                            if (e.target.checked) {
                                                var Pays = pays + eachpay;
                                                // console.log(totpay + " : " + eachpay);
                                                var sendpays = sendpay;
                                                if (Pays >= 30000) {
                                                    sendpays = 0;
                                                }
                                                else {
                                                    sendpays = 2500;
                                                }
                                                setPays(Pays);
                                                setPaysString(Pays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                                                setTotPay(Pays + sendpays);

                                                setSendPay(sendpays);
                                                var totpayStrings = (Pays + sendpays).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                setTotPayString(totpayStrings);
                                                setSendPayString(sendpays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                                            }
                                            else {
                                                var Pays = pays - eachpay;
                                                // console.log(totpay + " : " + eachpay);
                                                var sendpays = sendpay;
                                                if (Pays >= 30000) {
                                                    sendpays = 0;
                                                }
                                                else {
                                                    sendpays = 2500;
                                                }
                                                setPays(Pays);
                                                setPaysString(Pays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                                                setTotPay(Pays + sendpays);

                                                setSendPay(sendpays);
                                                var totpayStrings = (Pays + sendpays).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                                setTotPayString(totpayStrings);
                                                setSendPayString(sendpays.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                                            }


                                        }

                                        return (
                                            <tr className="se1" key={idx}>
                                                {/* idx, amount, member_id, menu_id, name, price  */}
                                                <td className="check">
                                                    <input type="checkbox" className="menu_id" value={post.menu_id} />
                                                    <input type="checkbox" className="moneycheck" value={realPrice} />
                                                    <input type="checkbox" className="amountcheck" value={post.amount} />
                                                    <input type="checkbox" className="session_check" onChange={handleChange} value={post.cartid} name={checkBoxid} id={checkBoxid} />
                                                    <label htmlFor={checkBoxid}></label>
                                                </td>
                                                <td className="pro_info">
                                                    <a>
                                                        <div>
                                                            <p id={pImgId} style={{ backgroundImage: `url(${post.img1})`, borderRadius: '5px' }}>
                                                                <img src="/img/product_bg.png" />
                                                            </p>
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
                                                    <span className="eachtotal" id={payId} >{eachpayString}</span>원
                                                    <input type="hidden" name="eachtotal[]" className="eachtotal_val" value={eachpay} />
                                                </td>
                                            </tr>

                                        )
                                    }
                                    )}

                            </tbody>
                        </table>
                    </div>
                    <div className="price_result clear">
                        <span>상품 구매금액
        <input type="hidden" name="myTotalPrice" value={pays} id="mytotalprice_val" />
                            <b id="totalprice"> {paysString}</b>

            원	+ 배송비
                                <b id="deliveryprice"> {sendpayString}</b>
                                원 <em className="mbr">= 총 합계 <b className="result">
                                <input type="hidden" name="delivery" value="0" />
                                <span id="resultVal">{totpayString}</span><span>원</span></b></em></span>
                    </div>

                    <div className="util_bt">
                        <a onClick={deleteCart}><img src="/img/pro_delete.png" />선택상품삭제</a>
                        <a onClick={goBack}><img src="/img/pro_back.png" />쇼핑 계속하기</a>
                    </div>

                    <div className="last_bt">
                        <a>선택 상품 주문</a>
                        <Link
                            to={{
                                pathname: `/order`,
                                state: {
                                    posts
                                }
                            }}
                        >
                            전체 상품 주문
                    </Link>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Cart;