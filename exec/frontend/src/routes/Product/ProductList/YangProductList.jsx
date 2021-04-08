import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import TopVisual from '../../../components/Product/TopVisual/TopVisualYang';
import Posts from '../../../components/Product/Posts';
import Pagination from '../../../components/common/Pagination';


const ProductList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/gmbc`, {
                params: {
                    keyword: '2'
                }
            });

            setPosts(res.data.list);
            // // // console.log(res);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => {
        window.scrollTo(0, 0);
        setCurrentPage(pageNumber);
    }



    return (
        <div id="sub">
            <div className="inner sub_menu all_menu">
                <TopVisual />

                <div className="size">
                    <div className="bbs_tab">
                        <ul className="clear itemList5">
                            <li><Link to="/goods">전체 상품<img src="/img/bbs_tab_arrow.png" /></Link></li>
                            <li><Link to="/goods/1">한식 밀키트<img src="/img/bbs_tab_arrow.png" /></Link></li>
                            <li><Link to="/goods/2" className="on">양식 밀키트<img src="/img/bbs_tab_arrow.png" /></Link></li>
                            <li><Link to="/goods/3">중식/일식 밀키트<img src="/img/bbs_tab_arrow.png" /></Link></li>
                            <li><Link to="/goods/4">동남아 밀키트<img src="/img/bbs_tab_arrow.png" /></Link></li>
                            <li><Link to="/goods/5">샐러드 밀키트<img src="/img/bbs_tab_arrow.png" /></Link></li>
                        </ul>
                    </div>
                    <Posts posts={currentPosts} loading={loading} />
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
    )
}
export default ProductList;