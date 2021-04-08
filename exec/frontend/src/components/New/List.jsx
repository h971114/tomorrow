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
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default List;