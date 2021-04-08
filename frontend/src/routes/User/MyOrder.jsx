import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const MyOrder = (props) => {
    const [id, setId] = useState('');
    const [isSeller, setisSeller] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noPosts, setVPost] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // componentDidMount() {
    //     var id = this.state.id;
    //     var isSeller = this.state.isSeller;
    //     axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/list`, {
    //         params: {
    //             member_id: this.state.id
    //         }
    //     }).then(res => {
    //         console.log(res.data);
    //         // // console.log(cartCnt);
    //     })
    // }

    useEffect(() => {
        // // console.log(props.Uid);
        if (props.Uid === "") {
            setId(sessionStorage.getItem('id'));
            setisSeller(sessionStorage.getItem('isSeller'));
        }
        else {
            setId(props.Uid);
            setisSeller(props.isseller);
        }
        const fetchPosts = async () => {
            setLoading(true);
            var Uid;
            if (props.Uid === "") {
                Uid = sessionStorage.getItem('id');
            } else {
                Uid = props.Uid;
            }
            // console.log(Uid);
            axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/list`, {
                params: {
                    member_id: Uid
                }
            }).then(res => {
                // console.log(res.data);
                if (res.data.length < 1) {
                    setVPost(true);
                }
                setPosts(res.data);
                // }
                setLoading(false);
            }).catch(err => {
                // console.log(err)
            })
        }
        fetchPosts();
    }, []);

    return (
        <div id="sub">
            <div className="inner_wrap order">
                <div className="size sub_page">
                    <div className="cs_tab">
                        <div className="sub">
                            <ul className="clear" id="userMenu">
                                <li className="itemList2">
                                    <Link
                                        to={{
                                            pathname: `/mypage`,
                                            state: {
                                                id: id,
                                                isSeller: isSeller
                                            }
                                        }}
                                        className="on"
                                    >
                                        개인정보
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                                <li className="itemList2">
                                    <Link
                                        to={{
                                            pathname: `/mypage/order`,
                                            state: {
                                                id: id,
                                                isSeller: isSeller
                                            }
                                        }}
                                    >
                                        주문내역
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order_wrap">
                        <h4 className="cs_title">주문내역</h4>
                        <table className="table_form">
                            <colgroup>
                                <col width="18%" />
                                <col width="15%" />
                                <col width="*" />
                                <col width="15%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>주문번호</th>
                                    <th>주문일자</th>
                                    <th>제품명</th>
                                    <th>금액(원)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noPosts === false &&
                                    posts.map((post, idx) => {
                                        // console.log(id);
                                        var Uid = id;
                                        var dateString = post.time.substr(0, 10);
                                        var namesArray = [];
                                        var namesArrayCnt = 1;
                                        if (post.menu_name !== null) {

                                            // console.log(post.menu_name);
                                            namesArray = post.menu_name.split(',');
                                            namesArrayCnt = namesArray.length - 1;
                                        }
                                        var namesString = namesArray[0];
                                        if (namesArrayCnt > 1) {
                                            namesString = namesArray[0] + "외 " + (namesArrayCnt - 1) + "건";
                                        }
                                        var priceString = post.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        return (
                                            <tr className="myorder_tr" key={idx}>
                                                <td>
                                                    <em>주문번호 : </em>{post.id}
                                                </td>
                                                <td>{dateString}</td>
                                                <td className="product_name">
                                                    <Link to={{
                                                        pathname: `/mypage/order/detail/${post.id}`,
                                                        state: {
                                                            id: post.id,
                                                            Uid: Uid
                                                        }
                                                    }}>
                                                        {namesString}
                                                    </Link>
                                                </td>
                                                <td className="price"><em>금액 : </em>{priceString}원</td>
                                            </tr>
                                        )
                                    })
                                }


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
export default MyOrder;