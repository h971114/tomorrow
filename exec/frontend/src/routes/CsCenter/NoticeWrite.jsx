import React, { useEffect, useState } from 'react';


import TopVisual from '../../components/CsCenter/TopVisual';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import axios from "axios";
import { instanceOf } from 'prop-types'
import { Cookies, useCookies } from 'react-cookie';


const NoticeWrite = ({ history }) => {

    var editorRef = React.createRef();

    const goBack = () => {
        history.goBack();
    };

    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [writer, setWriter] = useCookies("")
    const [file1, setFile1] = useState("")
    const [file2, setFile2] = useState("")
    const [file3, setFile3] = useState("")

    useEffect(() => {
        if (sessionStorage.getItem('id') !== 'prestto1') {
            alert('잘못된 접근입니다!')
            history.goBack();
        }
        setWriter(sessionStorage.getItem('id'))
        // console.log(writer)
        // console.log(sessionStorage.getItem('id'))
    }, []);

    const titleChange = e => {
        setTitle(e.target.value);
    };

    const detailChange = e => {
        setDetail(editorRef.current.getInstance().getHtml());
    };

    const file1Change = (e) => {
        // console.log(e)

        var filename;
        if (window.FileReader) {
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop()
        }

        document.getElementById('addFile1').value = filename;
        // setFile1('filename', filename)

        var formData = new FormData();
        formData.append('data', e.target.files[0]);
        formData.append('hostid', sessionStorage.getItem('id'));
        formData.append('dirNum', 2);
        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/gallery/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            // console.log(res.data);
            setFile1(res.data);
        }).catch(err => {
            // console.log(err);
        });
    }

    const file2Change = (e) => {
        // // console.log(e)
        var filename;
        if (window.FileReader) {
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop()
        }

        document.getElementById('addFile2').value = filename;

        var formData = new FormData();
        formData.append('data', filename);
        formData.append('hostid', writer.nickname);
        formData.append('dirNum', 0);
        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/gallery/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            // console.log(res);
            setFile2(res.data);
        }).catch(err => {
            // console.log(err);
        });
    }
    const file3Change = (e) => {
        // // console.log(e)
        setFile3('file', e.target.files[0])

        var filename;
        if (window.FileReader) {
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop()
        }

        document.getElementById('addFile3').value = filename;
        setFile3('filename', filename)

        var formData = new FormData();
        formData.append('data', filename);
        formData.append('hostid', writer);
        formData.append('dirNum', 0);
        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/gallery/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            // console.log(res);
            setFile3(res.data);
        }).catch(err => {
            // console.log(err);
        });
    }

    const write = (e) => {
        // // console.log(e)
        // e.preventDefault();
        // var file1Name = document.getElementById('addFile1').value
        // var file2Name = document.getElementById('addFile2').value
        // var file3Name = document.getElementById('addFile3').value

        if ({ title } === "") {
            return (alert('제목이 작성되지 않았습니다.'));
        }
        else if ({ detail } === "") {
            return (alert('내용이 작성되지 않았습니다.'));
        }

        // if (file2Name !== "" && file1Name === "") {
        //     file1Name = file2Name;
        //     file2Name = file3Name;
        //     file3Name = "";
        // }
        // else if (file3Name !== "" && file1Name === "") {
        //     file1Name = file3Name;
        //     file3Name = "";
        // }
        // else if (file3Name !== "" && file2Name === "") {
        //     file2Name = file3Name;
        //     file3Name = "";
        // }


        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/notice/`, {
            title: { title }.title,
            detail: { detail }.detail,
            writer: sessionStorage.getItem('id'),
            file1: { file1 }.file1,
            file2: { file2 }.file2,
            file3: { file3 }.file3,
        }).then(res => {
            if (res.data === "SUCCESS") {
                // console.log("글 작성 성공");
                alert("글 작성이 완료되었습니다.");
                window.location.replace(`/cscenter/notice`);
            }
            else {
                // console.log("글 작성 실패");
                alert("글 작성에 실패하셨습니다. 다시 작성해 주세요!");
                window.location.replace('/cscenter/notice/write');
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
                                <li className="itemList3"><a href="/cscenter/notice/" className="on">공지사항<img src="/img/bbs_tab_arrow.png" /></a></li>
                                <li className="itemList3"><a href="/cscenter/faq/">FAQ<img src="/img/bbs_tab_arrow.png" /></a></li>
                                <li className="itemList3"><a href="/cscenter/qna/">Q&amp;A<img src="/img/bbs_tab_arrow.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">공지사항</h4>
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
                                            <th>첨부<br />파일 1</th>
                                            <td>
                                                <div className="fileBox">
                                                    <div className="inputBox">
                                                        <input type="text" id="addFile1" disabled="" readOnly />
                                                    </div>
                                                    <div className="fileBtn" id="up_file1">
                                                        <label className="fileBtn_label" id="up_file1">찾아보기<input type="file" accept="*" id="up_file1" name="filename" onChange={file1Change} /></label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="line4">
                                            <th>첨부<br />파일 2</th>
                                            <td>
                                                <div className="fileBox">
                                                    <div className="inputBox">
                                                        <input type="text" id="addFile2" disabled="" readOnly />
                                                    </div>
                                                    <div className="fileBtn">
                                                        <label className="fileBtn_label">찾아보기<input type="file" name="filename" onChange={file2Change} /></label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="line4">
                                            <th>첨부<br />파일 3</th>
                                            <td>
                                                <div className="fileBox">
                                                    <div className="inputBox">
                                                        <input type="text" id="addFile3" disabled="" readOnly />
                                                    </div>
                                                    <div className="fileBtn">
                                                        <label className="fileBtn_label">찾아보기<input type="file" name="filename" onChange={file3Change} /></label>
                                                    </div>
                                                </div>
                                                <p className="help">첨부파일은 5MB 이하의 파일만 가능합니다.</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="btnSet clear">
                                    <div>
                                        <a className="btn" onClick={write}>작성</a>
                                        <a onClick={goBack} className="btn">취소</a>
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
export default NoticeWrite;