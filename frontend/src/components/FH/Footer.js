import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <div className="section main_cs clear">
                        <div className="size clear">
                            <div className="sec1 sec">
                                <div className="tb">
                                    <div className="tbc footerLogo">
                                    </div>
                                    <div className="tbc">
                                        <b className="cs_title">Customer Center</b>
                                        <span><img src="/img/main_cs_phone.png" />
                                        02-123-4567</span>
                                        <p>평일 오전 09 : 00 ~ 오후 06 : 00</p>
                                        <p>점심 오후 01 : 00 ~ 오후 02 : 00</p>
                                        <p>휴일, 주말에는 게시판을 이용해주세요</p>
                                        <p><b>Copyright &copy; 2021, Tomorrow Co.,Ltd</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sec2 sec">
                                <div className="tb">
                                    <div className="tbc">
                                        <b className="cs_title">Bank Info</b>
                                        <img src="/img/kb.png" />
                                        <p>123-45-6789-012</p>
                                        <span>예금주:(주)내일</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sec3 sec">
                                <b className="cs_title clear">
                                    <span>Notice</span>
                                    <a href="#">
                                        <img src="/img/best_plus.png"/>
                                    </a>
                                </b>
                                <div className="notice_list">
                                    <ul className="clear">
                                        <li>
                                            <a href="#">
                                                <p>
                                                    공지사항 1
                                                </p>
                                                <span className="notice_date">
                                                    2021-03-16
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <p>
                                                    공지사항 2
                                                </p>
                                                <span className="notice_date">
                                                    2021-03-16
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <p>
                                                    공지사항 3
                                                </p>
                                                <span className="notice_date">
                                                    2021-03-16
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <p>
                                                    공지사항 4
                                                </p>
                                                <span className="notice_date">
                                                    2021-03-16
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="more_bt">More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;