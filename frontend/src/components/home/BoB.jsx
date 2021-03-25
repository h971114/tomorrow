import React, { useState, useEffect } from 'react';
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

const BoB = () => {
    const [slideB, setSlideB] = useState(1);

    useEffect(() => {
        const imageSet = async () => {
            document.getElementById('best1').setAttribute("style", "background-image:url('/img/best_sample1.png')");
            document.getElementById('best1_hover').setAttribute("style", "background-image:url('/img/best_sample2.png')");
            document.getElementById('best2').setAttribute("style", "background-image:url('/img/best_sample3.png')");
            document.getElementById('best2_hover').setAttribute("style", "background-image:url('/img/best_sample4.png')");
            document.getElementById('best3').setAttribute("style", "background-image:url('/img/best_sample5.png')");
            document.getElementById('best3_hover').setAttribute("style", "background-image:url('/img/best_sample6.png')");
            document.getElementById('best4').setAttribute("style", "background-image:url('/img/best_sample7.png')");
            document.getElementById('best4_hover').setAttribute("style", "background-image:url('/img/best_sample8.png')");
            document.getElementById('best5').setAttribute("style", "background-image:url('/img/best_sample9.png')");
            document.getElementById('best5_hover').setAttribute("style", "background-image:url('/img/best_sample10.png')");
            document.getElementById('best6').setAttribute("style", "background-image:url('/img/best_sample11.png')");
            document.getElementById('best6_hover').setAttribute("style", "background-image:url('/img/best_sample12.png')");
        }
        imageSet();
    })


    return (
        <Swiper
            className='swiper-container'
            spaceBetween={50}
            slidesPerView={3}
            autoplay={true}
            navigation
        >
            <SwiperSlide className="best_slide">
                <a href="#">
                    <div className="title">
                        <div className="pic">
                            <p className="pro_img" id="best1">
                                <img src="/img/time_sale.png" />
                            </p>
                            <span className="number">
                                <img src="/img/best_img.png" />
                                <em>1</em>
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
            <SwiperSlide className="best_slide">
                <a href="#">
                    <div className="title">
                        <div className="pic">
                            <p className="pro_img" id="best2">
                                <img src="/img/time_sale.png" />
                            </p>
                            <span className="number">
                                <img src="/img/best_img.png" />
                                <em>2</em>
                            </span>
                            <p className="info_icon">
                                <img src="/img/best.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="best2_hover">
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
            <SwiperSlide className="best_slide">
                <a href="#">
                    <div className="title">
                        <div className="pic">
                            <p className="pro_img" id="best3">
                                <img src="/img/time_sale.png" />
                            </p>
                            <span className="number">
                                <img src="/img/best_img.png" />
                                <em>3</em>
                            </span>
                            <p className="info_icon">
                                <img src="/img/best.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="best3_hover">
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
            <SwiperSlide className="best_slide">
                <a href="#">
                    <div className="title">
                        <div className="pic">
                            <p className="pro_img" id="best4">
                                <img src="/img/time_sale.png" />
                            </p>
                            <span className="number">
                                <img src="/img/best_img.png" />
                                <em>4</em>
                            </span>
                            <p className="info_icon">
                                <img src="/img/best.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="best4_hover">
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
            <SwiperSlide className="best_slide">
                <a href="#">
                    <div className="title">
                        <div className="pic">
                            <p className="pro_img" id="best5">
                                <img src="/img/time_sale.png" />
                            </p>
                            <span className="number">
                                <img src="/img/best_img.png" />
                                <em>5</em>
                            </span>
                            <p className="info_icon">
                                <img src="/img/best.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="best5_hover">
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
            <SwiperSlide className="best_slide">
                <a href="#">
                    <div className="title">
                        <div className="pic">
                            <p className="pro_img" id="best6">
                                <img src="/img/time_sale.png" />
                            </p>
                            <span className="number">
                                <img src="/img/best_img.png" />
                                <em>6</em>
                            </span>
                            <p className="info_icon">
                                <img src="/img/best.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="best6_hover">
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
        </Swiper >
    )
}

export default BoB;