import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/CsCenter.css';
import { Link } from "react-router-dom";


import TopVisual from '../../components/CsCenter/TopVisual';
import { QnA as ComponentQnA } from '../../components/CsCenter/QnA';
import Pagination from '../../components/common/Pagination';

class QnA extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            id: props.Uid,
            isSeller: props.isseller,
            posts: [],
            loading: false,
            noPosts: false,
            currentPage: 1,
            postsPerPage: 10
        }
    }

    componentDidMount() {
        const fetchPosts = async () => {
            // setLoading(true);
            this.setState({
                loading: true
            })
            if (this.state.id !== 'prestto1') {
                axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/list/` + this.state.id, {

                }).then(res => {
                    // console.log(res)
                    if (res.data.conclusion === "FAIL") {
                        this.setState({
                            noPosts: true
                        })
                        // setVPost(true);
                        // setPosts([nullpost]);
                    }
                    else {
                        // console.log(res);
                        this.setState({
                            posts: res.data.list
                        })
                        // setPosts(res.data.list);
                    }
                    this.setState({
                        loading: false
                    })
                    // setLoading(false);
                }).catch(err => {
                    console.log(err)
                })
            } else {
                axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/`, {
                }).then(res => {
                    // console.log(res.data.list);
                    this.setState({
                        posts: res.data.list,
                        loading: false
                    })
                    // setPosts(res.data);
                    // setLoading(false);
                }).catch(err => {
                    console.log(err)
                })
            }
        }
        fetchPosts();
    }

    render() {
        const {
            currentPage,
            postsPerPage,
            posts,
            setCurrentPage,
            loading
        } = this.state
        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        console.log(posts);
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

        //change page
        const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
        }
        return (
            <div id="sub">
                <TopVisual />
                <div className="size qna cs">
                    <div className="notice_wrap">
                        <div className="cs_tab">
                            <div className="sub" >
                                <ul className="clear">
                                    <li className="itemList3">
                                        <Link
                                            to={{
                                                pathname: `/cscenter/notice/`
                                            }}
                                        >
                                            공지사항<img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList3">
                                        <Link
                                            to={{
                                                pathname: `/cscenter/faq/`
                                            }}
                                        >
                                            FAQ<img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList3">
                                        <Link
                                            to={{
                                                pathname: `/cscenter/qna/`
                                            }}
                                            className="on"
                                        >
                                            Q&amp;A<img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="cs_title">Q&A</h4>
                        <div className="contents">
                            <div className="bbs qna">

                                <ComponentQnA posts={currentPosts} loading={loading}>
                                </ComponentQnA>
                                <div className="btnSet clear">
                                    <div className="fl_r"><a href="/cscenter/qna/write">글쓰기</a></div>
                                </div>
                            </div>

                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={posts.length}
                                paginate={paginate}
                                currentPage={currentPage}
                                loading={loading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default QnA;