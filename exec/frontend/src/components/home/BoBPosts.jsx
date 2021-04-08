import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

import 'moment/locale/ko';

import { Swiper, SwiperSlide } from "swiper/react";

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

export const BoBPosts = ({ posts, loading }) => {

    if (loading) {

        const arrays = [1, 2, 3];

        const ArrayList = arrays.map(
            (array) => {
                // // console.log(array);
                (
                    <SwiperSlide className="best_slide skeletonUI" key={array}>
                        <a href="#">
                            <div className="title">
                                <div className="pic">
                                    <p className="pro_img" id="best1">
                                        <img src="/img/time_sale.png" />
                                    </p>
                                    <span className="number">
                                        <img src="/img/best_img.png" />
                                        <em>{array}</em>
                                    </span>
                                    <p className="info_icon">
                                        <img src="/img/best.png" />
                                        <img src="/img/sale.png" />
                                    </p>
                                    <p className="pic_hover" id="best1_hover">
                                        <img src="/img/time_sale.png" />
                                    </p>
                                </div>
                                <div className="pro_txt white_bg">
                                    <p>
                                        <b className="p_name">밀키트 이름</b>
                                        <span className="sub_title">서브 타이틀</span>
                                    </p>
                                    <span className="product_sale per">
                                        <span className="before_p">19,900원</span>
                                        <b>16,900</b>원
                                <span className="sale_per">16%</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                )
            }
        );

        return (
            <Swiper
                className='swiper-container'
                spaceBetween={50}
                slidesPerView={3}
                autoplay={true}
                navigation
            >
                { ArrayList}
            </Swiper>
        )
    }
    else {
        const boblist = posts.map((post, idx) => {

            var title = post.name;
            var priceString = post.price;
            var sale = false;
            var sale_money = post.price;
            var saleMoneyString = post.price;
            var newP = false;

            var createYY = post.create_at.substring(0, 4);
            var createMM = post.create_at.substring(5, 7);
            var createDD = post.create_at.substring(8, 10);
            var createDate = moment([createYY, createMM - 1, createDD]);
            var nowDate = moment();

            if (createDate.diff(nowDate, 'days') < -3) {
                newP = false;
            } else {
                newP = true;
            }

            if (title.length > 11) {
                title = title.substring(0, 10) + "...";
            }

            if (post.discount_rate != 0) {
                sale = true;
                sale_money = post.price / 100 * (100 - post.discount_rate);
            } else {
                sale = false;
            }
            saleMoneyString = sale_money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            priceString = priceString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            if (idx <= 5) {
                return (
                    <SwiperSlide className="best_slide" key={idx}>
                        <Link
                            to={{
                                pathname: `/product/detail/${post.id}`,
                                state: {
                                    id: post.id,
                                    name: post.name,
                                    subname: post.subname,
                                    discount_rate: post.discount_rate,
                                    img1: post.img1,
                                    price: post.price,
                                    priceString,
                                    sale_money: sale_money,
                                    saleMoneyString,
                                    seller_id: post.seller_id,
                                    create_at: post.create_at,
                                }
                            }}
                        >
                            <div className="title">
                                <div className="pic">
                                    <p className="pro_img" style={{ backgroundImage: `url(${post.img1})` }}>
                                        <img src="/img/time_sale.png" />
                                    </p>
                                    <span className="number">
                                        <img src="/img/best_img.png" />
                                        <em>{idx + 1}</em>
                                    </span>
                                    <p className="info_icon">
                                        {sale === true &&
                                            <img src="/img/sale.png" />
                                        }
                                        {newP === true &&
                                            <img src="/img/new.png" />
                                        }
                                    </p>
                                    <p className="pic_hover" style={{ backgroundImage: `url(${post.img2})` }}>
                                        <img src="/img/time_sale.png" />
                                    </p>
                                </div>
                                <div className="pro_txt white_bg">
                                    <p>
                                        <b className="p_name">
                                            {title}
                                        </b>
                                        <span className="sub_title">
                                            {post.subname}
                                        </span>
                                    </p>
                                    {sale === true &&
                                        <span className="product_sale per">
                                            <span className="before_p">{priceString}원</span>
                                            <b>{saleMoneyString}</b>원
                                                    <span className="sale_per">{post.discount_rate}%</span>
                                        </span>
                                    }
                                    {sale === false &&
                                        <span className="product_sale">
                                            <b>{priceString}</b>
                                                원
                                                </span>
                                    }
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            }
        }
        );
        return (
            <Swiper
                className='swiper-container'
                spaceBetween={50}
                slidesPerView={3}
                autoplay={true}
                navigation
            >
                {boblist}
            </Swiper>
        )
    }
}

export default BoBPosts;