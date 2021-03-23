import React, { useEffect } from 'react';

const New = () => {
    useEffect(() => {
        document.getElementById('new1').setAttribute("style", "background-image:url('/img/best_sample1.png')");
        document.getElementById('new1_hover').setAttribute("style", "background-image:url('/img/best_sample2.png')");
        document.getElementById('new2').setAttribute("style", "background-image:url('/img/best_sample1.png')");
        document.getElementById('new2_hover').setAttribute("style", "background-image:url('/img/best_sample2.png')");
        document.getElementById('new3').setAttribute("style", "background-image:url('/img/best_sample1.png')");
        document.getElementById('new3_hover').setAttribute("style", "background-image:url('/img/best_sample2.png')");
        document.getElementById('new4').setAttribute("style", "background-image:url('/img/best_sample1.png')");
        document.getElementById('new4_hover').setAttribute("style", "background-image:url('/img/best_sample2.png')");
    })
    return (
        <div className="product">
            <ul className="clear">
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" id="new1">
                                <img src="/img/new_bg.png" />
                            </p>
                            <p className="info_icon">
                                <img src="/img/new.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="new1_hover">
                                <img src="/img/new_bg.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">밀키트 이름</b>
                                <span className="sub_title">밀키트 서브 이름</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">14,900원</span>
                                <b>12,900</b>원
                                <span className="sale_per">31%</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" id="new2">
                                <img src="/img/new_bg.png" />
                            </p>
                            <p className="info_icon">
                                <img src="/img/new.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="new2_hover">
                                <img src="/img/new_bg.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">밀키트 이름</b>
                                <span className="sub_title">밀키트 서브 이름</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">14,900원</span>
                                <b>12,900</b>원
                                <span className="sale_per">31%</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" id="new3">
                                <img src="/img/new_bg.png" />
                            </p>
                            <p className="info_icon">
                                <img src="/img/new.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="new3_hover">
                                <img src="/img/new_bg.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">밀키트 이름</b>
                                <span className="sub_title">밀키트 서브 이름</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">14,900원</span>
                                <b>12,900</b>원
                                <span className="sale_per">31%</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" id="new4">
                                <img src="/img/new_bg.png" />
                            </p>
                            <p className="info_icon">
                                <img src="/img/new.png" />
                                <img src="/img/sale.png" />
                            </p>
                            <p className="pic_hover" id="new4_hover">
                                <img src="/img/new_bg.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name">밀키트 이름</b>
                                <span className="sub_title">밀키트 서브 이름</span>
                            </p>
                            <div className="product_sale per">
                                <span className="before_p">14,900원</span>
                                <b>12,900</b>원
                                <span className="sale_per">31%</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default New;