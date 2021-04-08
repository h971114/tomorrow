import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import TopVisual from '../../components/CsCenter/TopVisual';

const Faq = () => {

    const show = (e, o) => {
        // // // console.log(document.getElementById(e).classList.contains('on'));
        // // // console.log(document.getElementById(e).classList.contains('on'));
        if (document.getElementById(e).classList.contains('on')) {
            document.getElementById(o).setAttribute('style', 'display:none');
            document.getElementById(e).classList.remove('on');
        } else {
            document.getElementById(o).setAttribute('style', 'display:table-row');
            document.getElementById(e).classList.add('on');
        }
    }

    return (
        <div id="sub">
            <TopVisual></TopVisual>
            <div className="size faq cs">
                <div className="faq_wrap bbs">
                    <div className="cs_tab">
                        <div className="sub" >
                            <ul className="clear">
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/cscenter/notice/`
                                        }}
                                    >
                                        공지사항<img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/cscenter/faq/`
                                        }}
                                        className="on"
                                    >
                                        FAQ<img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                                <li className="itemList3">
                                    <Link
                                        to={{
                                            pathname: `/cscenter/qna/`
                                        }}
                                    >
                                        Q&amp;A<img src="/img/bbs_tab_arrow.png" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">FAQ</h4>
                    <table className="list qna">
                        <colgroup>
                            <col width="150px" />
                            <col width="*" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>제목</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="faqQ q1" id="faq1" onClick={(e, o) => show('faq1', 'q1')} >
                                <td className="part">고객센터</td>
                                <td className="title"><span className="blind">Q</span>고객센터 운영시간은 어떻게 되나요?</td>
                            </tr>
                            <tr id="q1" className="faqA" >
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
                                    <p>전화상담은 평일 오전 9시 ~ 18시까지 가능합니다.</p><p>고객센터 : ☎ 031.763.4666</p>						</td>
                            </tr>

                            <tr className="faqQ q2" id="faq2" onClick={(e, o) => show('faq2', 'q2')} >
                                <td className="part">회원</td>
                                <td className="title"><span className="blind">Q</span>회원탈퇴 후 재가입할 수 있나요?</td>
                            </tr>
                            <tr id="q2" className="faqA" >
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
                                    <p>탈퇴 후 즉시, 재가입을 하실 수 있습니다.</p><p>단, 기존 회원정보는 탈퇴 즉시 삭제되었기 때문에 기존 구매내역을 재가입한 회원정보로는 확인할 수 없습니다.</p>						</td>
                            </tr>

                            <tr className="faqQ q4" id="faq4" onClick={(e, o) => show('faq4', 'q4')} >
                                <td className="part">결제</td>
                                <td className="title"><span className="blind">Q</span>반품이 가능한 기준이 따로 있나요?</td>
                            </tr>
                            <tr id="q4" className="faqA">
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
                                    <p>\'전자상거래 등에서의 소비자보호에 관한 법률\'에 의거하여 상품 수령 후 7일이내 한해 반품을 요청할 수 있습니다.
</p><p>&nbsp;</p><p>
                                        ■ 반품이 가능한 경우&nbsp;</p><p>- 구매자 단순변심 : 물품 수령 후 7일 이내&nbsp;</p><p>-표시,광고 상이, 물품하자(초기불량)
: 물품을 수령한 날부터 3개월 이내,&nbsp;</p><p>&nbsp; 또는 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내&nbsp;</p><p>&nbsp;</p><p>

                                        ■ 반품이 불가능한 경우&nbsp;</p><p>- 상품 및 구성품을 분실하셨거나, 취급 부주의로 인한 파손/고장/오염의 경우&nbsp;</p><p>-고객님의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우</p><p>&nbsp;(계절상품, 식품 등)</p><p>&nbsp;(단, 상품의 내용을 확인하기 위하여 포장을 개봉한 경우는 제외)&nbsp;</p><p>-상품의 택(tag)제거 / 라벨 및 상품 훼손으로 상품의 가치가 현저히 감소된 경우</p>						</td>
                            </tr>

                            <tr className="faqQ q5" id="faq5" onClick={(e, o) => show('faq5', 'q5')} >
                                <td className="part">결제</td>
                                <td className="title"><span className="blind">Q</span>이미 주문을 했는데, 결제 수단을 변경할 수 있나요?</td>
                            </tr>
                            <tr id="q5" className="faqA">
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
                                    <p>이미 주문, 결제가 완료되었다면, 결제수단 변경은 불가합니다.
</p><p>상품이 판매 중인 경우에는 번거로우시더라도 취소 후 다시 한번 원하시는 결제수단으로 구매하여 주시기 바랍니다.</p>						</td>
                            </tr>

                            <tr className="faqQ q6" id="faq6" onClick={(e, o) => show('faq6', 'q6')} >
                                <td className="part">주문조회</td>
                                <td className="title"><span className="blind">Q</span>주문 내역은 어디에서 볼 수 있나요?</td>
                            </tr>
                            <tr id="q6" className="faqA">
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
							주문 내역은 [주문조회]에서 확인하실 수 있습니다.						</td>
                            </tr>

                            <tr className="faqQ q7" id="faq7" onClick={(e, o) => show('faq7', 'q7')} >
                                <td className="part">회원</td>
                                <td className="title"><span className="blind">Q</span>회원 탈퇴는 어떻게 하나요?</td>
                            </tr>
                            <tr id="q7" className="faqA">
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
                                    <p>로그인 후 마이페이지 &gt; 회원탈퇴 를 이용해주세요.
</p><p>
                                        회원 탈퇴 시 보유하고 계신 적립금은 자동 소멸 됩니다.</p>						</td>
                            </tr>

                            <tr className="faqQ q8" id="faq8" onClick={(e, o) => show('faq8', 'q8')} >
                                <td className="part">배송</td>
                                <td className="title"><span className="blind">Q</span>물품을 아직 받지 못했어요.</td>
                            </tr>
                            <tr id="q8" className="faqA">
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
                                    <p>고객센터로 문의주세요.(031.763.4666)
</p><p>상담 가능 시간 : AM 9:00 ~ PM 6:00(평일)&nbsp;</p><p>&nbsp;</p><p>
                                        물품 입금 후 5일 이내에도 받지 못하셨을 경우 고객센터로 연락주세요.&nbsp;</p><p>확인 후 신속하게 처리해드립니다.</p>						</td>
                            </tr>

                            <tr className="faqQ q9" id="faq9" onClick={(e, o) => show('faq9', 'q9')} >
                                <td className="part">회원</td>
                                <td className="title"><span className="blind">Q</span>회원가입을 할 때 이미 가입된 회원이라고 나와요~</td>
                            </tr>
                            <tr id="q9" className="faqA">
                                <td>&nbsp;</td>
                                <td className="title"><span className="blind">A</span>
                                    <p>이미 가입된 회원이라고 나올 경우, 전에 가입한 사실을 잊으셨는지 확인해 보시기 바랍니다.
</p><p>홈페이지 상단의 로그인-&gt; ID찾기, PW찾기 클릭하셔서 정보를 입력하시면 가입된 정보를 알 수 있습니다.</p>						</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Faq;