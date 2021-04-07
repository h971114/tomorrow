import React, { useEffect, useState } from 'react';
import axios from "axios";

import TopVisual from '../../components/CsCenter/TopVisual';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const QnARewrite = ({ history }) => {
    console.log(history)
    var editorRef = React.createRef();

    const goBack = () => {
        history.goBack();
    };

    const [questionNo, setQuestionNo] = useState(history.location.state.no)
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [writer, setWriter] = useState("")
    const [file, setFile] = useState("")
    const [ansDetail, setAnsDetail] = useState("")
    const [ansFile, setAnsFile] = useState("")
    
    useEffect(() => {
        if (localStorage.getItem('id') !== 'prestto1') {
            alert('잘못된 접근입니다!')
            history.goBack();
        }
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/${history.location.state.no}`, {
            no: history.location.state.no,
        }).then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setDetail(res.data.detail)
            setWriter(res.data.writer)
            setFile(res.data.file1)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const ansDetailChange = e => {
        setAnsDetail(editorRef.current.getInstance().getHtml());
    };

    const ansFileChange = (e) => {
        console.log(e)

        var filename;
        if(window.FileReader){
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop()
        }

        document.getElementById('addFile').value = filename;

        var formData = new FormData();
        formData.append('data', e.target.files[0]);
        formData.append('hostid', localStorage.getItem('id'));
        formData.append('dirNum', 2);
        axios.post('http://127.0.0.1:8080/myapp/gallery/upload', formData,{
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            console.log(res.data);
            setAnsFile(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const write = (e) => {

        if ({title} === "") {
            return (alert('제목이 작성되지 않았습니다.'));
        }
        else if ({detail} === "") {
            return (alert('내용이 작성되지 않았습니다.'));
        }

        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/answer/`, {
            question_no: history.location.state.no,
            detail: {ansDetail}.ansDetail,
            writer: localStorage.getItem('id'),
            file: {file}.file,
        }).then(res => {
            if (res.data === "SUCCESS") {
                console.log("답변 작성 성공");
                alert("답변 작성이 완료되었습니다.");
                window.location.replace(`/cscenter/qna/${history.location.state.no}`);
            }
            else {
                console.log("답변 작성 실패");
                alert("답변 작성에 실패하셨습니다. 다시 작성해 주세요!");
                // window.location.replace('/cscenter/qna/write');
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
                                            <td><input type="text" name="title" id="title" className="wid500" readOnly defaultValue={title}/>
                                                <input type="checkbox" name="secret" value="1" id="secret"></input>
                                                <label for="secret">비밀글</label>
                                            </td>
                                        </tr>
                                        <tr className="question_area">
                                            <th>문의 내용</th>
                                            <td><p id="ownText" style={{ border: "1px solid #dadada"}} readOnly dangerouslySetInnerHTML={{ __html: detail }}/></td>
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
                                                    value={ansDetail}
                                                    onChange={ansDetailChange}
                                                />
                                            </td>
                                        </tr>

                                        <tr className="line4">
                                            <th>첨부<br />파일</th>
                                            <td>
                                                <div className="fileBox">
                                                    <div className="inputBox">
                                                        <input type="text" id="addFile" disabled="" value="" readOnly />
                                                    </div>
                                                    <div className="fileBtn">
                                                        <label className="fileBtn_label">찾아보기<input type="file" accept="*" name="filename" onChange={ansFileChange}/></label>
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
export default QnARewrite;