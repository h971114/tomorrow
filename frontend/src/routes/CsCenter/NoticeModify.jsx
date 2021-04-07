import React, { useEffect, useState } from 'react';


import TopVisual from '../../components/CsCenter/TopVisual';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import axios from "axios";
import { instanceOf } from 'prop-types'
import { Cookies, useCookies } from 'react-cookie';


const NoticeWrite = (props, { history }) => {
    
    var editorRef = React.createRef();

    const goBack = () => {
        history.goBack();
    };

    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [writer, setWriter] = useState("")
    const [date, setDate] = useState("")
    const [file1, setFile1] = useState("")
    const [file2, setFile2] = useState("")
    const [file3, setFile3] = useState("")
    const [hit, setHit] = useState(0)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/myapp/notice/${props.match.params.id}`, {
            no: props.match.params.id,
        }).then(res => {
            // console.log(res.data)
            setTitle(res.data.title)
            setDetail(res.data.detail)
            setWriter(res.data.writer)
            setDate(res.data.date)
            setFile1(res.data.file1)
            setFile2(res.data.file2)
            setFile3(res.data.file3)
            setHit(res.data.hit)
        }).catch(err => {
            console.log(err)
        })

    }, []);

    const titleChange = e => {
        setTitle(e.target.value);
    };

    const detailChange = e => {
        setDetail(editorRef.current.getInstance().getHtml());
    };

    const file1Change = (e) => {
        console.log(e)

        var filename;
        if(window.FileReader){
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop()
        }

        document.getElementById('addFile1').value = filename;
        // setFile1('filename', filename)

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
            setFile1(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const file2Change = (e) => {
        // console.log(e)
        var filename;
        if(window.FileReader){
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop()
        }

        document.getElementById('addFile2').value = filename;

        var formData = new FormData();
        formData.append('data', filename);
        formData.append('hostid', writer.nickname);
        formData.append('dirNum', 0);
        axios.post('http://127.0.0.1:8080/myapp/gallery/upload', formData,{
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            console.log(res);
            setFile2(res.data);
        }).catch(err => {
            console.log(err);
        });
    }
    const file3Change = (e) => {
        // console.log(e)
        setFile3('file', e.target.files[0])

        var filename;
        if(window.FileReader){
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
        axios.post('http://127.0.0.1:8080/myapp/gallery/upload', formData,{
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            console.log(res);
            setFile3(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const modify = (e) => {
        // console.log(e)
        // e.preventDefault();
        // var file1Name = document.getElementById('addFile1').value
        // var file2Name = document.getElementById('addFile2').value
        // var file3Name = document.getElementById('addFile3').value

        if ({title} === "") {
            return (alert('제목이 작성되지 않았습니다.'));
        }
        else if ({detail} === "") {
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
        console.log(props.match.params.id)
        axios.put(`http://127.0.0.1:8080/myapp/notice/`, {
            no: `${props.match.params.id}`,
            title: {title}.title,
            detail: {detail}.detail,
            file1: {file1}.file1,
            file2: {file2}.file2,
            file3: {file3}.file3,
        }).then(res => {
            if (res.data === "SUCCESS") {
                console.log("글 수정 성공");
                alert("글 수정이 완료되었습니다.");
                window.location.replace(`/cscenter/notice`);
            }
            else {
                console.log("글 수정 실패");
                alert("글 수정에 실패하셨습니다. 다시 시도해 주세요!");
                // window.location.replace('/cscenter/notice/write');
            }
        }).catch(err => {
            console.log(err)
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
                                    <caption>수정하기</caption>
                                    <colgroup>
                                        <col width="20%" />
                                        <col width="*" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>제목</th>
                                            <td><input type="text" name="title" id="title" className="wid500" value={title} defaultValue={title} onChange={titleChange} />
                                            </td>
                                            
                                        </tr>
                                        <tr className="txtarea">
                                            <th>내용</th>
                                            {detail ? 
                                            <td>
                                                <Editor
                                                    placeholder="글쓰기"
                                                    previewStyle="vertical"
                                                    height="500px"
                                                    initialEditType="wysiwyg"
                                                    ref={editorRef}
                                                    value={detail}
                                                    initialValue={detail}
                                                    onChange={detailChange}
                                                />
                                            </td>
                                            : null
                                            }
                                        </tr>
                                        <tr className="line4">
                                            <th>첨부<br />파일 1</th>
                                            <td>
                                                <div className="fileBox">
                                                    <div className="inputBox">
                                                        <input type="text" id="addFile1" disabled="disabled" defaultValue={file1.substring(file1.lastIndexOf('/')+1, file1.lastIndexOf('.')).toLowerCase()+file1.substring(file1.lastIndexOf('.'), file1.length).toLowerCase()} readOnly />
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
                                                        <input type="text" id="addFile2" disabled="" readOnly defaultValue={file2.substring(file2.lastIndexOf('/')+1, file2.lastIndexOf('.')).toLowerCase()+file2.substring(file2.lastIndexOf('.'), file2.length).toLowerCase()}/>
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
                                                        <input type="text" id="addFile3" disabled="" readOnly defaultValue={file3.substring(file3.lastIndexOf('/')+1, file3.lastIndexOf('.')).toLowerCase()+file3.substring(file3.lastIndexOf('.'), file3.length).toLowerCase()}/>
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
                                        <a className="btn" onClick={modify}>작성</a>
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