import React, { useEffect } from 'react';
import List from "./cartList"

export const Posts = ({ posts, loading, history }) => {

    const goBack = () => {
        history.goBack();
    };
    return (
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

                    {posts.map((post, idx) => (
                        <List
                            key={idx}
                            amount={post.amount}
                            member_id={post.member_id}
                            menu_id={post.menu_id}
                            name={post.name}
                            price={post.price}
                        />
                    ))}
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

    )
}

export default Posts;

{/* <tbody>


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
                */}