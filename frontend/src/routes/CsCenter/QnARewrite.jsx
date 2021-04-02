import React, { useEffect } from 'react';


import TopVisual from '../../components/CsCenter/TopVisual';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const QnARewrite = ({ history }) => {

    var editorRef = React.createRef();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div id="sub" className="qna qna_write">
            <TopVisual></TopVisual>
            <div className="size faq cs">
                <div className="faq_wrap bbs">
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
                    <div className="contents qna_write">
                        <form name="frm" id="frm">
                            <div className="bbs">
                                <table className="write">
                                    <caption>글쓰기</caption>
                                    <colgroup>
                                        <col width="20%" />
                                        <col width="*" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>제목</th>
                                            <td><input type="text" name="title" id="title" className="wid500" />
                                                <input type="checkbox" name="secret" value="1" id="secret"></input>
                                                <label for="secret">비밀글</label>
                                            </td>
                                        </tr>
                                        <tr className="question_area">
                                            <th>문의 내용</th>
                                            <td><input type="text" id="ownText" readOnly value="기존 글 내용" /></td>
                                        </tr>
                                        <tr className="txtarea">
                                            <th>답변 내용</th>
                                            <td>
                                                <Editor
                                                    placeholder="글쓰기"
                                                    previewStyle="vertical"
                                                    height="500px"
                                                    initialEditType="wysiwyg"
                                                    ref={editorRef}
                                                />
                                            </td>
                                        </tr>

                                        <tr className="line4">
                                            <th>첨부<br />파일</th>
                                            <td>
                                                <div className="fileBox">
                                                    <div className="inputBox">
                                                        <input type="text" id="addFile" disabled="" value="" />
                                                    </div>
                                                    <div className="fileBtn">
                                                        <label className="fileBtn_label">찾아보기<input type="file" name="filename" /></label>
                                                    </div>
                                                </div>
                                                <p className="help">첨부파일은 5MB 이하의 파일만 가능합니다.</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="btnSet clear">
                                    <div>
                                        <a className="btn">저장</a>
                                        <a onclick={goBack} className="btn">취소</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QnARewrite;