import React, { useState, useEffect } from 'react';
import axios from "axios";

import '../css/Best.css';

import TopVisual from '../../components/Best/TopVisual';
import Posts from '../../components/Best/Posts';


const BestProduct = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/gmbb`);

            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    return (
        <div id="sub">
            <div className="inner sub_menu all_menu">
                <TopVisual />

                <div className="size">
                    <Posts posts={posts} loading={loading} />
                </div>
            </div>
        </div>
    )
}
export default BestProduct;