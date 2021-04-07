import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';

class Find extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            pwconfirm: "",
            name: "",
            nickname: "",
            mobile: "",
            email: "",
            address: "",
            seller: 0,
            cert: null,
            tab: 0,
            signupsection: 0,
            findidcheck: false,
            findpwcheck: false,
        }
    }

    findPW = (e) => {
        e.preventDefault();
        if (this.state.id === "" || this.state.name === "" || this.state.email === "") {
            alert('정보를 다 입력해주세요');
        }
        else {
            axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/findpw`, {
                params: {
                    name: this.state.name,
                    id: this.state.id,
                    email: this.state.email,
                }
            }).then(res => {
                // console.log(res);
                if (res.data === "FAIL") {
                    alert("찾으시는 정보가 없습니다.");
                    // window.location.replace("/findpw");
                }
                else {
                    document.getElementById('findPW').setAttribute('style', 'display:none');
                    document.getElementById('findBtn').setAttribute('style', 'display:none');
                    document.getElementById('changeBtn').setAttribute('style', 'display:inline-block');
                    document.getElementById('changePW').setAttribute('style', 'display:inline-block');
                    axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/${this.state.id}`, {
                        id: this.state.id,
                    }).then(res => {
                        console.log(res);
                        // document.getElementById('checkNickName').disabled = true;
                        this.setState({
                        id: res.data.id,
                        pw: res.data.pw,
                        name: res.data.name,
                        nickname: res.data.nickname,
                        email: res.data.email,
                        mobile: res.data.mobile,
                        address: res.data.address,
                        seller: res.data.seller,
                        cert: res.data.cert,
                        })
                        alert("변경하실 비밀번호를 입력해주세요.");
                    });
                }
            })
        }
    }

    changePW = (e) => {
        console.log(this.state)
        e.preventDefault();
        // 비밀번호 위에 입력이 이거
        // this.state.pw;
        //비밀번호 아래 입력이 이거
        // this.state.pwconfirm;

        if (this.state.pw !== this.state.pwconfirm) {
            alert("입력한 비밀번호가 다릅니다 다시 입력해주세요!!");
        } else {
            axios.put(`${process.env.REACT_APP_SERVER_BASE_URL}/member/findpw`, {
                id: this.state.id,
                pw: this.state.pw,
                mobile: this.state.mobile,
                address: this.state.address,
                email: this.state.email,
            }).then(res => {
                console.log(res);
                // document.getElementById('checkNickName').disabled = true;
                this.setState({
                id: res.data.id,
                pw: res.data.pw,
                name: res.data.name,
                nickname: res.data.nickname,
                email: res.data.email,
                mobile: res.data.mobile,
                address: res.data.address,
                seller: res.data.seller,
                cert: res.data.cert,
                })
                alert("비밀번호 변경이 완료되었습니다.\n원활한 이용을 위해 재 로그인 해주세요!");
                this.logout();
            });
        }
    }


    idChange = (e) => this.setState({ id: e.target.value });
    pwChange = (e) => this.setState({ pw: e.target.value });
    cpwChange = (e) => this.setState({ pwconfirm: e.target.value });
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
                                            to={{
                                                pathname: `/findid`
                                            }}
                                        >아이디 찾기</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={{
                                                pathname: `/findpw`
                                            }}
                                            className="on"
                                        >비밀번호 찾기</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="find_id">
                                <form name="board" id="board" className="login_form find_form">
                                    <fieldset>
                                        <div className="login_box" id="findPW">
                                            <p>
                                                <img src="/img/login_id.png" />
                                                <input id="signInName" className="realInput valid" type="text" placeholder="이름" onChange={this.nameChange} />
                                            </p>
                                            <p>
                                                <img src="/img/login_pw.png" />
                                                <input id="signInID" className="realInput valid" type="text" placeholder="아이디" onChange={this.idChange} />
                                            </p>
                                            <p>
                                                <img src="/img/login_pw.png" />
                                                <input id="signInEmail" className="realInput valid" type="text" placeholder="이메일" onChange={this.emailChange} />
                                            </p>
                                        </div>
                                        <div className="login_box" id="changePW" style={{ display: `none` }}>
                                            <p>
                                                <img src="/img/login_pw.png" />
                                                <input id="signInID" className="realInput valid" type="password" placeholder="비밀번호" onChange={this.pwChange} />
                                            </p>
                                            <p>
                                                <img src="/img/login_pw.png" />
                                                <input id="signInEmail" className="realInput valid" type="password" placeholder="비밀번호 확인" onChange={this.cpwChange} />
                                            </p>
                                        </div>
                                        <div className="login_btn">
                                            <input type="submit" value="비밀번호 찾기" id="findBtn" onClick={this.findPW} />
                                            <input type="submit" value="비밀번호 변경" id="changeBtn" style={{ display: `none` }} onClick={this.changePW} />
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