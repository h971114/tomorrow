import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

import TopVisual from '../../components/CsCenter/TopVisual';


const QnADetail = (props) => {
    // //console.log(props)
    const [no, setNo] = useState(props.match.params.id)
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [ansTitle, setAnsTitle] = useState("")
    const [ansDetail, setAnsDetail] = useState("")
    const [writer, setWriter] = useState("")
    const [ansWriter, setAnsWriter] = useState("")
    const [date, setDate] = useState("")
    const [ansDate, setAnsDate] = useState("")
    const [file1, setFile1] = useState("")
    const [file2, setFile2] = useState("")
    const [file3, setFile3] = useState("")
    const [hit, setHit] = useState(0)
    const [hasAnswer, setHasAnswer] = useState(0)

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/${props.match.params.id}`, {
            no: props.match.params.id,
        }).then(res => {
            // //console.log(res.data)
            if (sessionStorage.getItem('id') !== 'prestto1' && sessionStorage.getItem('id') !== res.data.writer) {
                alert('잘못된 접근입니다!')
                window.location.replace('/cscenter/qna');
            }
            setTitle(res.data.title)
            setDetail(res.data.detail)
            setWriter(res.data.writer)
            setDate(res.data.date)
            setFile1(res.data.file1)
            setHit(res.data.hit)
            return axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/answer/${props.match.params.id}`, {
                question_no: props.match.params.id,
            }).then(res => {
                // //console.log(res)

                if (res.data.conclusion === "FAIL") {
                    setHasAnswer(0)
                } else {
                    setHasAnswer(1)
                    setAnsDetail(res.data.answer.detail)
                }
            }).catch(err => {
                // //console.log(err)
            })
        }).catch(err => {
            // //console.log(err)
        })
    }, [])

    const deleteQnA = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/question/${no}`, {
            no: no,
        }).then(res => {
            // // //console.log(res)
            alert('삭제 완료되었습니다!');
            window.location.replace('/question');
        }).catch(err => {
            // //console.log(err)
        })
    }

    const callFileDownload = () => {
        var _fileLen = file1.length;
        var _lastDot = file1.lastIndexOf('.');
        var _fileExt = file1.substring(_lastDot, _fileLen).toLowerCase();
        var _lastSlash = file1.lastIndexOf('/');
        var _fileName = file1.substring(_lastSlash + 1, _lastDot).toLowerCase();
        var FileSaver = require('file-saver');
        FileSaver.saveAs(file1, _fileName + _fileExt);
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
                                {hasAnswer === 1 ?
                                    <div>
                                        <div className="title">
                                            <dl>
                                                <dt>Re: {title}</dt>
                                                <dd className="name">관리자</dd>
                                                {/* <dd className="date">2021-03-31</dd> */}
                                            </dl>
                                        </div>
                                        <div className="cont">
                                            {ansDetail ? <p dangerouslySetInnerHTML={{ __html: ansDetail }}></p> : null}
                                        </div>
                                    </div>
                                    : null}

                                <div className="btnSet clear">
                                    <div className="fl_l"><Link to={`/cscenter/qna/`}><a className="btn">목록으로</a></Link></div>
                                    <div className="fl_r">
                                        {sessionStorage.getItem('id') === 'prestto1' ?
                                            <Link to={{ pathname: `/cscenter/qna/${no}/rewrite`, state: { no } }}><a className="btn">답변 작성</a></Link>
                                            : null}
                                        {sessionStorage.getItem('id') === writer ?
                                            <a className="btn" onClick={deleteQnA}>삭제</a>
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
export default QnADetail;