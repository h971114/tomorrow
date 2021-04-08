import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import moment from 'moment';
import 'moment/locale/ko';

const Today_sale = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
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
    const [img2, setImg2] = useState('');
    const [id, setId] = useState(0);
    const [seller_id, setSeller] = useState(0);
    const [create_at, setCreate] = useState(0);

    const [name2, setName2] = useState('');
    const [subname2, setSubName2] = useState('');
    const [tdr2, setTDR2] = useState(0);
    const [saleMoneyString2, setsale_moneyString2] = useState('');
    const [priceString2, setPriceString2] = useState('');
    const [sale_money2, setsale_money2] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [sellAmount2, setSellAmount2] = useState(0);
    const [img12, setImg12] = useState('');
    const [img22, setImg22] = useState('');
    const [id2, setId2] = useState(0);
    const [seller_id2, setSeller2] = useState(0);
    const [create_at2, setCreate2] = useState(0);

    const [name3, setName3] = useState('');
    const [subname3, setSubName3] = useState('');
    const [tdr3, setTDR3] = useState(0);
    const [saleMoneyString3, setsale_moneyString3] = useState('');
    const [priceString3, setPriceString3] = useState('');
    const [sale_money3, setsale_money3] = useState(0);
    const [price3, setPrice3] = useState(0);
    const [amount3, setAmount3] = useState(0);
    const [sellAmount3, setSellAmount3] = useState(0);
    const [img13, setImg13] = useState('');
    const [img23, setImg23] = useState('');
    const [id3, setId3] = useState(0);
    const [seller_id3, setSeller3] = useState(0);
    const [create_at3, setCreate3] = useState(0);

    useEffect(() => {

        const getdata = async () => {

            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/menu/gmbts`);
            timeSet(res.data);
            setLoading(false);
        }

        const timeSet = async (e) => {

            var d = new Date();
            var nowYy = Number(d.getFullYear());
            var nowMm = Number((d.getMonth() + 1));
            var nowDd = Number(d.getDate());
            // // //console.log(nowDd);

            var tomorrow1 = new Date(nowYy, nowMm, nowDd + 1);
            var tomorrow1Mm = Number((tomorrow1.getMonth()));
            var tomorrow1Dd = Number(tomorrow1.getDate());
            // // //console.log(tomorrow1Dd);

            var tomorrow2 = new Date(nowYy, nowMm, nowDd + 2);
            var tomorrow2Mm = Number((tomorrow2.getMonth()));
            var tomorrow2Dd = Number(tomorrow2.getDate());

            if (nowMm < 10)
                nowMm = '0' + nowMm;
            if (tomorrow1Mm < 10)
                tomorrow1Mm = '0' + tomorrow1Mm;
            if (tomorrow2Mm < 10)
                tomorrow2Mm = '0' + tomorrow2Mm;
            // var tomorrow1 = nowDd + 1;
            // var tomorrow2 = nowDd + 2;
            if (nowDd < 10)
                nowDd = '0' + nowDd;
            if (tomorrow1Dd < 10)
                tomorrow1Dd = '0' + tomorrow1Dd;
            if (tomorrow2Dd < 10)
                tomorrow2Dd = '0' + tomorrow2Dd;

            document.getElementById('Tomorrow1').innerText = tomorrow1Mm + "-" + tomorrow1Dd;
            document.getElementById('Tomorrow2').innerText = tomorrow2Mm + "-" + tomorrow2Dd;

            var saleMoneyString;
            var PriceString;
            var saleMoneyString2;
            var PriceString2;
            var saleMoneyString3;
            var PriceString3;
            // // //console.log(nowDd + " + " + tomorrow1Dd + " + " + tomorrow2Dd);
            e.map(
                (array) => {
                    // // //console.log(array);
                    var Days = array.menu.todaysale
                    var Mm = Days.substring(5, 7);
                    var Dd = Days.substring(8, 10);

                    if (nowMm == Mm && nowDd == Dd) {
                        // // //console.log(array.menu.name);
                        setName(array.menu.name);
                        setSubName(array.menu.subname);
                        setTDR(array.menu.today_discount_rate);
                        setAmount(array.menu.amount);
                        setSellAmount(array.menu.sell_amount);
                        setImg1(array.menu.img1);
                        setImg2(array.menu.img2);
                        setId(array.menu.id);
                        setsale_money(array.sale_price);
                        setPrice(array.menu.price);
                        setSeller(array.menu.seller_id);
                        setCreate(array.menu.create_at);
                        saleMoneyString = array.sale_price;
                        // // //console.log(saleMoneyString);
                        PriceString = array.menu.price;
                    }
                    if (tomorrow1Mm == Mm && tomorrow1Dd == Dd) {
                        setName2(array.menu.name);
                        setSubName2(array.menu.subname);
                        setTDR2(array.menu.today_discount_rate);
                        setAmount2(array.menu.amount);
                        setSellAmount2(array.menu.sell_amount);
                        setImg12(array.menu.img1);
                        setImg22(array.menu.img2);
                        setId2(array.menu.id);
                        setsale_money2(array.sale_price);
                        setPrice2(array.menu.price);
                        setSeller2(array.menu.seller_id);
                        setCreate2(array.menu.create_at);
                        saleMoneyString2 = array.sale_price;
                        PriceString2 = array.menu.price;
                    }
                    if (tomorrow2Mm == Mm && tomorrow2Dd == Dd) {
                        setName3(array.menu.name);
                        setSubName3(array.menu.subname);
                        setTDR3(array.menu.today_discount_rate);
                        setAmount3(array.menu.amount);
                        setSellAmount3(array.menu.sell_amount);
                        setImg13(array.menu.img1);
                        setImg23(array.menu.img2);
                        setId3(array.menu.id);
                        setsale_money3(array.sale_price);
                        setPrice3(array.menu.price);
                        setSeller3(array.menu.seller_id);
                        setCreate3(array.menu.create_at);
                        saleMoneyString3 = array.sale_price;
                        // // //console.log(Mm + ":" + Dd);
                        // // //console.log(saleMoneyString3);
                        PriceString3 = array.menu.price;
                    }
                }
            )

            saleMoneyString = saleMoneyString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            PriceString = PriceString.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            saleMoneyString2 = saleMoneyString2.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            PriceString2 = PriceString2.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            saleMoneyString3 = saleMoneyString3.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            PriceString3 = PriceString3.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            setsale_moneyString(saleMoneyString);
            setPriceString(PriceString);
            setsale_moneyString2(saleMoneyString2);
            setPriceString2(PriceString2);
            setsale_moneyString3(saleMoneyString3);
            setPriceString3(PriceString3);
        }

        getdata();
    }, []);

    return (
        <div className="sale_product">
            <ul className="clear">
                <li>
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
                    >
                        <div className="pic">
                            <p className="pro_img" style={{ backgroundImage: `url(${img1})` }}>
                                <img src="/img/time_sale.png" />
                            </p>
                            <p className="today green">
                                <img src="/img/today.png" />
                                <span>Today</span>
                            </p>
                            <p className="pic_hover" style={{ backgroundImage: `url(${img2})` }}>
                                <img src="/img/time_sale.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">{name}</b>
                                <span className="sub_title">{subname}</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">{priceString}원</span>
                                <b>{saleMoneyString}</b>원
                                            <span className="sale_per">{tdr}%</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <a style={{ cursor: `default` }}>
                        <div className="pic">
                            <p className="pro_img" style={{ backgroundImage: `url(${img12})` }}>
                                <img src="/img/time_sale.png" />
                            </p>
                            <p className="today">
                                <img src="/img/time_b.png" />
                                <span id="Tomorrow1"></span>
                            </p>
                            <p className="pic_hover" style={{ backgroundImage: `url(${img22})` }}>
                                <img src="/img/time_sale.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">{name2}</b>
                                <span className="sub_title">{subname2}</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">{priceString2}원</span>
                                <b>{saleMoneyString2}</b>원
                                            <span className="sale_per">{tdr2}%</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a style={{ cursor: `default` }}>
                        <div className="pic">
                            <p className="pro_img" style={{ backgroundImage: `url(${img13})` }}>
                                <img src="/img/time_sale.png" />
                            </p>
                            <p className="today">
                                <img src="/img/time_b.png" />
                                <span id="Tomorrow2"></span>
                            </p>
                            <p className="pic_hover" style={{ backgroundImage: `url(${img23})` }}>
                                <img src="/img/time_sale.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">{name3}</b>
                                <span className="sub_title">{subname3}</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">{priceString3}원</span>
                                <b>{saleMoneyString3}</b>원
                                            <span className="sale_per">{tdr3}%</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Today_sale;