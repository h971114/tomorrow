import React, { useState, useEffect } from 'react';

const MyPage = () => {
    return (
        <div id="sub">
            <div className="inner_wrap mypage">
                <div className="size sub_page">
                    <div className="cs_tab">
                        <div className="sub">
                            <ul className="clear">
                                <li className="itemList2">
                                    <a href="/mypage/" className="on">
                                        개인정보
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                                <li className="itemList2">
                                    <a href="/mypage/order/">
                                        주문내역
                                        <img src="/img/bbs_tab_arrow.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="cs_title">개인정보</h4>
                    <form name="board" id="board">
                        <div className="member bbs">
                            <table className="write mt30 join">
                                <caption className="display">
                                    회원정보
                                </caption>
                                <colgroup>
                                    <col width="13%" />
                                    <col width="*" />
                                </colgroup>
                                <tbody>
                                    <tr className="id_section">
                                        <th>아이디</th>
                                        <td>아이디넣기</td>
                                    </tr>
                                    <tr className="line2">
                                        <th>비밀번호</th>
                                        <td><input type="password" name="password" id="password" className="ipt" />
                                            <span className="ptxt">비밀번호는 숫자, 영문 조합으로 8자 이상으로 입력해주세요.</span> </td>
                                    </tr>
                                    <tr>
                                        <th className="pwConfirm">비밀번호 <span className="mbr">확인</span></th>
                                        <td><input type="password" name="password2" id="password2" className="ipt" />
                                            <span className="ptxt">다시한번 입력해 주세요.</span>
                                        </td>
                                    </tr>
                                    <tr className="name">
                                        <th>이름</th>
                                        <td>이름넣기</td>
                                    </tr>
                                    <tr>
                                        <th className="phone">휴대폰번호</th>
                                        <td><input type="text" name="cell" id="cell" className="ipt" value="휴대폰value" maxLength="15" /></td>
                                    </tr>

                                    <tr>
                                        <th className="email">이메일</th>
                                        <td className="e_txt"><input type="text" name="email" id="email" value="email값 넣기" className="ipt2" />
                                            <span className="ptxt">메일수신이 가능한 이메일 주소를 입력해 주세요. (단, 한메일은 제외, 메일수신이 안됩니다.)</span>
                                        </td>
                                    </tr>
                                    <tr className="addr_section">
                                        <th className="addr_th"><span>주소</span></th>
                                        <td colSpan="3" className="addr">
                                            <p className="clear">
                                                <input type="text" name="zipcode" id="zipcode" className="wid200" readOnly />
                                                <a>우편번호</a>
                                            </p>
                                            <p className="inline"><input type="text" name="addr1" id="addr1" readOnly /></p>
                                            <p className="inline"><input type="text" name="addr2" id="addr2" placeholder="상세 주소를 입력하세요" /></p>
                                        </td>
                                    </tr>
                                    <tr className="point">
                                        <th>적립금</th>
                                        <td><span className="point_span">1541</span> Point</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="color_btnSet clear">
                                <div className="clear">
                                    <a className="btn">확인</a>
                                    <a className="btn">취소</a>
                                    <a className="btn fl_r">회원탈퇴</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default MyPage;