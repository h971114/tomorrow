import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import TopVisual from '../../components/CsCenter/TopVisual';


const NoticeDetail = (props) => {
    const [no, setNo] = useState(props.match.params.id)
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [writer, setWriter] = useState("")
    const [date, setDate] = useState("")
    const [file1, setFile1] = useState("")
    const [file2, setFile2] = useState("")
    const [file3, setFile3] = useState("")
    const [hit, setHit] = useState(0)

    useEffect(() => {
        // if (props.match.params.id !== 'prestto1') {
        //     document.getElementById('goModify').setAttribute('style', 'display:none');
        //     document.getElementById('goDelete').setAttribute('style', 'display:none');
        // }
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/notice/${props.match.params.id}`, {
            no: props.match.params.id,
        }).then(res => {
            // // //console.log(res.data)
            setTitle(res.data.title)
            setDetail(res.data.detail)
            setWriter(res.data.writer)
            setDate(res.data.date)
            setFile1(res.data.file1)
            setFile2(res.data.file2)
            setFile3(res.data.file3)
            setHit(res.data.hit)
        }).catch(err => {
            // //console.log(err)
        })
    }, [])

    const deleteNotice = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/notice/${no}`, {
            no: no,
        }).then(res => {
            // // //console.log(res)
            alert('삭제 완료되었습니다!');
            window.location.replace('/cscenter/notice');
        }).catch(err => {
            // //console.log(err)
        })
    }

    const callFile1Download = () => {
        var _fileLen = file1.length;
        var _lastDot = file1.lastIndexOf('.');
        var _fileExt = file1.substring(_lastDot, _fileLen).toLowerCase();
        var _lastSlash = file1.lastIndexOf('/');
        var _fileName = file1.substring(_lastSlash + 1, _lastDot).toLowerCase();
        var FileSaver = require('file-saver');
        FileSaver.saveAs(file1, _fileName + _fileExt);
    }

    const callFile2Download = () => {
        var _fileLen = file2.length;
        var _lastDot = file2.lastIndexOf('.');
        var _fileExt = file2.substring(_lastDot, _fileLen).toLowerCase();
        var _lastSlash = file2.lastIndexOf('/');
        var _fileName = file2.substring(_lastSlash + 1, _lastDot).toLowerCase();

        var FileSaver = require('file-saver');
        FileSaver.saveAs(file2, _fileName + _fileExt);
    }

    const callFile3Download = () => {
        var _fileLen = file3.length;
        var _lastDot = file3.lastIndexOf('.');
        var _fileExt = file3.substring(_lastDot, _fileLen).toLowerCase();
        var _lastSlash = file3.lastIndexOf('/');
        var _fileName = file3.substring(_lastSlash + 1, _lastDot).toLowerCase();

        var FileSaver = require('file-saver');
        FileSaver.saveAs(file3, _fileName + _fileExt);
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
                    <h4 className="cs_title">공지사항</h4>
                    <div className="contents">
                        <div className="bbs view">
                            <div className="view">
                                <div className="title">
                                    <dl>
                                        <dt>{title}</dt>
                                        <dd className="name">{writer}</dd>
                                        <dd className="date">{date}</dd>
                                    </dl>
                                </div>
                                <div className="cont">
                                    {detail ? <p dangerouslySetInnerHTML={{ __html: detail }}></p> : null}
                                </div>

                                <div className="title">
                                    <dl>
                                        <dt>첨부파일</dt>
                                        {file1 ? <dd className="name" onClick={callFile1Download} style={{ cursor: 'pointer' }}>{file1.substring(file1.lastIndexOf('/') + 1, file1.lastIndexOf('.')).toLowerCase() + file1.substring(file1.lastIndexOf('.'), file1.length).toLowerCase()}</dd> : <p>첨부파일이 없습니다.</p>}
                                        {file2 ? <dd className="name" onClick={callFile2Download} style={{ cursor: 'pointer' }}>{file2.substring(file2.lastIndexOf('/') + 1, file2.lastIndexOf('.')).toLowerCase() + file2.substring(file2.lastIndexOf('.'), file2.length).toLowerCase()}</dd> : null}
                                        {file3 ? <dd className="name" onClick={callFile3Download} style={{ cursor: 'pointer' }}>{file3.substring(file3.lastIndexOf('/') + 1, file3.lastIndexOf('.')).toLowerCase() + file3.substring(file3.lastIndexOf('.'), file3.length).toLowerCase()}</dd> : null}
                                    </dl>
                                </div>
                                <div className="btnSet clear">
                                    <div className="fl_l">
                                        <Link to="/cscenter/notice" className="btn">
                                            목록으로</Link></div>
                                    <div className="fl_r">
                                        {sessionStorage.getItem('id') === 'prestto1' ?
                                            <div>
                                                <Link to={`/cscenter/notice/${no}/modify`} id="goModify" className="btn">
                                                    수정</Link>
                                                <a id="goDelete" className="btn" onClick={deleteNotice}>삭제</a>
                                            </div>
                                            : null}
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
export default NoticeDetail;