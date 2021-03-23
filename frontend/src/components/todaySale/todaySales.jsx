import React, { useEffect } from 'react';

const TodaySales = () => {
    useEffect(() => {
        document.getElementById("todaySale_img").setAttribute("style", "background-image: url('/img/today_sale_sample.png'); height: 500px;");
    })

    return (
        <div className="view_wrap">
            <div className="goods clear">
                <div className="image">
                    <p id="todaySale_img">
                        <img src="/img/today_sale_img.png" />
                    </p>
                </div>
                <div className="info">
                    <div className="pro_txt">
                        <b>밀키트 상품명</b>
                        밀키트 짧은 소개
                    </div>
                    <div className="item">
                        <ul className="clear">
                            <li className="price clear">
                                <b className="product_sale">
                                    <span className="sale_per">
                                        21<em>%</em>
                                    </span>
                                </b>
                                <div>
                                    <p className="product_sale price">
                                        <b>5,500</b>원
                                        <span className="before_p">6,900원</span>
                                    </p>
                                </div>
                            </li>
                            <li className="clear">
                                <b>한정수량</b>
                                <span>100개</span>
                            </li>
                            <li className="clear last">
                                <b>남은수량</b>
                                <span>100개</span>
                            </li>
                        </ul>
                    </div>
                    <div className="submit_bt clear">
                        <a href="#">
                            구매하러 가기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaySales;