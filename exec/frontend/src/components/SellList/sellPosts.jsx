import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

import 'moment/locale/ko';

export const SellPosts = ({ posts, loading, uid }) => {
    // console.log(uid);
    if (loading) {

        const arrays = [1, 2, 3, 4];

        const ArrayList = arrays.map(
            (array) => {
                // // // console.log(array);
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
        console.log(uid);
        const salelist = posts.map((post, idx) => {

            // // console.log(post);

            var title = post.name;
            var priceString = post.price;
            var sale;
            var sale_money;
            var saleMoneyString;
            var newP = false;

            var createYY = post.create_at.substring(0, 4);
            var createMM = post.create_at.substring(5, 7);
            var createDD = post.create_at.substring(8, 10);
            var createDate = moment([createYY, createMM - 1, createDD]);
            var testDate = moment([2021, 3, 1]);
            var nowDate = moment();
            if (createDate.diff(nowDate, 'days') < -3) {
                newP = false;
            } else {
                newP = true;
            }

            if (title.length > 11) {
                title = title.substring(0, 10) + "...";
            }

            if (post.discount_rate > 0) {
                sale = true;
                sale_money = post.price / 100 * (100 - post.discount_rate);
                // saleMoneyString = sale_money;
                saleMoneyString = sale_money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            } else {
                sale = false;
                sale_money = post.price;
            }
            // // console.log(saleMoneyString);

            priceString = priceString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            // // console.log(post);
            return (
                <li key={idx}>
                    <Link
                        to={{
                            pathname: `/product/seller/${post.id}`,
                            state: {
                                id: post.id,
                                name: post.name,
                                subname: post.subname,
                                discount_rate: post.discount_rate,
                                img1: post.img1,
                                price: post.price,
                                priceString,
                                sale_money: post.sale_price,
                                saleMoneyString,
                                seller_id: post.seller_id,
                                create_at: post.create_at,
                                Uid: uid
                            }
                        }}
                    >
                        <div className="con clear">
                            <div className="pic">
                                <p className="pro_img" style={{ backgroundImage: `url(${post.img1})` }}>
                                    <img src="/img/new_bg.png" />
                                </p>
                                <p className="pic_hover" style={{ backgroundImage: `url(${post.img2})` }}>
                                    <img src="/img/new_bg.png" />
                                </p>
                            </div>
                            <div className="pro_txt">
                                <b className="p_name">
                                    {title}
                                </b>
                                <span className="sub_title">
                                    {post.subname}
                                </span>
                                {sale === true &&
                                    <div className="product_sale per">
                                        <span className="sale_per">{post.discount_rate}<em>%</em></span>
                                        <b>{saleMoneyString}</b>원
                                            <span className="before_p">{priceString}원</span>
                                    </div>
                                }
                                {sale === false &&
                                    <div className="product_sale per">
                                        <b>{priceString}</b>원
                                    </div>
                                }
                                <p className="info_icon">
                                    {sale === true &&
                                        <img src="/img/sale.png" />
                                    }
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
        );
        return (
            <ul className="clear">
                {salelist}
            </ul>
        )
    }
}

export default SellPosts;