import React from 'react'
import { Link } from "react-router-dom"
import propTypes from "prop-types";
import "../../routes/css/CsCenter.css";

function List({ no, title, detail, writer, file1, file2, file3, date, hit }) {
    return (
        <tr>
            <td>{no}</td>
            <td className="txt">
                <Link to={{
                    pathname: `/cscenter/qna/${no}`,
                    state: {
                        no
                    }
                }}>{title}
                </Link></td>
            <td className="writer">{writer}</td>
            <td className="date">{date}</td>
            <td className="view">{hit}</td>
        </tr>
    )
}

List.propTypes = {
    no: propTypes.number.isRequired,
    title: propTypes.string,
    detail: propTypes.string,
    writer: propTypes.string,
    file1: propTypes.string,
    file2: propTypes.string,
    date: propTypes.string,
}

export const QnA = ({ posts, loading }) => {
    if (loading) {
        return (
            <div className="loading_view">
                <div className="loader loader-7">
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                    <span className="loader_text">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div id="sub">
            <div className="size notice">
                <div className="notice_wrap">
                    <table className="table_form">
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
                            {posts.map(post => (
                                <List
                                    key={post.no}
                                    no={post.no}
                                    title={post.title}
                                    detail={post.detail}
                                    writer={post.writer}
                                    file1={post.file1}
                                    file2={post.file2}
                                    file3={post.file3}
                                    date={post.date}
                                    hit={post.hit}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default QnA;