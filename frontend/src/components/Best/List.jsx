import React, { useEffect } from 'react';

const List = () => {
    useEffect(() => {
        document.getElementById("best1").setAttribute("style", "background-image:url('/img/best_sample1.png')");
        document.getElementById("best1_hover").setAttribute("style", "background-image:url('/img/best_sample2.png')");
        document.getElementById("best2").setAttribute("style", "background-image:url('/img/best_sample3.png')");
        document.getElementById("best2_hover").setAttribute("style", "background-image:url('/img/best_sample4.png')");
        document.getElementById("best3").setAttribute("style", "background-image:url('/img/best_sample5.png')");
        document.getElementById("best3_hover").setAttribute("style", "background-image:url('/img/best_sample6.png')");
        document.getElementById("best4").setAttribute("style", "background-image:url('/img/best_sample7.png')");
        document.getElementById("best4_hover").setAttribute("style", "background-image:url('/img/best_sample8.png')");
        document.getElementById("best5").setAttribute("style", "background-image:url('/img/best_sample9.png')");
        document.getElementById("best5_hover").setAttribute("style", "background-image:url('/img/best_sample10.png')");
        document.getElementById("best6").setAttribute("style", "background-image:url('/img/best_sample11.png')");
        document.getElementById("best6_hover").setAttribute("style", "background-image:url('/img/best_sample12.png')");
    }, [])

    return (
        <div className="size">
            <div className="product_list best_list">
                <div className="product_wrap">
                    <ul className="clear">
                        <li>
                            <a href="#">
                                <div className="pic">
                                    <p className="pro_img" id="best1">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/best.png" />
                                    </p>
                                    <p className="pic_hover" id="best1_hover">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="number">
                                        <img src="/img/best_img.png" />
                                        <span>1</span>
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <p>
                                        <b className="p_name">
                                            밀키트 이름
                                        </b>
                                        <span className="sub_title">밀키트 소개</span>
                                    </p>
                                    <span className="product_sale per">
                                        <span className="before_p">32,900원</span>
                                        <b>26,900</b>원
                                        <span className="sale_per">19%</span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pic">
                                    <p className="pro_img" id="best2">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/best.png" />
                                    </p>
                                    <p className="pic_hover" id="best2_hover">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="number">
                                        <img src="/img/best_img.png" />
                                        <span>2</span>
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <p>
                                        <b className="p_name">
                                            밀키트 이름
                                        </b>
                                        <span className="sub_title">밀키트 소개</span>
                                    </p>
                                    <span className="product_sale per">
                                        <span className="before_p">32,900원</span>
                                        <b>26,900</b>원
                                        <span className="sale_per">19%</span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pic">
                                    <p className="pro_img" id="best3">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/best.png" />
                                    </p>
                                    <p className="pic_hover" id="best3_hover">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="number">
                                        <img src="/img/best_img.png" />
                                        <span>3</span>
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <p>
                                        <b className="p_name">
                                            밀키트 이름
                                        </b>
                                        <span className="sub_title">밀키트 소개</span>
                                    </p>
                                    <span className="product_sale per">
                                        <span className="before_p">32,900원</span>
                                        <b>26,900</b>원
                                        <span className="sale_per">19%</span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pic">
                                    <p className="pro_img" id="best4">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/best.png" />
                                    </p>
                                    <p className="pic_hover" id="best4_hover">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="number">
                                        <img src="/img/best_img.png" />
                                        <span>4</span>
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <p>
                                        <b className="p_name">
                                            밀키트 이름
                                        </b>
                                        <span className="sub_title">밀키트 소개</span>
                                    </p>
                                    <span className="product_sale per">
                                        <span className="before_p">32,900원</span>
                                        <b>26,900</b>원
                                        <span className="sale_per">19%</span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pic">
                                    <p className="pro_img" id="best5">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/best.png" />
                                    </p>
                                    <p className="pic_hover" id="best5_hover">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="number">
                                        <img src="/img/best_img.png" />
                                        <span>5</span>
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <p>
                                        <b className="p_name">
                                            밀키트 이름
                                        </b>
                                        <span className="sub_title">밀키트 소개</span>
                                    </p>
                                    <span className="product_sale per">
                                        <span className="before_p">32,900원</span>
                                        <b>26,900</b>원
                                        <span className="sale_per">19%</span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pic">
                                    <p className="pro_img" id="best6">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/best.png" />
                                    </p>
                                    <p className="pic_hover" id="best6_hover">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="number">
                                        <img src="/img/best_img.png" />
                                        <span>6</span>
                                    </p>
                                </div>
                                <div className="pro_txt">
                                    <p>
                                        <b className="p_name">
                                            밀키트 이름
                                        </b>
                                        <span className="sub_title">밀키트 소개</span>
                                    </p>
                                    <span className="product_sale per">
                                        <span className="before_p">32,900원</span>
                                        <b>26,900</b>원
                                        <span className="sale_per">19%</span>
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default List;