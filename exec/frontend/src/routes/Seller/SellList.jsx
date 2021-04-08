import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Posts from '../../components/SellList/sellPosts';

const SellList = (props) => {
    const [id, setId] = useState('');
    const [isSeller, setisSeller] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noPosts, setVPost] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

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
            axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/seller/`, {
                params: {
                    seller_id: Uid
                }
            }).then(res => {
                // console.log(res);
                // if (res.data.conclusion === "FAIL") {
                //     setVPost(true);
                //     // setPosts([nullpost]);
                // }
                // else {
                setPosts(res.data);
                // }
                setLoading(false);
            }).catch(err => {
                // console.log(err)
            })
        }
        fetchPosts();
        console.log(id);
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div id="sub" className="sellManage" >
            <div className="inner_wrap mypage">
                <div className="size sub_page">
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
                                        className="on"
                                    >
                                        판매 목록
                                    <img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">판매 목록</h4>
                    <div className="sell_list">
                        <Posts posts={currentPosts} loading={loading} uid={id} />
                    </div>
                    <form name="board" id="board">
                        <div className="member bbs">
                            <div className="color_btnSet clear">
                                <div className="clear">
                                    <Link to="/sellregist" className="btn fl_r" >상품 등록</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SellList;