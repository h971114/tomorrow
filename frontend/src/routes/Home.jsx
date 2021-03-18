import React, { useState, useEffect } from 'react';
// import axios from "axios";

// import moment from 'moment';
// import 'moment/locale/ko';

import Timer from "../components/home/Timer";
import TodaySales from "../components/home/today_sale";
import Bob from "../components/home/BoB";
import New from "../components/home/new";
import Sale from "../components/home/Sale";

import Slider from "react-slick";
import "./css/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./css/Home.css";

const Home = () => {


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true
    };

    return (
        <div id="main_content">
            <div id="indexBG"></div>
            <div className="slick_slider">
                <div className="main_visual">
                    <Slider {...settings}>
                        <div className="slider1">
                        </div>
                        <div className="slider2">
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="today_price">
                <div className="size clear">
                    <Timer />
                    <TodaySales />
                </div>
            </div>
            <div className="section best">
                <div className="size">
                    <span className="section_title">
                        Best of <b>Best</b>
                    </span>
                    <p className="section_sub">
                        내일에서 가장
                        <em className="mbr"> 잘 나가는 제품 Best 12</em>
                    </p>
                    <Bob />
                    <a href="#" class="more_bt">More</a>
                </div>
            </div>
            <div className="section new">
                <div className="size">
                    <b className="section_title">NEW</b>
                    <p className="section_sub">내일 밀키트 신제품을 소개합니다</p>
                    <New />
                </div>
            </div>
            <div className="middle_img">
                <p className="middle_banner">
                    <span>Tasty, Healthy & Fresh</span>
                </p>
            </div>
            <div className="section sale_p">
                <div className="size">
                    <span className="section_title">
                        <b>SALE</b>
                    </span>
                    <p className="section_sub">내일 할인 제품으로 알뜰 쇼핑하세요!</p>
                    <Sale />
                </div>
            </div>
        </div>
    )
}
export default Home;