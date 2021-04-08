import React, { useEffect, useState } from 'react';


import TopVisual from '../../components/CsCenter/TopVisual';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import axios from "axios";
import { instanceOf } from 'prop-types'
import { Cookies } from 'react-cookie';


const QnAWrite = ({ history }) => {

    var editorRef = React.createRef();

    const goBack = () => {
        history.goBack();
    };

    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [writer, setWriter] = useState("")
    const [file, setFile] = useState("")

    useEffect(() => {
        setWriter(localStorage.getItem('id'))
    }, []);

    const titleChange = e => {
        setTitle(e.target.value);
    };

    const detailChange = e => {
        setDetail(editorRef.current.getInstance().getHtml());
    };

    const fileChange = (e) => {
        console.log(e)

        var filename;
        if (window.FileReader) {
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop()
        }

        document.getElementById('addFile').value = filename;
        // setFile1('filename', filename)

        var formData = new FormData();
        formData.append('data', e.target.files[0]);
        formData.append('hostid', localStorage.getItem('id'));
        formData.append('dirNum', 2);
        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/gallery/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            console.log(res.data);
            setFile(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const write = (e) => {
        if ({ title } === "") {
            return (alert('제목이 작성되지 않았습니다.'));
        }
        else if ({ detail } === "") {
            return (alert('내용이 작성되지 않았습니다.'));
        }

        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/question/`, {
            title: { title }.title,
            detail: { detail }.detail,
            writer: localStorage.getItem('id'),
            // file: {file}.file,
        }).then(res => {
            if (res.data === "SUCCESS") {
                console.log("글 작성 성공");
                alert("글 작성이 완료되었습니다.");
                window.location.replace(`/cscenter/qna`);
            }
            else {
                console.log("글 작성 실패");
                alert("글 작성에 실패하셨습니다. 다시 작성해 주세요!");
                window.location.replace('/cscenter/qna/write');
            }
        })
    }

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
                                            <td><input type="text" name="title" id="title" className="wid500" value={title} onChange={titleChange} />
                                                <input type="checkbox" name="secret" value="1" id="secret"></input>
                                                <label for="secret">비밀글</label>
                                            </td>
                                        </tr>
                                        <tr className="txtarea">
                                            <th>내용</th>
                                            <td>
                                                <Editor
                                                    placeholder="글쓰기"
                                                    previewStyle="vertical"
                                                    height="500px"
                                                    initialEditType="wysiwyg"
                                                    ref={editorRef}
                                                    value={detail}
                                                    onChange={detailChange}
                                                />
                                            </td>
                                        </tr>

                                        <tr className="line4">
                                            <th>첨부<br />파일</th>
                                            <td>
                                                <div className="fileBox">
                                                    <div className="inputBox">
                                                        <input type="text" id="addFile" disabled="disabled" readOnly />
                                                    </div>
                                                    <div className="fileBtn">
                                                        <label className="fileBtn_label">찾아보기<input type="file" accept="*" id="up_file" name="filename" onChange={fileChange} /></label>
                                                    </div>
                                                </div>
                                                <p className="help">첨부파일은 5MB 이하의 파일만 가능합니다.</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="btnSet clear">
                                    <div>
                                        <a className="btn" onClick={write}>저장</a>
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
export default QnAWrite;