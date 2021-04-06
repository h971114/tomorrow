import React from 'react';
import axios from 'axios';
import DaumPostCode from 'react-daum-postcode';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            posts: [],
        };
    }

    componentDidMount() {
        const { location } = this.props;
        console.log(location.state.posts);
        this.setState({
            posts: location.state.posts
        })

        var totPrices = 0;
        var sendprice = 0;
        for (var i = 0; i < location.state.posts.length; i++) {
            var realPrice = location.state.posts[i].price;
            var date = new Date().getDate();
            // console.log(date);
            if (date < 10)
                date = '0' + date;

            var days = location.state.posts[i].todaysale;
            days = days.substr(days.length - 2, 2);
            // console.log(days);
            if (date === days)
                realPrice = location.state.posts[i].price / 100 * (100 - location.state.posts[i].tdr);
            else if (location.state.posts[i].discount_rate > 0)
                realPrice = location.state.posts[i].price / 100 * (100 - location.state.posts[i].discount_rate);

            var thisPrice = realPrice * location.state.posts[i].amount;
            totPrices = totPrices + thisPrice;
            // console.log(totPrices);
        }
        if (totPrices > 30000) {
            sendprice = 0;
        } else {
            sendprice = 2500;
        }
        this.setState({
            productPrice: totPrices,
            productPriceString: totPrices.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            sendPay: sendprice,
            sendPayString: sendprice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            totPay: totPrices + sendprice,
            totPayString: (totPrices + sendprice).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            PaymentString: (totPrices + sendprice).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        })

        var Uid = localStorage.getItem('id');

        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/` + Uid
        ).then(res => {
            console.log(res.data);

            this.setState({
                name: res.data.name,
                email: res.data.email,
                points: res.data.points,
                mobile: res.data.mobile,
                addr: res.data.address
            })

            document.getElementById('order_name').value = this.state.name;
            document.getElementById('order_phone').value = this.state.mobile;
            document.getElementById('order_email').value = this.state.email;

            var points = this.state.points;
            var pointsString = points.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            this.setState({
                pointsString: pointsString
            })

            var addrs = this.state.addr;
            // // console.log(addrs);
            var addrArray = addrs.split(' / ');
            this.setState({
                zoneCode: addrArray[0],
                fullAddress: addrArray[1],
                addr2: addrArray[2]
            })

        });

        document.getElementById("usepoint").value = "0"
    }

    openModal = () => {
        // // console.log("열려따");
        this.setState({
            modalOpen: true
        })
    }
    closeModal = () => {
        // // console.log("닫혔따");
        this.setState({
            modalOpen: false
        })
    }

    goBack = () => {
        this.props.history.goBack();
    };

    getOrderInfo = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            document.getElementById("delivery_name").value = this.state.name;
            document.getElementById("delivery_name").readOnly = true;
            document.getElementById("delivery_p").value = this.state.mobile;
            document.getElementById("delivery_p").readOnly = true;
            document.getElementById("zipcode").value = this.state.zoneCode;
            document.getElementById("zipcode").readOnly = true;
            document.getElementById("addr1").value = this.state.fullAddress;
            document.getElementById("addr1").readOnly = true;
            document.getElementById("addr2").value = this.state.addr2;
            document.getElementById("addr2").readOnly = true;
        } else {
            document.getElementById("delivery_name").value = '';
            document.getElementById("delivery_name").readOnly = false;
            document.getElementById("delivery_p").value = '';
            document.getElementById("delivery_p").readOnly = false;
            document.getElementById("zipcode").value = '';
            document.getElementById("zipcode").readOnly = false;
            document.getElementById("addr1").value = '';
            document.getElementById("addr1").readOnly = false;
            document.getElementById("addr2").value = '';
            document.getElementById("addr2").readOnly = false;
        }
    }

    usePoints = (e) => {
        var usingPoint = 0;
        if (this.state.points > this.state.totPay) {
            usingPoint = this.state.totPay;
        } else {
            usingPoint = this.state.points;
        }
        var totPayStrings = (this.state.totPay - usingPoint).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        this.setState({
            usePoint: usingPoint,
            totPay: this.state.totPay - usingPoint,
            PaymentString: totPayStrings
        })
        document.getElementById('usepoint').value = usingPoint;
    }

    payStart = (e) => {
        var Uid = localStorage.getItem('id');

        var j = this.state.posts.length;
        var List = new Object();

        var arrnowpayHistory = new Array();
        for (var i = 0; i < j; i++) {
            var realPrice = this.state.posts[i].price;
            var date = new Date().getDate();
            // console.log(date);
            if (date < 10)
                date = '0' + date;

            var days = this.state.posts[i].todaysale;
            days = days.substr(days.length - 2, 2);
            // console.log(days);
            if (date === days)
                realPrice = this.state.posts[i].price / 100 * (100 - this.state.posts[i].tdr);
            else if (this.state.posts[i].discount_rate > 0)
                realPrice = this.state.posts[i].price / 100 * (100 - this.state.posts[i].discount_rate);

            var thisPrice = realPrice * this.state.posts[i].amount;

            // var itemID = "nowpay" + i;
            var nowpay = new Object();
            nowpay.item_name = this.state.posts[i].name;
            nowpay.item_code = this.state.posts[i].menu_id;
            nowpay.quantity = this.state.posts[i].amount;
            nowpay.total_mount = thisPrice;
            nowpay.tax_free_amount = 0;

            arrnowpayHistory.push(nowpay);
        }
        List = arrnowpayHistory;

        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/pay/kakaoPay/` + Uid, JSON.stringify(List),{
            headers: { "Content-Type": `application/json`,
                        "Access-Control-Allow-Origin": "*" },
            // params: {
            //     nowpay: List
            // }
        }).then(res => {
            console.log(res);
            console.log('data is ' + res.data);
            const url = res.data;
            window.open(url, "_blank");
            // if (res.data === "FAIL") {
            //     alert("찾으시는 정보가 없습니다.");
            // }
            // else {
            //     alert("찾으시는 아이디는 : " + res.data + " 입니다.");
            // }
        })
        console.log(List);
    }

    render() {
        const {
            modalOpen,
            fullAddress,
            zoneCode,
            addr2
        } = this.state;

        const width = 595;
        const height = 450;
        const modalStyle = {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "100",
            border: "1px solid #000000",
            overflow: "hidden"
        }
        return (
            <div id="sub">
                <div className="size order_page">
                    <div className="sequence">
                        <ul className="clear">
                            <li>
                                <div className="order">
                                    <div className="tb">
                                        <div className="tbc">
                                            <img src="/img/sequence1.png" alt="장바구니" />
                                            <div className="txt">
                                                <em>STEP01</em>
                                                <span>장바구니</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="order on">
                                    <div className="tb">
                                        <div className="tbc">
                                            <img src="/img/sequence2.png" alt="주문하기" />
                                            <div className="txt">
                                                <em>STEP02</em>
                                                <span>주문하기</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="order">
                                    <div className="tb">
                                        <div className="tbc">
                                            <img src="/img/sequence3.png" alt="주문확인" />
                                            <div className="txt">
                                                <em>STEP03</em>
                                                <span>주문확인</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="order last">
                                    <div className="tb">
                                        <div className="tbc">
                                            <img src="/img/sequence4.png" alt="주문완료" />
                                            <div className="txt">
                                                <em>STEP04</em>
                                                <span>주문완료</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="product_list">
                        <table>
                            <colgroup>
                                <col width="*" />
                                <col width="15%" />
                                <col width="5%" />
                                <col width="10%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>상품정보</th>
                                    <th>판매가</th>
                                    <th>수량</th>
                                    <th>합계</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.posts.map((post, idx) => {
                                        // console.log(post);
                                        var realPrice = post.price;
                                        var date = new Date().getDate();
                                        // console.log(date);
                                        if (date < 10)
                                            date = '0' + date;

                                        var days = post.todaysale;
                                        days = days.substr(days.length - 2, 2);
                                        // console.log(days);
                                        if (date === days)
                                            realPrice = post.price / 100 * (100 - post.tdr);
                                        else if (post.discount_rate > 0)
                                            realPrice = post.price / 100 * (100 - post.discount_rate);

                                        var realPriceString = realPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        var eachpay = post.amount * realPrice;
                                        var eachpayString = eachpay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        var checkBoxid = "pro" + (idx + 1);
                                        var pImgId = "pro" + (idx + 1) + "_img";
                                        var amountCntId = "amountCnt" + (idx + 1);
                                        var upAmountCntId = "1amountCnt" + (idx + 1);
                                        var downAmountCntId = "2amountCnt" + (idx + 1);
                                        var priceString = realPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        var payId = "eachtotal" + (idx + 1);

                                        return (
                                            <tr>
                                                <td className="pro_info">
                                                    <a style={{ cursor: `default` }}>
                                                        <div>
                                                            <p id="pro1_img" style={{ backgroundImage: `url(${post.img1})`, borderRadius: '5px' }}>
                                                                <img src="/img/product_bg.png" />
                                                            </p>
                                                            <span>{post.name}</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="m_info">
                                                    <em className="m_block">판매가 :</em> {realPriceString}원
                                    </td>
                                                <td className="m_info">
                                                    <em className="m_block">수량 :</em> {post.amount} </td>
                                                <td className="m_info bottom">
                                                    <em className="m_block">합계 :</em> {eachpayString}원
                                    </td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>

                    <div className="price_result clear">
                        <span>상품 구매금액 <b>{this.state.productPrice}</b>원	+ 배송비 <b>{this.state.sendPay}</b>원 <em className="mbr">= 총 합계 <b className="result">{this.state.totPayString}<span>원</span></b></em></span>
                    </div>

                    <div className="util_bt">
                        <a onClick={this.goBack}><img src="/img/pro_back.png" />이전 페이지</a>
                    </div>

                    <div className="order_info">
                        <h3>주문자 정보</h3>
                        <table className="write">
                            <colgroup>
                                <col width="13%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th className="first"><span>주문하시는 분 <em className="essential">*</em></span></th>
                                    <td className="order_n first">
                                        <input type="text" id="order_name" name="ordername" />
                                    </td>
                                </tr>
                                <tr>
                                    <th><span>휴대폰번호 <em className="essential">*</em></span></th>
                                    <td className="order_p">
                                        <input type="text" id="order_phone" name="orderhp" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="last"><span>이메일 주소 <em className="essential">*</em></span></th>
                                    <td className="order_e last">
                                        <input type="text" id="order_email" name="orderemail" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>배송지 정보</h3>
                        <table className="write">
                            <colgroup>
                                <col width="13%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th className="first"><span>배송지 확인</span></th>
                                    <td className="delivery_check first">
                                        <input type="checkbox" id="delivery_same" onChange={this.getOrderInfo} />
                                        <label htmlFor="delivery_same">주문자 정보와 동일</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th><span>받으시는 분<em className="essential">*</em></span></th>
                                    <td className="delivery_n">
                                        <input type="text" id="delivery_name" name="receiptname" />
                                    </td>
                                </tr>
                                <tr>
                                    <th><span>휴대폰번호 <em className="essential">*</em></span></th>
                                    <td className="delivery_p">
                                        <input type="text" id="delivery_p" name="receipthp" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="addr_th"><span>주소 <em className="essential">*</em></span></th>
                                    <td colSpan="3" className="addr">
                                        <p className="clear">
                                            <a onClick={this.openModal}><input type="text" name="zipcode" id="zipcode" className="wid200" readOnly /></a>
                                            <a onClick={this.openModal} id="gopost">우편번호</a>
                                            {/* 우편번호 api */}
                                        </p>
                                        <p className="inline">
                                            <input type="text" name="receiptaddr1" id="addr1" readOnly placeholder="기본주소" />
                                        </p>
                                        <p className="inline">
                                            <input type="text" name="receiptaddr2" id="addr2" placeholder="나머지주소" />
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="last"><span>남기실 말씀</span></th>
                                    <td className="last">
                                        <input type="text" id="comment" name="memo" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* 결제정보 */}

                        <h3>결제 정보</h3>
                        <table className="write">
                            <colgroup>
                                <col width="13%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th className="first"><span>상품 구매금액</span></th>
                                    <td className="first">
                                        {this.state.productPriceString}원
                                    </td>
                                </tr>
                                <tr>
                                    <th><span>배송비</span></th>
                                    <td>
                                        {this.state.sendPayString}원
                                    </td>
                                </tr>
                                <tr>
                                    <th className="point_th"><span>사용 적립금</span></th>
                                    <td className="point">
                                        <input type="number" min="0" name="usepoint" id="usepoint" />
                                        <a onClick={this.usePoints}>전액사용</a> <span>보유적립금 : <em id="nowpoint">{this.state.pointsString}</em></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="point_th"><span>적립 예상금액</span></th>
                                    <td className="point">
                                        <span className="getPoint">{this.state.productPrice / 100 * 3}</span>원
                                    </td>
                                </tr>
                                <tr>
                                    <th className="last"><span>총 결제 금액</span></th>
                                    <td className="total last">
                                        <span id="resultprice">{this.state.PaymentString}</span>원
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="last_check">
                        <input type="checkbox" id="last_ck" name="order_agree" />
                        <label htmlFor="last_ck">구매하실 상품의 결제정보를 확인하였으며, <em className="mbr">구매진행에 동의합니다.</em></label>

                        <div className="bt">
                            <a onClick={this.payStart}>결제하기</a>
                            {/* 백엔드 연동 예정 */}
                        </div>
                    </div>
                </div>
                <div className={modalOpen ? 'openModal modal' : 'modal'} >
                    <a onClick={this.closeModal} className="modalBack">
                        {modalOpen ? (
                            <div className="modalRow">
                                <div className="modalCell">
                                    <DaumPostCode
                                        onComplete={this.handleAddress}
                                        autoClose
                                        width={width}
                                        height={height}
                                        style={modalStyle}
                                        theme={null}
                                    />
                                </div>
                            </div>
                        ) : null}
                    </a>
                </div>
            </div>
        )
    }


}
export default Order;
