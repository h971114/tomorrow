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
        document.getElementById('check1').setAttribute("checked", "true");
    }, []);

    return (
        <div id="sub">
            <div className="inner sub_menu all_menu">
                <TopVisual />

                <div className="size">
                    <div className="radio_bt">
                        <input type="radio" name="check" value="0" id="check1" />
                        <label htmlFor="check1" className="first"><span>신상품</span></label>
                        <input type="radio" name="check" value="1" id="check2" />
                        <label htmlFor="check2"><span>낮은가격</span></label>
                        <input type="radio" name="check" value="2" id="check3" />
                        <label htmlFor="check3"><span>높은가격</span></label>
                    </div>
                    <Posts posts={posts} loading={loading} />
                </div>
            </div>
        </div>
    )
}
export default BestProduct;