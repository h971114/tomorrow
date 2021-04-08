import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import moment from 'moment';

import 'moment/locale/ko';

function List({ idx, id, name, subname, category, price, discount_rate, img1, img2, amount, sell_amount, seller_id, create_at }) {
    var title = name;
    var priceString = price;
    var sale = false;
    var sale_money = price;
    var saleMoneyString = price;
    var newP = false;

    var createYY = create_at.substring(0, 4);
    var createMM = create_at.substring(5, 7);
    var createDD = create_at.substring(8, 10);
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

    if (discount_rate != 0) {
        sale = true;
        sale_money = price / 100 * (100 - discount_rate);
    } else {
        sale = false;
    }
    saleMoneyString = sale_money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    priceString = priceString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");


    return (
        <li>
            <Link
                to={{
                    pathname: `/product/detail/${id}`,
                    state: {
                        id,
                        name,
                        subname,
                        discount_rate,
                        img1,
                        price,
                        priceString,
                        sale_money,
                        saleMoneyString,
                        seller_id,
                        create_at,
                    }
                }}
            >
                <div className="pic">
                    <p className="pro_img" style={{ backgroundImage: `url(${img1})` }}>
                        <img src="/img/best_img_sample.png" />
                    </p>
                    <p className="info_icon">
                        {sale === true &&
                            <img src="/img/sale.png" />
                        }
                        {newP === true &&
                            <img src="/img/new.png" />
                        }
                    </p>
                    <p className="pic_hover" style={{ backgroundImage: `url(${img2})` }}>
                        <img src="/img/best_img_sample.png" />
                    </p>
                </div>
                <div className="pro_txt">
                    <p>
                        <b className="p_name" >
                            {title}
                        </b>
                        <span className="sub_title" >
                            {subname}
                        </span>
                    </p>
                    {sale === true &&
                        <span className="product_sale per">
                            <span className="before_p">{priceString}원</span>
                            <b>{saleMoneyString}</b>원
                                <span className="sale_per">{discount_rate}%</span>
                        </span>
                    }
                    {sale === false &&
                        <span className="product_sale">
                            <b>{priceString}</b>
                            원
                            </span>
                    }
                </div>
            </Link>
        </li>
    );
}

List.propTypes = {
    id: propTypes.number.isRequired
};

export default List;