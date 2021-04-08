import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const MySellDetail = (props) => {
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
    const [statusString, setStS] = useState("");

    useEffect(() => {
        // console.log(props.location.state.post);
        setPosts(props.location.state.post);
        // console.log(props.location.state.post.addr);
        // var order_id = props.location.state.id;
        // var member_id = props.location.state.Uid;
        var addr = (props.location.state.post).addr.split(' / ');
        setdAddr0(addr[0]);
        setdAddr1(addr[1]);
        setdAddr2(addr[2]);

        if (posts.status === 1) {
            setStS("배송 준비 중");
        } else if (posts.status === 2) {
            setStS("배송 중");
        } else {
            setStS("배송 완료");
        }
    }, []);

    return (
        <div id="sub">
            <div className="size order_page check order_view">
                <form>
                    <div className="cs_tab">
                        <div className="sub">
                            <ul className="clear" id="sellerMenu">

                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/mypage`
                                        }}
                                    >
                                        판매자 정보
                                    <img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/sellpage/manage`
                                        }}
                                        className="on"
                                    >
                                        판매 관리
                                    <img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/sellpage/list`
                                        }}
                                    >
                                        판매 목록
                                    <img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">판매 관리</h4>

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
                                <tr>
                                    <td className="pro_info">
                                        <p style={{ marginLeft: `50px` }}>
                                            <img src={posts.img1} />
                                            {posts.menu_name}
                                        </p>
                                    </td>
                                    <td className="m_info">{statusString}
                                    </td>
                                </tr>
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
                                    <td className="delivery_n first">{posts.name}</td>
                                    <th className="first none"></th>
                                    <td className="first none"></td>
                                </tr>
                                <tr>
                                    <th>휴대폰번호</th>
                                    <td className="delivery_p">	{posts.mobile}</td>
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
                                    <td className="last" colSpan="3">{posts.etc}</td>
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
export default MySellDetail;
