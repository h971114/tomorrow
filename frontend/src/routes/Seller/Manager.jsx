import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class SellPage extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            id: props.Uid,
            isSeller: props.isseller,
            posts: [],
            loading: false
        }
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/shipping/count`, {
            params: {
                seller_id: this.state.id,
                status: 1
            }
        }).then(res => {
            console.log(res);
        });
    }

    render() {
        const {
            id,
            isSeller,
            posts
        } = this.state
        return (
            <div id="sub" className="sellManage" >
                <div className="inner_wrap mypage">
                    <div className="size sub_page">
                        <div className="cs_tab">
                            <div className="sub">
                                <ul className="clear" id="sellerMenu">

                                    <li className="itemList3">
                                        <Link
                                            to={{
                                                pathname: `/mypage`,
                                                state: {
                                                    id: id,
                                                    isSeller: isSeller
                                                }
                                            }}
                                        >
                                            판매자 정보
                                    <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList3">
                                        <Link
                                            to={{
                                                pathname: `/sellpage/manage`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                            className="on"
                                        >
                                            판매 관리
                                    <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList3">
                                        <Link
                                            to={{
                                                pathname: `/sellpage/list`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                        >
                                            판매 목록
                                    <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="cs_title">판매 관리</h4>
                        <form name="board" id="board">
                            <div className="member bbs">
                                <table className="write mt30 join">
                                    <caption className="display">
                                        회원정보
                                    </caption>
                                    <colgroup>
                                        <col width="20%" />
                                        <col width="25%" />
                                        <col width="15%" />
                                        <col width="25%" />
                                        <col width="15%" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th className="tit">
                                                <img src="/img/sell_img1.png" />판매 현황</th>
                                            <th className="subtit">판매 중 상품</th>
                                            <td><span className="greenTxt">0</span>건</td>
                                            <th className="subtit">판매 완료</th>
                                            <td><span className="redTxt">0</span>건</td>
                                        </tr>
                                        <tr className="topLine">
                                            <th rowSpan="2" className="tit">
                                                <img src="/img/sell_img3.png" />배송 현황
                                                </th>
                                            <th className="subtit">배송 준비</th>
                                            <td><span className="greenTxt">1</span>건</td>
                                            <th rowSpan="2" className="subtit">배송 완료</th>
                                            <td rowSpan="2"><span className="greenTxt">2</span>건</td>
                                        </tr>
                                        <tr>
                                            <th className="subtit">배송 중</th>
                                            <td><span className="greenTxt">20</span>건</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="color_btnSet clear">
                                    <div className="clear">
                                        <a className="btn fl_r" href="/sellregist">상품 등록</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default SellPage;