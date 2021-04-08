import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const MyOrderDetail = (props) => {
    const [id, setId] = useState('');
    const [isSeller, setisSeller] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noPosts, setVPost] = useState(false);
    const [dName, setDName] = useState("");
    const [dMobile, setDmobile] = useState("");
    const [dAddr0, setdAddr0] = useState("");
    const [dAddr1, setdAddr1] = useState("");
    const [dAddr2, setdAddr2] = useState("");
    const [dEtc, setEtc] = useState("");

    useEffect(() => {
        var order_id = props.location.state.id;
        var member_id = props.location.state.Uid;

        const fetchPosts = async () => {
            setLoading(true);
            // console.log(Uid);
            axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/shipping/all2`, {
                params: {
                    member_id: member_id,
                    order_id: order_id
                }
            }).then(res => {
                var addr = res.data[0].addr.split(' / ');
                // console.log(addr);
                setDName(res.data[0].name);
                setDmobile(res.data[0].mobile);
                setdAddr0(addr[0]);
                setdAddr1(addr[1]);
                setdAddr2(addr[2]);
                setEtc(res.data[0].etc);
                // console.log(res.data[0].name);
                // console.log(res.data[0].mobile);
                // console.log(res.data[0].addr);
                // console.log(res.data[0].etc);


                // if (res.data.length < 1) {
                //     setVPost(true);
                // }
                setPosts(res.data);
                setLoading(false);
            }).catch(err => {

            })
        }
        fetchPosts();
    }, []);

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
                                <col width="30%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>상품정보</th>
                                    <th>배송상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map((post, idx) => {
                                        // console.log(post);
                                        var statusString = "";
                                        if (post.status === 1) {
                                            statusString = "배송 준비 중";
                                        } else if (post.status === 2) {
                                            statusString = "배송 중";
                                        } else {
                                            statusString = "배송 완료";
                                        }
                                        return (
                                            <tr key={idx}>
                                                <td className="pro_info">
                                                    <p style={{ marginLeft: `50px` }}>
                                                        <img src={post.img1} />
                                                        {post.menu_name}
                                                    </p>
                                                </td>
                                                <td className="m_info">{statusString}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className="order_info">
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
                                    <td className="delivery_n first">{dName}</td>
                                    <th className="first none"></th>
                                    <td className="first none"></td>
                                </tr>
                                <tr>
                                    <th>휴대폰번호</th>
                                    <td className="delivery_p">	{dMobile}</td>
                                    <th></th>
                                    <td className="order_num"></td>
                                </tr>

                                <tr>
                                    <th className="addr_th">주소</th>
                                    <td className="addr" colSpan="3">
                                        <span>({dAddr0})</span>
                                        {dAddr1} {dAddr2}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="last">남기실 말씀</th>
                                    <td className="last" colSpan="3">{dEtc}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="btnSet clear">
                        <div className="fl_l">
                            <Link to="/mypage/order">목록</Link>
                        </div>
                        <div className="fl_r">
                            <Link to="/mypage">확인</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MyOrderDetail;
