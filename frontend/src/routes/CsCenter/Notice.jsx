import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/CsCenter.css';

import TopVisual from '../../components/CsCenter/TopVisual';
import { Notice as ComponentNotice }from '../../components/CsCenter/Notice';

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
            console.log(res);
            
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
                    <div class="cs_tab">
                        <div class="sub" >
                            <ul class="clear">
                                <li class="itemList3"><a href="/cscenter/notice/" class="on">공지사항<img src="/img/bbs_tab_arrow.png" /></a></li>
                                <li class="itemList3"><a href="/cscenter/faq/">FAQ<img src="/img/bbs_tab_arrow.png" /></a></li>
                                <li class="itemList3"><a href="/cscenter/qna/">Q&amp;A<img src="/img/bbs_tab_arrow.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">공지사항</h4>
                    {/* <table class="table_form">
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
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
                <div className="pagenate clear">
                    <ul className="paging">
                        <li>
                            <a className="current">1</a>
                        </li>
                        <li>
                            <a>2</a>
                        </li>
                        <li>
                            <a>3</a>
                        </li>
                    </ul>
                </div>
                <div className="bbsSearch">
                    <form name="searchForm" id="searchForm">
                        <span class="srchSelect">
                            <select id="stype" name="stype" class="dSelect valid" title="검색분류 선택">
                                <option value="all">제목+내용</option>
                                <option value="title">제목</option>
                                <option value="contents">내용</option>
                            </select>
                        </span>
                        <span class="searchWord">
                            <input type="text" id="sval" name="sval" title="검색어 입력" />
                            <input type="button" value="검색" title="검색" />
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Notice;