import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./Auth.css";
// import { GoogleLogin } from 'react-google-login';
// import  KaKaoLogin  from 'react-kakao-login';

class Auth extends React.Component {
    state = {
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
    
    componentDidMount() {
        this.tabZero();
        this.stateClear();
    };

    stateClear = (e) => {
        this.setState({
            id: "",
            pw: "",
            name: "",
            nickname: "",
            mobile: "",
            email: "",
            address: "",
            seller: 0,
            cert: null,
            findidcheck: false,
            findpwcheck: false,
        });
    }

    tabZero = (e) => {
        this.setState({ tab: 0, });
        this.stateClear();
    };

    tabOne = (e) =>{
        this.setState({ tab: 1, });
        this.stateClear();
    };

    tabTwo = (e) => {
        this.setState({ tab: 2 });
        this.stateClear();
    };

    tabThree = (e) => {
        this.setState({ tab: 3, });
        this.stateClear();
        this.signUpSectionZero();
    };

    signUpSectionZero = (e) => {
        this.setState({ signupsection: 0 });
    }
    signUpSectionOne = (e) => {
        this.setState({ signupsection: 1 });
    }
    signUpSectionTwo = (e) => {
        this.setState({ signupsection: 2 });
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

    signIn = (e) => {
        axios.post('http://127.0.0.1:8080/myapp/member/login', {
            id: this.state.id,
            pw: this.state.pw
        }).then(res => {
            // console.log(res.data);
            if (res.data.message === "SUCCESS") {
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("nickname", res.data.nickname);
                sessionStorage.setItem("id", res.data.id);
                window.location.replace("/");
            } else {
                alert("아이디와 비밀번호를 확인해주세요.");
            }
        })
    };

    signInKeyPress = (e) => {
        if (e.key === "Enter") { this.signIn(); }
    };

    findID = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8080/myapp/member/findid', {
            params: {
                name: this.state.name,
                email: this.state.email,
            }
            }).then(res => {
                console.log(res.data);
                if (res.data === "FAIL") {
                    alert("찾으시는 정보가 없습니다.");
                }
                else {
                    alert("찾으시는 아이디는 : "+ res.data+" 입니다.");
                }
            })
    }

    findPW = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8080/myapp/member/findpw', {
            params: {
                name: this.state.name,
                id: this.state.id,
                email: this.state.email,
            }
        }).then(res => {
            console.log(res.data);
            if (res.data === "FAIL") {
                alert("찾으시는 정보가 없습니다.");
                window.location.replace("/find");
            }
            else {
                alert("찾으시는 비밀번호는 : "+ res.data+" 입니다.");
            }
        })
    }

    signUp = (e) => {
        e.preventDefault();
        console.log(this.state);
        // console.log((this.state.seller === 1 && this.state.nickname === true && this.state.cert === true) || !this.state.seller)
        if((this.state.seller === 1) || !this.state.seller) {
            axios.post('http://127.0.0.1:8080/myapp/member/join', {
                id: this.state.id,
                pw: this.state.pw,
                name: this.state.name,
                nickname: this.state.nickname,
                mobile : this.state.mobile,
                email: this.state.email,
                address: this.state.address,
                seller: this.state.seller,
                cert: this.state.cert,
            }).then(res => {
                console.log(res);
                if (res.data === "SUCESS") {
                    alert('회원가입 성공! 로그인 창에서 로그인하세요.')
                    this.tabZero();
                } else {
                    alert('문제가 있습니다')
                }
            }).catch(err => {
                console.log(err);
            });
        };
    }

    render () {
        return (
            <div className="background">
                <div className="signInBlock">
                    <div className="signInTitle">
                        <img className="logo" src="../../img/logo.png" alt=""/>
                    </div>
                    <div className="signInBody">
                        {!this.state.tab && 
                        <Fragment>
                            <div className="authInput">
                                <input id="signInID" className="realInput" type="text" placeholder="아이디" onChange={this.idChange}/>
                            </div>
                            <div className="authInput">
                                <input id="signInPW" className="realInput" type="password" placeholder="비밀번호" onChange={this.pwChange} onKeyPress={this.signInKeyPress}/>
                            </div>
                            <div className="authInput">
                                <div className="signInBtn" onClick={this.signIn}>
                                    로그인
                                </div>
                            </div>
                            <hr />
                            <div className="signInFooter">
                                <p onClick={this.tabOne}>아이디 찾기</p>
                                <p onClick={this.tabTwo}>비밀번호 찾기</p>
                                <p onClick={this.tabThree}>회원가입</p>
                            </div>
                        </Fragment>
                        }
                        {this.state.tab === 1 && 
                        <Fragment>
                            <div className="authInput">
                                <input id="signInName" className="realInput" type="text" placeholder="이름" onChange={this.nameChange}/>
                            </div>
                            <div className="authInput">
                                <input id="signInEmail" className="realInput" type="text" placeholder="이메일" onChange={this.emailChange}/>
                            </div>
                            <div className="authInput">
                                <div className="signInBtn" onClick={this.findID}>
                                    아이디 찾기
                                </div>
                            </div>
                            <hr />
                            <div className="signInFooter">
                                <p onClick={this.tabZero}>로그인 창으로</p>
                                <p onClick={this.tabOne}>아이디 찾기</p>
                                <p onClick={this.tabThree}>회원가입</p>
                            </div>
                        </Fragment>
                        }
                        {this.state.tab === 2 &&
                        <Fragment>
                            <div className="authInput">
                                <input id="signInName" className="realInput" type="text" placeholder="이름" onChange={this.nameChange}/>
                            </div>
                            <div className="authInput">
                                <input id="signInID" className="realInput" type="text" placeholder="아이디" onChange={this.idChange}/>
                            </div>
                            <div className="authInput">
                                <input id="signInEmail" className="realInput" type="text" placeholder="이메일" onChange={this.emailChange}/>
                            </div>
                            <div className="authInput">
                                <div className="signInBtn" onClick={this.findPW}>
                                    비밀번호 찾기
                                </div>
                            </div>
                            <hr />
                            <div className="signInFooter">
                                <p onClick={this.tabZero}>로그인 창으로</p>
                                <p onClick={this.tabThree}>회원가입</p>
                            </div>
                        </Fragment>
                        }
                        {this.state.tab === 3 &&
                        <Fragment>
                            {this.state.signupsection === 0 &&
                            <div className="radioDiv">
                                <input id="buyer" className="signUpRadio" type="radio" name="sellerGroup" value="0" onChange={this.typeBuyer}/>
                                <label htmlFor="buyer" defaultChecked>구매회원</label>
                                <input id="seller" className="signUpRadio" type="radio" name="sellerGroup" value="1" onChange={this.typeSeller}/>
                                <label htmlFor="seller">판매회원</label>
                            </div>
                            }
                            {this.state.signupsection !== 0 ? null : (this.state.seller === 1 &&
                            <div>
                                <div className="authInput">
                                    <input id="signUpNickname" className="realInput" type="text" placeholder="상호명" onChange={this.nicknameChange} defaultValue={this.state.nickname}/>
                                </div>
                                <div className="authInput">
                                    <input id="signUpCert" className="realInput" type="text" placeholder="사업자등록번호" onChange={this.certChange} defaultValue={this.state.cert}/>
                                </div>
                            </div>
                            )}
                            {this.state.signupsection === 0 && 
                                <div className="signUpBtnDiv">
                                    <div></div>
                                    <div className="signUpBtn" onClick={this.signUpSectionOne}>
                                        다음
                                    </div>
                                </div>
                            }
                            {this.state.signupsection === 1 &&
                            <div>
                                <div className="authInput">
                                    <input id="signUpID" className="realInput" type="text" placeholder="아이디" onChange={this.idChange} defaultValue={this.state.id}/>
                                </div>
                                <div className="authInput">
                                    <input id="signUpPW" className="realInput" type="password" placeholder="비밀번호" onChange={this.pwChange} defaultValue={this.state.pw}/>
                                </div>
                                <div className="authInput">
                                    <input id="signUpPWConfirm" className="realInput" type="password" placeholder="비밀번호 확인" onChange={this.pwConfirmChange} defaultValue={this.state.pwconfirm}/>
                                </div>
                                <div className="signUpBtnDiv">
                                    <div className="signUpBtn" onClick={this.signUpSectionZero}>
                                        이전
                                    </div>
                                    <div className="signUpBtn" onClick={this.signUpSectionTwo}>
                                        다음
                                    </div>
                                </div>
                            </div>
                            }
                            {this.state.signupsection === 2 && 
                            <div>
                                <div className="authInput">
                                    <input id="signUpName" className="realInput" type="text" placeholder="이름" onChange={this.nameChange} defaultValue={this.state.name}/>
                                </div>
                                <div className="authInput">
                                    <input id="signUpEmail" className="realInput" type="text" placeholder="이메일" onChange={this.emailChange} defaultValue={this.state.email}/>
                                </div>
                                <div className="authInput">
                                    <input id="signUpAddress" className="realInput" type="text" placeholder="주소" onChange={this.addressChange} defaultValue={this.state.address}/>
                                </div>
                                <div className="authInput">
                                    <input id="signUpMobile" className="realInput" type="text" placeholder="전화번호" onChange={this.mobileChange} defaultValue={this.state.mobile}/>
                                </div>
                                <div className="signUpBtnDiv">
                                    <div className="signUpBtn" onClick={this.signUpSectionOne}>
                                        이전
                                    </div>
                                    <div className="signUpBtn" onClick={this.signUp}>
                                        회원가입
                                    </div>
                                </div>
                            </div>
                            }
                            <hr />
                            <div className="signInFooter">
                                <p onClick={this.tabZero}>로그인 창으로</p>
                                <p onClick={this.tabOne}>아이디 찾기</p>
                                <p onClick={this.tabTwo}>비밀번호 찾기</p>
                            </div>
                        </Fragment>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Auth;
