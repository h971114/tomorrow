import React, { useEffect } from 'react';

import moment from 'moment';
import 'moment/locale/ko';

const Today_sale = () => {
    useEffect(() => {
        const timeSet = async () => {

            var d = new Date();
            var nowYy = Number(d.getFullYear());
            var nowMm = Number((d.getMonth() + 1));
            var nowDd = Number(d.getDate());
            // console.log(nowDd);

            var tomorrow1 = new Date(nowYy, nowMm, nowDd + 1);
            var tomorrow1Mm = Number((tomorrow1.getMonth()));
            var tomorrow1Dd = Number(tomorrow1.getDate());
            // console.log(tomorrow1Dd);

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
            if (tomorrow1Dd < 10)
                tomorrow1Dd = '0' + tomorrow1Dd;
            if (tomorrow2Dd < 10)
                tomorrow2Dd = '0' + tomorrow2Dd;

            document.getElementById('Tomorrow1').innerText = tomorrow1Mm + "-" + tomorrow1Dd;
            document.getElementById('Tomorrow2').innerText = tomorrow2Mm + "-" + tomorrow2Dd;
        }

        timeSet();

        document.getElementById('today_img').setAttribute("style", "background-image:url('/img/sample1.png')");
        document.getElementById('today_img_hover').setAttribute("style", "background-image:url('/img/sample2.png')");
        document.getElementById('tomorrow_img').setAttribute("style", "background-image:url('/img/sample3.png')");
        document.getElementById('tomorrow_img_hover').setAttribute("style", "background-image:url('/img/sample4.png')");
        document.getElementById('tomorrow2_img').setAttribute("style", "background-image:url('/img/sample5.png')");
        document.getElementById('tomorrow2_img_hover').setAttribute("style", "background-image:url('/img/sample6.png')");
    })

    return (
        <div className="sale_product">
            <ul className="clear">
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" id="today_img">
                                <img src="/img/time_sale.png" />
                            </p>
                            <p className="today green">
                                <img src="/img/today.png" />
                                <span>Today</span>
                            </p>
                            <p className="pic_hover" id="today_img_hover">
                                <img src="/img/time_sale.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">밀키트 이름</b>
                                <span className="sub_title">밀키트 소개글</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">6,900원</span>
                                <b>5,500</b>원
                                            <span className="sale_per">21%</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" id="tomorrow_img">
                                <img src="/img/time_sale.png" />
                            </p>
                            <p className="today">
                                <img src="/img/time_b.png" />
                                <span id="Tomorrow1"></span>
                            </p>
                            <p className="pic_hover" id="tomorrow_img_hover">
                                <img src="/img/time_sale.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">밀키트 이름</b>
                                <span className="sub_title">밀키트 소개글</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">6,900원</span>
                                <b>5,500</b>원
                                            <span className="sale_per">21%</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" id="tomorrow2_img">
                                <img src="/img/time_sale.png" />
                            </p>
                            <p className="today">
                                <img src="/img/time_b.png" />
                                <span id="Tomorrow2"></span>
                            </p>
                            <p className="pic_hover" id="tomorrow2_img_hover">
                                <img src="/img/time_sale.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">밀키트 이름</b>
                                <span className="sub_title">밀키트 소개글</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">6,900원</span>
                                <b>5,500</b>원
                                            <span className="sale_per">21%</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Today_sale;