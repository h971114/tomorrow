import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DaumPostCode from 'react-daum-postcode';


import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';

class Find extends React.Component {
    constructor(props) {
        super();

        const { cookies } = props;
        this.state = {
            modalOpen: false,
            isdaumpost: false,
            checkEmail: false,
            checkMobile: false,
            checkPw: false,
            addr1B: false,
            addr2B: false,
            checkId: false,
            checkName: false
        }
    }

    handleAddress = (data) => {
        let AllAddress = data.address;
        let extraAddress = '';
        let zoneCodes = data.zonecode;

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            AllAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        this.setState({
            fullAddress: AllAddress,
            zoneCode: zoneCodes,
            addr1B: true,
            modalOpen: false
        })
        document.getElementById('zipcode').value = zoneCodes;
        document.getElementById('addr1').value = AllAddress;
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

    htChange = (e) => {
        this.setState({
            hometax: e.target.value
        })
    }
    checkHT = () => {
        var number = this.state.hometax;
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/hometax/` + number, {
        }).then(res => {
            console.log(res);
        })
    }

    addr2Change = () => {
        var address2 = document.getElementById('addr2').value;
        if (address2 === "") {
            this.setState({
                addr2: null,
                addr2B: false
            })
        }
        else {
            this.setState({
                addr2: address2,
                addr2B: true
            })
        }
    }

    idChange = (e) => {
        console.log(e.target.value);
        this.setState({
            id: e.target.value
        })
    }
    checkID = (e) => {
        e.preventDefault();
        var idReg = /^[a-z|\S]+[a-z0-9|\S]{5,19}$/g;
        // console.log(!idReg.test(this.state.id));
        if (idReg.test(this.state.id)) {
            axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/member/same`, {
                id: this.state.id
            }).then(res => {
                console.log(res);
                if (res.data === "SUCCESS") {
                    this.setState({
                        checkId: true
                    });
                    document.getElementById('validateId').textContent = "사용가능한 아이디입니다.";
                    document.getElementById('validateId').setAttribute('style', 'color:blue');
                }
                else {
                    this.setState({
                        checkId: false
                    });
                    document.getElementById('validateId').textContent = "이미 존재하는 아이디입니다.";
                    document.getElementById('validateId').setAttribute('style', 'color: #ff3535');
                }
            });
        } else {
            this.setState({
                checkId: false
            });
            document.getElementById('validateId').textContent = "양식을 맞춰 주세요";
            document.getElementById('validateId').setAttribute('style', 'color: #ff3535');
        }
    };

    pwChange = (e) => {
        var pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&^])[A-Za-z\d$@$!^%*#?&|\S]{8,}$/g;

        if (!pwReg.test(e.target.value)) {
            this.setState({
                checkPw: false
            });
            // document.getElementById('joinbtn').disabled = true;
            document.getElementById('validatePw').textContent = "비밀번호는 8자 이상의 문자, 숫자, 특수 문자 조합이어야 합니다.";
            document.getElementById('validatePw').setAttribute('style', 'color: #ff3535');
        }
        else {
            document.getElementById('validatePw').textContent = "사용가능한 비밀번호 입니다.";
            document.getElementById('validatePw').setAttribute('style', 'color:blue');
            this.setState({
                pw: e.target.value,
                checkPw: true
            });
        }


        if (document.getElementById('password2').value !== e.target.value) {
            this.setState({
                checkPw: false
            });
            // document.getElementById('joinbtn').disabled = true;
            document.getElementById('validateCPw').textContent = "비밀번호가 다릅니다.";
            document.getElementById('validateCPw').setAttribute('style', 'color: #ff3535');
        }
        else {
            this.setState({
                checkPw: true
            })
            document.getElementById('validateCPw').textContent = "확인되었습니다.";
            document.getElementById('validateCPw').setAttribute('style', 'color:blue');
        }
    };

    cpwChange = (e) => {
        if (e.target.value === '') {
            this.setState({
                checkPw: false
            });
            // document.getElementById('joinbtn').disabled = true;
            document.getElementById('validateCPw').textContent = "";
        }
        else if (document.getElementById('password').value === e.target.value) {
            this.setState({
                checkPw: true
            })
            // if (this.state.checkId === true && this.state.checkEmail === true && this.state.checkMobile === true && this.state.checkName === true && this.state.checkNickname === true && this.state.checkPw === true) {
            //   document.getElementById('joinbtn').disabled = false;
            // }
            document.getElementById('validateCPw').textContent = "확인되었습니다.";
            document.getElementById('validateCPw').setAttribute('style', 'color:blue');
        }
        else {
            this.setState({
                checkPw: false
            });

            // document.getElementById('joinbtn').disabled = true;
            document.getElementById('validateCPw').textContent = "비밀번호가 다릅니다.";
            document.getElementById('validateCPw').setAttribute('style', 'color: #ff3535');
        }
        // // // console.log(this.state.checkPw);
    };

    mobileChange = (e) => {
        var mobileReg = /^\d{3}-\d{3,4}-\d{4}$/;
        if (e.target.value === '') {
            this.setState({
                checkMobile: false
            });
            document.getElementById('validateMobile').textContent = "'010-1234-5678' 양식으로 작성해주세요.";
        }
        else if (!mobileReg.test(e.target.value)) {
            this.setState({
                checkMobile: false
            });
            document.getElementById('validateMobile').textContent = "'010-1234-5678' 양식으로 작성해주세요.";
            document.getElementById('validateMobile').setAttribute('style', 'color: #ff3535');
        }
        else {
            document.getElementById('validateMobile').textContent = "사용가능한 연락처입니다.";
            document.getElementById('validateMobile').setAttribute('style', 'color:blue');
            this.setState({
                mobile: e.target.value,
                checkMobile: true
            });
        }

    }

    emailChange = (e) => {
        var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (e.target.value === '') {
            this.setState({
                checkEmail: false
            });
            document.getElementById('validateEmail').textContent = "메일수신이 가능한 이메일 주소를 입력해 주세요.";
        }
        else if (!emailReg.test(e.target.value)) {
            this.setState({
                checkEmail: false
            });
            // document.getElementById('joinbtn').disabled = true;
            document.getElementById('validateEmail').textContent = "이메일의 양식에 맞춰주세요!";
            document.getElementById('validateEmail').setAttribute('style', 'color: #ff3535');
        }
        else {
            document.getElementById('validateEmail').textContent = "사용가능한 이메일입니다.";
            document.getElementById('validateEmail').setAttribute('style', 'color:blue');
            this.setState({
                email: e.target.value,
                checkEmail: true
            });
        }
    }

    nameChange = (e) => {
        var nameReg = /^[가-힣|\S]{2,4}$/g;
        if (!nameReg.test(e.target.value)) {
            this.setState({
                checkName: false
            });
            // document.getElementById('joinbtn').disabled = true;
            document.getElementById('validateName').textContent = "이름은 2~4자 사이의 한국어 입니다.";
            document.getElementById('validateName').setAttribute('style', 'color: #ff3535');
        }
        else {
            document.getElementById('validateName').textContent = "";
            this.setState({
                name: e.target.value,
                checkName: true
            });
            // if (this.state.checkId === true && this.state.checkEmail === true && this.state.checkMobile === true && this.state.checkName === true && this.state.checkNickname === true && this.state.checkPw === true) {
            //   document.getElementById('joinbtn').disabled = false;
            // }
        }
    }

    join = (e) => {
        if (this.state.checkId === true && this.state.checkName === true &&
            this.state.checkEmail === true && this.state.checkMobile === true &&
            this.state.checkPw === true && this.state.addr1B === true &&
            this.state.addr2B === true) {
            var addr = this.state.zoneCode + " / " + this.state.fullAddress + " / " + this.state.addr2;
            axios.put(`${process.env.REACT_APP_SERVER_BASE_URL}/member`, {
                id: this.state.id,
                pw: this.state.pw,
                email: this.state.email,
                mobile: this.state.mobile,
                address: addr
            }).then(res => {
                console.log(res);
                alert("회원가입 완료");

            })
        }
        else {
            alert("안됨");
            console.log(this.state.checkEmail);
            console.log(this.state.checkMobile);
            console.log(this.state.checkPw);
            console.log(this.state.addr1B);
            console.log(this.state.addr2B);
        }
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
                <div className="inner_wrap join_page">
                    <div className="top_visual" style={{ background: `#f4f4f4` }}>
                        <p className="pc" style={{ backgroundImage: `url(/img/joinbanner.png)` }}></p>
                    </div>
                    <div className="size sub_page">
                        <h4 className="cs_title" style={{ marginTop: `50px` }}>회원가입</h4>
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
                                            <td>
                                                <p class="ipt_box">
                                                    <input type="text" name="id" id="id" class="ipt" onChange={this.idChange} />
                                                    <button class="ipt_btn" onClick={this.checkID} style={{ border: `none` }}>중복확인</button>
                                                    <span className="ptxt" id="validateId">아이디는 영어와 숫자 조합으로 5자 이상으로 입력해주세요.</span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="line2">
                                            <th>비밀번호</th>
                                            <td><input type="password" name="password" id="password" onChange={this.pwChange} className="ipt" />
                                                <span className="ptxt" id="validatePw">비밀번호는 숫자, 영문 조합으로 8자 이상으로 입력해주세요.</span> </td>
                                        </tr>
                                        <tr>
                                            <th className="pwConfirm">비밀번호 <span className="mbr">확인</span></th>
                                            <td><input type="password" name="password2" id="password2" onChange={this.cpwChange} className="ipt" />
                                                <span className="ptxt" id="validateCPw">다시한번 입력해 주세요.</span>
                                            </td>
                                        </tr>
                                        <tr className="name">
                                            <th>이름</th>
                                            <td>
                                                <input type="text" id="inputName" className="ipt" onChange={this.nameChange} />
                                                <span className="ptxt" id="validateName">한글 2~3글자의 이름을 작성해주세요.</span></td>
                                        </tr>
                                        <tr>
                                            <th className="phone">휴대폰번호</th>
                                            <td><input type="text" name="cell" id="cell" className="ipt" maxLength="15" onChange={this.mobileChange} />
                                                <span className="ptxt" id="validateMobile">'010-1234-5678' 양식으로 작성해주세요.</span>
                                            </td>

                                        </tr>

                                        <tr>
                                            <th className="email">이메일</th>
                                            <td className="e_txt"><input type="text" name="email" id="email" className="ipt2" onChange={this.emailChange} />
                                                <span className="ptxt" id="validateEmail">메일수신이 가능한 이메일 주소를 입력해 주세요. </span>
                                            </td>
                                        </tr>
                                        <tr className="addr_section">
                                            <th className="addr_th"><span>주소</span></th>
                                            <td colSpan="3" className="addr">
                                                <p className="clear">
                                                    <a onClick={this.openModal}><input type="text" name="zipcode" id="zipcode" className="wid200" readOnly /></a>
                                                    <a onClick={this.openModal} id="gopost">우편번호</a>
                                                </p>
                                                <p className="inline">
                                                    <input type="text" name="addr1" id="addr1" readOnly />
                                                </p>
                                                <p className="inline">
                                                    <input type="text" name="addr2" id="addr2" placeholder="상세 주소를 입력하세요" onChange={this.addr2Change} />
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="point">
                                            <th>사업자 등록번호</th>
                                            <td>
                                                <p class="ipt_box">
                                                    <input type="text" name="hometax" id="hometax" class="ipt" onChange={this.htChange} />
                                                    <button class="ipt_btn" onClick={this.checkHT} style={{ border: `none` }}>확인</button>
                                                    <span className="ptxt" id="validateId">사업자 분들만 입력해주세요!!</span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="color_btnSet clear">
                                    <div className="clear">
                                        <a className="btn" onClick={this.join}>회원가입</a>
                                        <a className="btn" href="/">취소</a>

                                    </div>
                                </div>
                            </div>
                        </form>
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
export default Find;