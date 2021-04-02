import axios from 'axios';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

import 'moment/locale/ko';


import '../css/Product.css';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            buyAmount: 1,

        }
    }

    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state.id);
        var no = location.state.id
        axios.get('http://j4a305.p.ssafy.io/myapp/menu/gm/' + no
        ).then(res => {
            this.setState({
                loading: false,
                amount: res.data.amount,
                category: res.data.category,
                create_at: res.data.create_at,
                detail: res.data.detail,
                discount_rate: res.data.discount_rate,
                id: res.data.id,
                img1: res.data.img1,
                name: res.data.name,
                price: res.data.price,
                sell_amount: res.data.sell_amount,
                seller_id: res.data.seller_id,
                subname: res.data.subname,
                salePrice: res.data.price / 100 * (100 - res.data.discount_rate),
                totPay: res.data.price / 100 * (100 - res.data.discount_rate)
            })

            var createYY = res.data.create_at.substring(0, 4);
            var createMM = res.data.create_at.substring(5, 7);
            var createDD = res.data.create_at.substring(8, 10);
            var createDate = moment([createYY, createMM - 1, createDD]);
            var nowDate = moment();

            if (createDate.diff(nowDate, 'days') > 3) {
                this.setState({
                    newP: false
                })
            } else {
                this.setState({
                    newP: true
                })
            }

            if (res.data.discount_rate > 0) {
                this.setState({
                    saleState: true
                })
            }

            // this.setState({
            //     salePrice: res.data.salePrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            //     price: res.data.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            // })
        });
    }


    downAmount = (e) => {
        var amounts = document.getElementById("amountCnt").value;
        var pay;
        if (this.state.buyAmount > 1) {
            amounts = Number(amounts) - 1;
            pay = amounts * this.state.salePrice;
            this.setState({
                buyAmount: amounts,
                totPay: pay
            })
        }

    }
    upAmount = (e) => {
        var amounts = document.getElementById("amountCnt").value;
        var pay;
        if (this.state.buyAmount < 9) {
            amounts = Number(amounts) + 1;
            pay = amounts * this.state.salePrice;
            this.setState({
                buyAmount: amounts,
                totPay: pay
            })
        }
    }

    render() {

        if (this.state.loading) {
            return (
                <div id="sub" >
                    <div className="inner view_inner size detail_view_inner">
                        <div className="view_wrap">
                            <div className="goods clear">
                                <div className="image">
                                    <p className="detail_img" id="detail_img" style={{ backgroundColor: '#dadada', borderRadius: '10px' }}>
                                        <img src="/img/view_pic_bg.png" />
                                    </p>
                                </div>

                                <div className="info">
                                    <p className="icon">
                                    </p>
                                    <div className="pro_txt">
                                        <b>
                                            밀키트 이름</b>
                            밀키트 설명(서브타이틀)					</div>
                                    <div className="item">
                                        <ul className="clear">
                                            <li className="price clear">
                                                <b>판매가</b>
                                                <div>
                                                    <span>--,---원</span>
                                                </div>
                                            </li>
                                            <li className="clear">
                                                <b>제조사</b>
                                                <div><span>판매자</span></div>
                                            </li>
                                            <li className="clear">
                                                <b>배송비</b>
                                                <div><span>---원</span></div>
                                            </li>
                                            <li className="amount clear">
                                                <b>주문수량</b>
                                                <div>
                                                    <a className="amount_up"></a>
                                                    <input type="text" className="amount txt amount_val" readOnly />
                                                    <a className="amount_down"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="total_price">
                                        <b>총 금액(수량):</b>
                                        <span><b className="price_val">--,---</b>원(-개)</span>
                                    </div>

                                    <div className="submit_bt clear">
                                        <a className="addCartBtn" id="pop1">장바구니</a>
                                        <a className="purchase">바로구매</a>
                                    </div>
                                </div>
                            </div>

                            <div className="multi_info">
                                <div id="detail1">
                                    <div className="tab">
                                        <ul className="clear">
                                            <li>
                                                <a href="#detail1" className="on">상품설명
                                            <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail2">유의사항 및
                                            <em className="mbr"> 구매안내</em>
                                                    <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail3">구매후기
                                            <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="detail_con">
                                        <p>
                                            <div className="loading_view">
                                                <div className="loader loader-7">
                                                    <div className="line line1"></div>
                                                    <div className="line line2"></div>
                                                    <div className="line line3"></div>
                                                    <span className="loader_text">Loading...</span>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            var codes = this.state.detail;
            return (
                <div id="sub" >
                    <div className="inner view_inner size detail_view_inner">
                        <div className="view_wrap">
                            <div className="goods clear">
                                <div className="image">
                                    <p className="detail_img" id="detail_img" style={{ backgroundImage: `url(${this.state.img1})`, borderRadius: `5px` }}>
                                        <img src="/img/view_pic_bg.png" />
                                    </p>
                                </div>

                                <div className="info">
                                    <p className="icon">
                                        {this.state.newP === true &&
                                            <img src="/img/new.png" />
                                        }
                                        {this.state.saleState === true &&
                                            <img src="/img/sale.png" />
                                        }
                                    </p>
                                    <div className="pro_txt">
                                        <b>
                                            {this.state.name}</b>
                                        {this.state.subname}</div>
                                    <div className="item">
                                        <ul className="clear">
                                            <li className="price clear">
                                                <b>판매가</b>
                                                <div>
                                                    {this.state.saleState === true &&
                                                        <p className="product_sale per">
                                                            <span className="sale_per">{this.state.discount_rate}<em>%</em></span>
                                                            <b>{this.state.salePrice}</b>원
                                                <span className="before_p">{this.state.price}원</span>
                                                        </p>

                                                    }

                                                </div>
                                            </li>
                                            <li className="clear">
                                                <b>제조사</b>
                                                <div><span>{this.state.seller_id}</span></div>
                                            </li>
                                            <li className="clear">
                                                <b>배송비</b>
                                                <div><span>0원</span></div>
                                            </li>
                                            <li className="amount clear">
                                                <b>주문수량</b>
                                                <div>
                                                    <a className="amount_up" onClick={this.downAmount} ></a>
                                                    <input type="text" className="amount txt amount_val" id="amountCnt" value={this.state.buyAmount} readOnly />
                                                    <a className="amount_down" onClick={this.upAmount}></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* 여기 */}
                                    <div className="total_price">
                                        <b>총 금액(수량):</b>
                                        <span><b className="price_val">{this.state.totPay}</b>원({this.state.buyAmount}개)</span>
                                    </div>

                                    <div className="submit_bt clear">
                                        <a className="addCartBtn" id="pop1">장바구니</a>
                                        <a className="purchase">바로구매</a>
                                    </div>
                                </div>
                            </div>

                            <div className="multi_info">
                                <div id="detail1">
                                    <div className="tab">
                                        <ul className="clear">
                                            <li>
                                                <a href="#detail1" className="on">상품설명
                                                <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail2">유의사항 및
                                                <em className="mbr"> 구매안내</em>
                                                    <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail3">구매후기
                                                <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="detail_con" dangerouslySetInnerHTML={{ __html: codes }}>
                                        {/* // {this.state.detail} */}
                                    </div>
                                </div>

                                <div id="detail2">
                                    <div className="tab">
                                        <ul className="clear">
                                            <li>
                                                <a href="#detail1">상품설명
                                                <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail2" className="on">유의사항 및
                                                <em className="mbr"> 구매안내</em>
                                                    <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail3">구매후기
                                                <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="detail_con second">
                                        <img alt="유의사항 안내" src="/img/product_notice.png" />
                                    </div>
                                </div>

                                <div id="detail3" className="third last">
                                    <div className="tab">
                                        <ul className="clear">
                                            <li>
                                                <a href="#detail1">상품설명
                                                <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail2">유의사항 및
                                                <em className="mbr"> 구매안내</em>
                                                    <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#detail3" className="on">구매후기
                                                <img src="/img/bbs_tab_arrow.png" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="detail_con">
                                        <div className="star">
                                            <p>
                                                <img src="/img/star1.png" />
                                                <img src="/img/star1.png" />
                                                <img src="/img/star1.png" />
                                                <img src="/img/star2.png" />
                                                <img src="/img/star2.png" />
                                            </p>
                                            <b>3</b>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <form name="reviewFrm" id="reviewFrm">
                                            <div className="c_write">
                                                <div className="top clear">
                                                    <select name="grade">
                                                        <option value="5">★★★★★</option>
                                                        <option value="4">★★★★☆</option>
                                                        <option value="3">★★★☆☆</option>
                                                        <option value="2">★★☆☆☆</option>
                                                        <option value="1">★☆☆☆☆</option>
                                                    </select>

                                                    <p className="file">
                                                        <input type="file" name="filename" id="filename1" />
                                                        <input type="file" name="filename2" id="filename2" />
                                                        <input type="file" name="filename3" id="filename3" />

                                                        <label htmlFor="filename1" className="file_label label1"><img src="/img/comment_camera.png" />사진추가</label>
                                                        <label htmlFor="filename2" className="file_label label2"><img src="/img/comment_camera.png" />사진추가</label>
                                                        <label htmlFor="filename3" className="file_label label3"><img src="/img/comment_camera.png" />사진추가</label>
                                                    </p>
                                                </div>

                                                <div className="c_wrap">
                                                    <textarea name="contents" placeholder="리뷰를 남겨 주세요!
                                                문의글 혹은 악의적인 비방글은 작성자의 동의 없이 삭제될 수 있습니다."></textarea>
                                                    <input type="submit" value="리뷰등록" />
                                                </div>
                                                <div id="picture" className="clear">

                                                </div>
                                            </div>
                                        </form>
                                        <div className="reply">
                                            <ul className="clear">
                                                <li>
                                                    <p className="txt no_data">
                                                        등록된 후기가 없습니다.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <a className="more_bt">More</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Detail;