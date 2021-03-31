import React, { useEffect } from 'react';

import '../css/CsCenter.css';

import TopVisual from '../../components/CsCenter/TopVisual';

const Notice = () => {

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
                    <table class="table_form">
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
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td class="txt">공지사항 제목</td>
                                <td class="writer">관리자</td>
                                <td class="date">2021-03-31</td>
                                <td class="view">109</td>
                            </tr>
                        </tbody>
                    </table>
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