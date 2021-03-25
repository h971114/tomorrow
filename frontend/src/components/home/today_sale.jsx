import React, { useEffect } from 'react';

const Today_sale = () => {
    useEffect(() => {
        const timeSet = async () => {

            var xmlHttp;

            function srvTime() {
                if (window.XMLHttpRequest) {
                    xmlHttp = new XMLHttpRequest();
                    xmlHttp.open('HEAD', window.location.href.toString(), false);
                    xmlHttp.setRequestHeader("Content-Type", "text/html");
                    xmlHttp.send('');
                    return xmlHttp.getResponseHeader("Date");
                }
            }
            var st = srvTime();
            var d = new Date(st);
            var nowMm = Number((d.getMonth() + 1));
            var nowDd = Number(d.getDate());

            if (nowMm < 10)
                nowMm = '0' + nowMm;
            var tomorrow1 = nowDd + 1;
            var tomorrow2 = nowDd + 2;
            if (tomorrow1 < 10)
                tomorrow1 = '0' + tomorrow1;
            if (tomorrow2 < 10)
                tomorrow2 = '0' + tomorrow2;

            document.getElementById('Tomorrow1').innerText = nowMm + "-" + tomorrow1;
            document.getElementById('Tomorrow2').innerText = nowMm + "-" + tomorrow2;
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