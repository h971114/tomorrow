import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';

class Find extends React.Component {

    findID = (e) => {
        e.preventDefault();
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/findid`, {
            params: {
                name: this.state.name,
                email: this.state.email,
            }
        }).then(res => {
            // // // //console.log(res.data);
            if (res.data === "FAIL") {
                alert("찾으시는 정보가 없습니다.");
            }
            else {
                alert("찾으시는 아이디는 : " + res.data + " 입니다.");
            }
        })
    }

    idChange = (e) => this.setState({ id: e.target.value });
    pwChange = (e) => this.setState({ pw: e.target.value });
    pwConfirmChange = (e) => this.setState({ pwconfirm: e.target.value });
    nameChange = (e) => this.setState({ name: e.target.value });
    nicknameChange = (e) => this.setState({ nickname: e.target.value });
    mobileChange = (e) => this.setState({ mobile: e.target.value });
    emailChange = (e) => this.setState({ email: e.target.value });
    addressChange = (e) => this.setState({ address: e.target.value });
    typeSeller = (e) => this.setState({ seller: 1 });
    typeBuyer = (e) => this.setState({ seller: 0 });
    certChange = (e) => this.setState({ cert: e.target.value });

    render() {
        return (
            <div id="sub" className="idPwSearch">
                <div className="inner_wrap login">
                    <div className="size">
                        <div className="login_form">
                            <div className="login_txt">
                                <h2 className="title">아이디/비밀번호 찾기</h2>
                                <p className="title_txt">
                                    가입하신 내일 아이디와 <em className="mbr">비밀번호를 입력해주세요.</em>
                                </p>
                            </div>
                        </div>
                        <div className="find_wrap">
                            <div className="find_tab">
                                <ul className="clear">
                                    <li>

                                        <Link
                                            className="on"
                                            to={{
                                                pathname: `/findpw`
                                            }}
                                        >아이디 찾기</Link>
                                    </li>
                                    <li>

                                        <Link
                                            to={{
                                                pathname: `/findpw`
                                            }}
                                        >비밀번호 찾기</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="find_id">
                                <form name="board" id="board" className="login_form find_form">
                                    <fieldset>
                                        <div className="login_box">
                                            <p>
                                                <img src="/img/login_id.png" />
                                                <input id="signInName" className="realInput valid" type="text" placeholder="이름" onChange={this.nameChange} />
                                            </p>
                                            <p>
                                                <img src="/img/login_pw.png" />
                                                <input id="signInEmail" className="realInput valid" type="text" placeholder="이메일" onChange={this.emailChange} />
                                            </p>
                                        </div>
                                        <div className="login_btn">
                                            <input type="submit" value="아이디 찾기" onClick={this.findID} />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Find;