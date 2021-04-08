import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import axios from 'axios';

const TodaySales = () => {
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    const [subname, setSubName] = useState('');
    const [tdr, setTDR] = useState(0);
    const [saleMoneyString, setsale_moneyString] = useState('');
    const [priceString, setPriceString] = useState('');
    const [sale_money, setsale_money] = useState(0);
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [sellAmount, setSellAmount] = useState(0);
    const [img1, setImg1] = useState('');
    const [id, setId] = useState(0);
    const [seller_id, setSeller] = useState(0);
    const [create_at, setCreate] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {


        const getdata = async () => {

            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/gmbts`);

            setLoading(false);
            timeSet(res.data);
        }

        const timeSet = async (e) => {
            var d = new Date();
            // var nowYyyy = Number(d.getFullYear());
            var nowMm = Number((d.getMonth() + 1));
            var nowDd = Number(d.getDate());

            if (nowMm < 10)
                nowMm = '0' + nowMm;
            if (nowDd < 10)
                nowDd = '0' + nowDd;

            var saleMoneyString;
            var PriceString;
            e.map(
                (array) => {
                    // // //console.log(array);
                    var Days = array.menu.todaysale
                    var Mm = Days.substring(5, 7);
                    var Dd = Days.substring(8, 10);

                    if (nowMm === Mm && nowDd === Dd) {
                        // // //console.log(array.menu.name);
                        setName(array.menu.name);
                        setSubName(array.menu.subname);
                        setTDR(array.menu.today_discount_rate);
                        setAmount(array.menu.amount);
                        setSellAmount(array.menu.sell_amount);
                        setImg1(array.menu.img1);
                        setId(array.menu.id);
                        setsale_money(array.sale_price);
                        setPrice(array.menu.price);
                        setSeller(array.menu.seller_id);
                        setCreate(array.menu.create_at);
                        saleMoneyString = array.sale_price;
                        PriceString = array.menu.price;
                    }
                }
            )

            var saleMoneyString = saleMoneyString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var PriceString = PriceString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            setsale_moneyString(saleMoneyString);
            setPriceString(PriceString);
        }



        getdata();
    }, [])

    return (
        <div className="view_wrap">
            <div className="goods clear">
                <div className="image">
                    <p id="todaySale_img" style={{ backgroundImage: `url(${img1})` }}>
                        <img src="/img/today_sale_img.png" />
                    </p>
                </div>
                <div className="info">
                    <div className="pro_txt">
                        <b>{name}</b>
                        {subname}
                    </div>
                    <div className="item">
                        <ul className="clear">
                            <li className="price clear">
                                <b className="product_sale">
                                    <span className="sale_per">
                                        {tdr}<em>%</em>
                                    </span>
                                </b>
                                <div>
                                    <p className="product_sale price">
                                        <b>{saleMoneyString}</b>원
                                        <span className="before_p">{priceString}원</span>
                                    </p>
                                </div>
                            </li>
                            <li className="clear">
                                <b>한정수량</b>
                                <span>{amount}개</span>
                            </li>
                            <li className="clear last">
                                <b>남은수량</b>
                                <span>{amount - sellAmount}개</span>
                            </li>
                        </ul>
                    </div>
                    <div className="submit_bt clear">
                        <Link
                            to={{
                                pathname: `/product/detail/${id}`,
                                state: {
                                    id,
                                    name,
                                    subname,
                                    discount_rate: tdr,
                                    img1,
                                    price,
                                    priceString,
                                    sale_money: sale_money,
                                    saleMoneyString: saleMoneyString,
                                    seller_id,
                                    create_at,
                                }
                            }}
                        >구매하러 가기
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaySales;