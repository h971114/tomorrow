import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/CsCenter.css';
import { Link } from "react-router-dom";

import TopVisual from '../../components/CsCenter/TopVisual';
import { Notice as ComponentNotice } from '../../components/CsCenter/Notice';
import Pagination from '../../components/common/Pagination';

const Notice = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noPosts, setVPost] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const { location } = props;

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/notice/list`);
            // //console.log(res);

            if (res.data.conclusion === "FAIL") {
                setVPost(true);
                // setPosts([nullpost]);
            }
            else {
                setPosts(res.data);
            }
            setLoading(false);
        }


        // if (document.getElementById('side_wrap').classList.contains('open')) {
        //     document.getElementById('side_wrap').classList.remove('open');
        //     document.getElementById('side_wrap').classList.add('close');
        //     document.getElementById('side_wrap').setAttribute('style', 'right:-400px');
        //     document.getElementById('bg').setAttribute('style', 'display:none');
        // }
        // if (sessionStorage.getItem("id") === location.state.hostid) {
        //     document.getElementById('writeBtn').setAttribute("style", "display:inline-block");
        // }
        // else {
        //     document.getElementById('writeBtn').setAttribute("style", "display:none");
        // }

        fetchPosts();

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
        <div id="sub">
            <TopVisual></TopVisual>
            <div className="size notice">
                <div className="notice_wrap">
                    <div className="cs_tab">
                        <div className="sub" >
                            <ul className="clear">
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/cscenter/notice/`
                                        }}
                                        className="on"
                                    >
                                        공지사항<img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/cscenter/faq/`
                                        }}
                                    >
                                        FAQ<img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/cscenter/qna/`
                                        }}
                                    >
                                        Q&amp;A<img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">공지사항</h4>
                    {/* <table className="table_form">
                        <colgroup>
                            <col width="10%" />
                            <col width="*" />
                            <col width="10%" />
                            <col width="13%" />
                            <col width="10%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody> */}
                    <ComponentNotice posts={currentPosts} loading={loading}>
                    </ComponentNotice>
                    {/* <tr>
                                <td>id</td>
                                <td className="txt">공지사항 제목</td>
                                <td className="writer">관리자</td>
                                <td className="date">2021-03-31</td>
                                <td className="view">109</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>

                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    loading={loading}
                />
            </div>
        </div>
    )
}
export default Notice;