import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import Posts from "../../components/home/BoBPosts";

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay
} from "swiper"; //*

//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const BoB = () => {
    const [slideB, setSlideB] = useState(1);
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
        <div className="asdf">
            <Posts posts={posts} loading={loading} />
        </div>

    )
}

export default BoB;