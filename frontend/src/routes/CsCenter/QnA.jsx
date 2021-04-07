import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/CsCenter.css';


import TopVisual from '../../components/CsCenter/TopVisual';
import { QnA as ComponentQnA }from '../../components/CsCenter/QnA';


const QnA = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noPosts, setVPost] = useState(false);
    // const nullpost = [{
    //     date: "2021-01-01 00:00:00",
    //     no: 0,
    //     rownum: 1,
    //     title: "test",
    //     detail: "<p>test</p>↵",
    //     writer: "test",
    //     file1: null,
    // }];
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            if (localStorage.getItem('id') !== 'prestto1') {
                axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/list/${localStorage.getItem('id')}`, {

                }).then(res => {
                    console.log(res)
                    if (res.data.conclusion === "FAIL") {
                        setVPost(true);
                        // setPosts([nullpost]);
                    }
                    else {
                        setPosts(res.data.list);
                    }
                    setLoading(false);
                }).catch(err => {
                    console.log(err)
                })
            } else {
                axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/`, {

                }).then(res => {
                    console.log(res.data);
                    setPosts(res.data);
                    setLoading(false);
                }).catch(err => {
                    console.log(err)
                })
            }
        }
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
            <TopVisual />
            <div className="size qna cs">
                <div className="notice_wrap">
                    <div className="cs_tab">
                        <div className="sub" >
                            <ul className="clear">
                                <li className="itemList3"><a href="/cscenter/notice/">공지사항<img src="/img/bbs_tab_arrow.png" /></a></li>
                                <li className="itemList3"><a href="/cscenter/faq/">FAQ<img src="/img/bbs_tab_arrow.png" /></a></li>
                                <li className="itemList3"><a href="/cscenter/qna/" className="on">Q&amp;A<img src="/img/bbs_tab_arrow.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">Q&A</h4>
                    <div className="contents">
                        <div className="bbs qna">
                            {/* <table className="table_form">
                                <colgroup>
                                    <col width="10%" />
                                    <col width="*" />
                                    <col width="10%" />
                                    <col width="10%" />
                                    <col width="10%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>답변</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>번호값</td>
                                        <td className="txt">
                                            <div>
                                                제목
                                                <img src="/img/qna_lock.png" alt="비밀글" />
                                            </div>
                                        </td>
                                        <td className="writer">김덕*님</td>
                                        <td className="date">2021-03-31</td>
                                        <td className="view">대기 중</td>
                                    </tr>
                                </tbody>
                            </table> */}
                            <ComponentQnA posts={currentPosts} loading={loading}>
                            </ComponentQnA>
                            <div className="btnSet clear">
                                <div className="fl_r"><a href="/cscenter/qna/write">글쓰기</a></div>
                            </div>
                            <div className="pagenate clear table">
                                <ul className="paging">
                                    <li><a className="current">1</a></li>
                                    <li><a>2</a></li>
                                    <li><a>3</a></li>
                                    <li><a>4</a></li>
                                    <li><a>5</a></li>
                                    <li><a>6</a></li>
                                    <li><a>7</a></li>
                                    <li><a>8</a></li>
                                    <li><a>9</a></li>
                                    <li><a>10</a></li>
                                    <li><a className="board next">next</a></li>
                                    <li><a className="board last">last</a></li>
                                </ul>
                            </div>
                            <div className="bbsSearch">
                                <form name="searchForm" id="searchForm">
                                    <span className="srchSelect">
                                        <select id="stype" name="stype" className="dSelect" title="검색분류 선택">
                                            <option value="all">제목+내용</option>
                                            <option value="title">제목</option>
                                            <option value="contents">내용</option>
                                        </select>
                                    </span>
                                    <span className="searchWord">
                                        <input type="text" id="sval" name="sval" title="검색어 입력" />
                                        <input type="button" value="검색" title="검색" />
                                    </span>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QnA;