import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function List({ idx, amount, member_id, menu_id, name, price }) {
    var pay = amount * price;
    var payString = pay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    var checkBoxid = "pro" + (idx + 1);
    var pImgId = "pro" + (idx + 1) + "_img";
    var amountCntId = "amountCnt" + (idx + 1);
    var priceString = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    var payId = "eachtotal" + (idx + 1);


    // useEffect(() => {
    //     const res = axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/gm/` + menu_id);
    //     console.log(res);
    // });

    const upAmount = (e) => {
        var amounts = document.getElementById(amountCntId).value;
        if (amount < 9) {
            amounts = Number(amounts) + 1;
            pay = amounts * price;
            amount = amounts;
            payString = pay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById(amountCntId).value = amount;
            document.getElementById(payId).innerText = payString;
        }
    }

    const downAmount = (e) => {
        var amounts = document.getElementById(amountCntId).value;
        if (amount > 1) {
            amounts = Number(amounts) - 1;
            pay = amounts * price;
            amount = amounts;
            payString = pay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById(amountCntId).value = amount;
            document.getElementById(payId).innerText = payString;
        }
    }

    return (
        <tbody>
            <tr className="se1">
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
                            <span>{name}</span>
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
                        <a className="amount_down" onClick={downAmount} ></a>
                        <input type="text" className="amount txt amount_val" id={amountCntId} value={amount} readOnly />
                        <a className="amount_up" onClick={upAmount}></a>
                    </div>
                </td>
                <td className="total">
                    <em className="m_block">합계 : </em>
                    <span className="eachtotal" id={payId} >{payString}</span>원
    <input type="hidden" name="eachtotal[]" className="eachtotal_val" value="31900" />
                </td>
            </tr>

        </tbody>

    )
}

export default List;