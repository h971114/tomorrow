import React, { useState, useEffect } from 'react';
import axios from "axios";

import Posts from "../../components/home/newPosts";

const New = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/gmbb`);

            setPosts(res.data);
            // // console.log();
            setLoading(false);
        }
        fetchPosts();
    }, []);

    return (
        <div className="product">
            <Posts posts={posts} loading={loading} />
        </div>
    )
}
export default New;