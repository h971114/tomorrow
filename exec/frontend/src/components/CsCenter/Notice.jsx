import React from 'react'
import { Link } from "react-router-dom"
import propTypes from "prop-types";
import "../../routes/css/CsCenter.css";

function List({ no, title, detail, writer, file1, file2, file3, date, hit }) {
    return (
        // <div>
        // <tbody style={{ width: "100%" }}>
        <tr key={no}>

            <td>{no}</td>
            <td className="txt">
                <Link to={{
                    pathname: `/cscenter/notice/${no}`,
                    state: {
                        no,
                        //     title: title,
                        //     detail: detail,
                        //     writer: writer,
                        //     file1: file1,
                        //     file2: file2,
                        //     file3: file3,
                        //     date: date,
                        //     hit: hit,
                    }
                }}>
                    {title}
                </Link></td>
            <td className="writer">{writer}</td>
            <td className="date">{date}</td>
            <td className="view">{hit}</td>
        </tr>
        // </tbody >
        // </div>
    )
}

List.propTypes = {
    no: propTypes.number.isRequired,
    title: propTypes.string,
    detail: propTypes.string,
    writer: propTypes.string,
    file1: propTypes.string,
    file2: propTypes.string,
    file3: propTypes.string,
    date: propTypes.string,
    hit: propTypes.number,
}

export const Notice = ({ posts, loading }) => {
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
                                <th>??????</th>
                                <th>??????</th>
                                <th>?????????</th>
                                <th>?????????</th>
                                <th>?????????</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr> */}
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
                            {/* </tr>
                        <tr>
                            <td>id</td>
                            <td className="txt">???????????? ??????</td>
                            <td className="writer">?????????</td>
                            <td className="date">2021-03-31</td>
                            <td className="view">109</td>
                        </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Notice;