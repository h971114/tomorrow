import React, { useEffect } from 'react';


import TopVisual from '../../components/CsCenter/TopVisual';


const QnADetail = () => {

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
                    <div class="contents">
                        <div class="bbs view">
                            <div class="view">
                                <div class="title">
                                    <dl>
                                        <dt>문의 제목</dt>
                                        <dd class="name">작성자</dd>
                                        <dd class="date">2021-03-31</dd>
                                    </dl>
                                </div>
                                <div class="cont">
                                    <p>안녕?</p>
                                </div>

                                <div class="title">
                                    <dl>
                                        <dt>답변 제목</dt>
                                        <dd class="name">관리자</dd>
                                        <dd class="date">2021-03-31</dd>
                                    </dl>
                                </div>
                                <div class="cont">
                                    <p>안녕하지 못해...</p>
                                </div>

                                <div class="btnSet clear">
                                    <div class="fl_l"><a class="btn">목록으로</a></div>
                                    <div class="fl_r">
                                        <a class="btn">수정</a>
                                        <a class="btn">삭제</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QnADetail;