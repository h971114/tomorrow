import React, { useEffect } from 'react';

const List = () => {
    useEffect(() => {
        document.getElementById('check1').setAttribute("checked", "true");

        document.getElementById("new1").setAttribute("style", "background-image:url('/img/best_sample1.png')");
        document.getElementById("new1_hover").setAttribute("style", "background-image:url('/img/best_sample2.png')");
        document.getElementById("new2").setAttribute("style", "background-image:url('/img/best_sample3.png')");
        document.getElementById("new2_hover").setAttribute("style", "background-image:url('/img/best_sample4.png')");
        document.getElementById("new3").setAttribute("style", "background-image:url('/img/best_sample5.png')");
        document.getElementById("new3_hover").setAttribute("style", "background-image:url('/img/best_sample6.png')");
        document.getElementById("new4").setAttribute("style", "background-image:url('/img/best_sample7.png')");
        document.getElementById("new4_hover").setAttribute("style", "background-image:url('/img/best_sample8.png')");
        document.getElementById("new5").setAttribute("style", "background-image:url('/img/best_sample9.png')");
        document.getElementById("new5_hover").setAttribute("style", "background-image:url('/img/best_sample10.png')");
        document.getElementById("new6").setAttribute("style", "background-image:url('/img/best_sample11.png')");
        document.getElementById("new6_hover").setAttribute("style", "background-image:url('/img/best_sample12.png')");
        document.getElementById("new7").setAttribute("style", "background-image:url('/img/best_sample13.png')");
        document.getElementById("new7_hover").setAttribute("style", "background-image:url('/img/best_sample14.png')");
        document.getElementById("new8").setAttribute("style", "background-image:url('/img/best_sample15.png')");
        document.getElementById("new8_hover").setAttribute("style", "background-image:url('/img/best_sample16.png')");
        document.getElementById("new9").setAttribute("style", "background-image:url('/img/best_sample17.png')");
        document.getElementById("new9_hover").setAttribute("style", "background-image:url('/img/best_sample18.png')");
    }, [])

    return (
        <div className="size">
            <div className="radio_bt">
                <input type="radio" name="check" value="0" id="check1" />
                <label htmlFor="check1" className="first"><span>신상품</span></label>
                <input type="radio" name="check" value="1" id="check2" />
                <label htmlFor="check2"><span>낮은가격</span></label>
                <input type="radio" name="check" value="2" id="check3" />
                <label htmlFor="check3"><span>높은가격</span></label>
                <input type="radio" name="check" value="3" id="check4" />
                <label htmlFor="check4"><span>상품평</span></label>
            </div>
            <div className="product_list new_list">
                <div className="product_wrap">
                    <ul className="clear">
                        <li>
                            <a href="#">
                                <div className="pic">
                                    <p className="pro_img" id="new1">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new1_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new2">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new2_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new3">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new3_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new4">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new4_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new5">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new5_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new6">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new6_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new7">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new7_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new8">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new8_hover">
                                        <img src="/img/best_img_sample.png" />
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
                                    <p className="pro_img" id="new9">
                                        <img src="/img/best_img_sample.png" />
                                    </p>
                                    <p className="info_icon">
                                        <img src="/img/sale.png" />
                                        <img src="/img/new.png" />
                                    </p>
                                    <p className="pic_hover" id="new9_hover">
                                        <img src="/img/best_img_sample.png" />
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