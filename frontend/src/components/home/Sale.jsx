import React, { useEffect } from 'react';

const Sale = () => {
    useEffect(() => {
        document.getElementById('sale1').setAttribute("style", "background-image:url('/img/sale_sample1.png')");
        document.getElementById('sale1_hover').setAttribute("style", "background-image:url('/img/sale_sample2.png')");
        document.getElementById('sale2').setAttribute("style", "background-image:url('/img/sale_sample1.png')");
        document.getElementById('sale2_hover').setAttribute("style", "background-image:url('/img/sale_sample2.png')");
        document.getElementById('sale3').setAttribute("style", "background-image:url('/img/sale_sample1.png')");
        document.getElementById('sale3_hover').setAttribute("style", "background-image:url('/img/sale_sample2.png')");
        document.getElementById('sale4').setAttribute("style", "background-image:url('/img/sale_sample1.png')");
        document.getElementById('sale4_hover').setAttribute("style", "background-image:url('/img/sale_sample2.png')");
    }
    )
    return (
        <div className="sale_list">
            <ul className="clear">
                <li>
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
                <li>
                    <a href="#">
                        <div className="con clear">
                            <div className="pic">
                                <p className="pro_img" id="sale2">
                                    <img src="/img/new_bg.png" />
                                </p>
                                <p className="pic_hover" id="sale2_hover">
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
                <li>
                    <a href="#">
                        <div className="con clear">
                            <div className="pic">
                                <p className="pro_img" id="sale3">
                                    <img src="/img/new_bg.png" />
                                </p>
                                <p className="pic_hover" id="sale3_hover">
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
                <li>
                    <a href="#">
                        <div className="con clear">
                            <div className="pic">
                                <p className="pro_img" id="sale4">
                                    <img src="/img/new_bg.png" />
                                </p>
                                <p className="pic_hover" id="sale4_hover">
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
            </ul>
        </div>
    )
}

export default Sale;
