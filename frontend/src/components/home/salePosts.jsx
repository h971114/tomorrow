import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

import 'moment/locale/ko';

export const SalePosts = ({ posts, loading }) => {

    if (loading) {

        const arrays = [1, 2, 3, 4];

        const ArrayList = arrays.map(
            (array) => {
                // // console.log(array);
                (
                    <li key={array}>
                        <a href="#">
                            <div className="con clear">
                                <div className="pic">
                                    <p className="pro_img" id="sale1">
                                        <img src="/img/new_bg.png" />
                                    </p>
                                    <p className="pic_hover" id="sale1_hover">
                                        <img src="/img/new_bg.png" />
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <p>
                                        <b className="p_name">밀키트 이름</b>
                                        <span className="sub_title">밀키트 소개</span>
                                    </p>
                                    <p className="product_sale per">
                                        <span className="sale_per">
                                            14<em>%</em>
                                        </span>
                                        <b>12,900</b>원
                                    <span className="before_p">14,900원</span>
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/new.png" />
                                        <img src="/img/sale.png" />
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                )
            }
        );

        return (
            <ul className="clear">
                {ArrayList}
            </ul>
        )
    }
    else {
        const salelist = posts.map((post, idx) => {

            var title = post.menu.name;
            var priceString = post.menu.price;
            var sale = true;
            var sale_money = post.sale_price;
            var saleMoneyString = post.sale_price;
            var newP = false;

            var createYY = post.menu.create_at.substring(0, 4);
            var createMM = post.menu.create_at.substring(5, 7);
            var createDD = post.menu.create_at.substring(8, 10);
            var createDate = moment([createYY, createMM - 1, createDD]);
            var nowDate = moment();

            if (createDate.diff(nowDate, 'days') > 3) {
                newP = false;
            } else {
                newP = true;
            }

            if (title.length > 11) {
                title = title.substring(0, 10) + "...";
            }

            saleMoneyString = sale_money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            priceString = priceString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            if (idx <= 3) {
                // console.log(post);
                return (
                    <li key={idx}>
                        <Link
                            to={{
                                pathname: `/product/detail/${post.menu.id}`,
                                state: {
                                    id: post.menu.id,
                                    name: post.menu.name,
                                    subname: post.menu.subname,
                                    discount_rate: post.menu.discount_rate,
                                    img1: post.menu.img1,
                                    price: post.menu.price,
                                    priceString,
                                    sale_money: post.sale_price,
                                    saleMoneyString,
                                    seller_id: post.menu.seller_id,
                                    create_at: post.menu.create_at,
                                }
                            }}
                        >
                            <div className="con clear">
                                <div className="pic">
                                    <p className="pro_img" style={{ backgroundImage: `url(${post.menu.img1})` }}>
                                        <img src="/img/new_bg.png" />
                                    </p>
                                    <p className="pic_hover" style={{ backgroundImage: `url(${post.menu.img2})` }}>
                                        <img src="/img/new_bg.png" />
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <b className="p_name">
                                        {title}
                                    </b>
                                    <span className="sub_title">
                                        {post.menu.subname}
                                    </span>

                                    <div className="product_sale per">
                                        <span className="sale_per">{post.menu.discount_rate}<em>%</em></span>
                                        <b>{saleMoneyString}</b>원
                                            <span className="before_p">{priceString}원</span>
                                    </div>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        {newP === true &&
                                            <img src="/img/new.png" />
                                        }
                                    </p>
                                </div>
                            </div>


                        </Link>
                    </li>
                )
            }
        }
        );
        return (
            <ul className="clear">
                {salelist}
            </ul>
        )
    }
}

export default SalePosts;