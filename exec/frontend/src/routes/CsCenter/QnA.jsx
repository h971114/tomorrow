import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/CsCenter.css';
import { Link } from "react-router-dom";


import TopVisual from '../../components/CsCenter/TopVisual';
import { QnA as ComponentQnA } from '../../components/CsCenter/QnA';
import Pagination from '../../components/common/Pagination';

const QnA = (props) => {
    const [id, setId] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noPosts, setVPost] = useState(false);
    // const nullpost = [{
    //     date: "2021-01-01 00:00:00",
    //     no: 0,
    //     rownum: 1,
    //     title: "test",
    //     detail: "<p>test</p>↵",
    //     writer: "test",
    //     file1: null,
    // }];
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        // // console.log(props.Uid);
        if (props.Uid === "") {
            setId(sessionStorage.getItem('id'));
        }
        else {
            setId(props.Uid);
        }
        const fetchPosts = async () => {
            setLoading(true);
            var Uid;
            if (props.Uid === "") {
                Uid = sessionStorage.getItem('id');
            } else {
                Uid = props.Uid;
            }
            // console.log(Uid);
            if (Uid !== 'prestto1') {
                axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/list/${Uid}`, {

                }).then(res => {
                    // console.log(res)
                    if (res.data.conclusion === "FAIL") {
                        setVPost(true);
                        // setPosts([nullpost]);
                    }
                    else {
                        setPosts(res.data.list);
                    }
                    setLoading(false);
                }).catch(err => {
                    // console.log(err)
                })
            } else {
                axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/`, {

                }).then(res => {
                    // console.log(res.data.list);
                    setPosts(res.data.list);
                    setLoading(false);
                }).catch(err => {
                    // console.log(err)
                })
            }
        }
        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        // class QnA extends React.Component {

        //     constructor(props) {
        //         super(props);

        //         this.state = {
        //             id: props.Uid,
        //             isSeller: props.isseller,
        //             posts: [],
        //             loading: false,
        //             noPosts: false,
        //             currentPage: 1,
        //             postsPerPage: 10
        //         }

        //         if (sessionStorage.getItem('id') !== "") {
        //             this.state = {
        //                 id: sessionStorage.getItem('id'),
        //                 isSeller: localStorage.getItem('isseller')
        //             }
        //         }

        //         // console.log(this.state.id);
        //     }

        //     componentDidMount() {
        //         // setLoading(true);
        //         this.setState({
        //             loading: true
        //         })
        //         if (this.state.id !== 'prestto1') {
        //             axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/list/` + this.state.id, {
        //             }).then(res => {
        //                 // console.log(res);
        //                 if (res.data.conclusion === "FAIL") {
        //                     this.setState({
        //                         noPosts: true
        //                     })
        //                     // setVPost(true);
        //                     // setPosts([nullpost]);
        //                 }
        //                 else {
        //                     // console.log(res);
        //                     this.setState({
        //                         posts: res.data.list
        //                     })
        //                     // setPosts(res.data.list);
        //                 }
        //                 this.setState({
        //                     loading: false
        //                 })
        //                 // setLoading(false);
        //             }).catch(err => {
        //                 // console.log(err)
        //             })
        //         } else {
        //             axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/question/`, {
        //             }).then(res => {
        //                 // console.log(res.data.list);
        //                 // // console.log(this.state.postslength);
        //                 this.setState({
        //                     posts: res.data.list,
        //                     loading: false,
        //                     // postslength: this.state.posts.length
        //                 })
        //                 // // console.log();
        //                 // setPosts(res.data);
        //                 // setLoading(false);
        //             }).catch(err => {
        //                 // console.log(err)
        //             })
        //         }
        //     }


        //     // currentPosts = [];
        //     // postslength = this.state.posts.length;
        //     // const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        //     // const indexOfFirstPost = this.state.indexOfLastPost - this.state.postsPerPage;
        //     // // Get current posts
        //     // if (this.state.posts !== undefined) {

        //     //     currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
        //     // }


        //     //change page
        //     paginate = (pageNumber) => {
        //         this.state.currentPage = pageNumber;
        //     }

        //     render() {
        //         // // console.log(this.state.posts.length);
        //         // const {
        //         //     currentPage,
        //         //     postsPerPage,
        //         //     posts,
        //         //     setCurrentPage,
        //         //     loading,
        //         //     postslength
        //         // } = this.state
        //     return (
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

                            <ComponentQnA posts={posts} loading={loading}>
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

export default QnA;