import React, { useState, useEffect } from 'react';
import axios from "axios";

import TopVisual from '../../components/Sale/TopVisual';
import SalePosts from '../../components/Product/SalePosts';
import Pagination from '../../components/common/Pagination';

const SaleProduct = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/gmbs`);

            setPosts(res.data);
            // console.log(res.data.menu);
            setLoading(false);

        }
        fetchPosts();
        return () => setLoading(false);
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
                    <SalePosts posts={currentPosts} loading={loading} />
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
export default SaleProduct;