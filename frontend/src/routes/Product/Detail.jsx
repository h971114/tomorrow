import React, { useState, useEffect } from 'react';

import '../css/Product.css';

const Detail = () => {
    useEffect(() => {
        document.getElementById('detail_img').setAttribute('style', 'background-image:url("/img/view_pic_bg.png");');
    }, [])
    return (
        <div id="sub">
            <div className="inner view_inner size detail_view_inner">
                <div className="view_wrap">
                    <div className="goods clear">
                        <div className="image">
                            <p className="detail_img" id="detail_img">
                                <img src="/img/view_pic_bg.png" />
                            </p>
                        </div>

                        <div className="info">
                            <p className="icon">
                                <img src="/img/new.png" />
                                <img src="/img/sale.png" />
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
                                            <p className="product_sale per">
                                                <span className="sale_per">21<em>%</em></span><b>23,900</b>원
										<span className="before_p">29,900원</span>
                                            </p>

                                        </div>
                                    </li>
                                    <li className="clear">
                                        <b>제조사</b>
                                        <div><span>판매자</span></div>
                                    </li>
                                    <li className="clear">
                                        <b>재고</b>
                                        <div><span>재고 갯수</span></div>
                                    </li>
                                    <li className="clear">
                                        <b>배송비</b>
                                        <div><span>금액</span></div>
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
                                <span><b className="price_val">23,900</b>원(1개)</span>
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
                                    <img src="/img/detail_sample.png" />
                                </p>
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

export default Detail;