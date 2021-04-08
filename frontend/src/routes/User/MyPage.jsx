import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import DaumPostCode from 'react-daum-postcode';
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';


class MyPage extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        // //console.log(props);

        const { cookies } = props;

        this.state = {
            modalOpen: false,
            isdaumpost: false,
            checkEmail: true,
            checkMobile: true,
            checkPw: false,
            addr1B: true,
            addr2B: true
        }
        if (props.Uid === "") {
            //console.log(sessionStorage.getItem('id'));
            //console.log(sessionStorage.getItem('isseller'));
            this.state = {
                id: sessionStorage.getItem('id'),
                isSeller: sessionStorage.getItem('isseller')
            }
        } else {
            //console.log(sessionStorage.getItem('id'));
            //console.log(sessionStorage.getItem('isseller'));
            this.state = {
                id: this.props.Uid,
                isSeller: this.props.isseller,
            }
        }
    }

    componentDidMount() {
        var id = this.state.id;
        var isSeller = this.state.isSeller;
        // //console.log(isSeller);

        if (isSeller == 0) {
            document.getElementById('sellerMenu').setAttribute("style", "display:none");
        } else if (isSeller == 1) {
            document.getElementById('userMenu').setAttribute("style", "display:none");
        }

        // this.setState({
        //     id: id,
        //     isSeller: isSeller
        // })

        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/member/` + id
        ).then(res => {
            // //console.log(res.data);

            this.setState({
                name: res.data.name,
                nowemail: res.data.email,
                email: res.data.email,
                points: res.data.points,
                mobile: res.data.mobile,
                addr: res.data.address
            })

            document.getElementById('cell').value = this.state.mobile;
            document.getElementById('email').value = this.state.email;

            var points = this.state.points;
            var pointsString = points.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            // var pointsString = "0";

            this.setState({
                pointsString: pointsString
            })

            var addrs = this.state.addr;
            // // // //console.log(addrs);
            var addrArray = addrs.split(' / ');
            this.setState({
                zoneCode: addrArray[0],
                fullAddress: addrArray[1],
                addr2: addrArray[2]
            })

        });
    }

    componentWillUnmount() {
        this.state = {
            modalOpen: false
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

        // // //console.log(data.zoneCode);
        // // //console.log(data.address);
    }

    openModal = () => {
        // // // //console.log("열려따");
        this.setState({
            modalOpen: true
        })
    }
    closeModal = () => {
        // // // //console.log("닫혔따");
        this.setState({
            modalOpen: false
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
        // // // // //console.log(this.state.checkPw);
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
        this.setState({
            email: e.target.value,
            checkEmail: false
        });
    }

    checkEmail = (e) => {
        e.preventDefault();
        var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (this.state.email === this.state.nowemail) {
            this.setState({
                checkEmail: true
            });
            document.getElementById('validateEmail').textContent = "기존 이메일과 동일합니다.";
            document.getElementById('validateEmail').setAttribute('style', 'color:blue');
        }
        else if (emailReg.test(this.state.email)) {
            document.getElementById('validateEmail').textContent = "중복 이메일 확인중입니다.";
            axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/member/sameemail`, {
                email: this.state.email
            }).then(res => {
                // // //console.log(res);
                if (res.data === "SUCCESS") {
                    this.setState({
                        checkEmail: true
                    });
                    document.getElementById('validateEmail').textContent = "사용가능한 이메일입니다.";
                    document.getElementById('validateEmail').setAttribute('style', 'color:blue');
                }
                else {
                    this.setState({
                        checkEmail: false
                    });
                    document.getElementById('validateEmail').textContent = "이미 존재하는 이메일입니다.";
                    document.getElementById('validateEmail').setAttribute('style', 'color: #ff3535');
                }
            });
        } else {
            this.setState({
                checkEmail: false
            });
            document.getElementById('validateEmail').textContent = "이메일의 양식에 맞춰주세요!";
            document.getElementById('validateEmail').setAttribute('style', 'color: #ff3535');
        }
    }

    // emailChange = (e) => {
    //     var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    //     if (e.target.value === '') {
    //         this.setState({
    //             checkEmail: false
    //         });
    //         document.getElementById('validateEmail').textContent = "메일수신이 가능한 이메일 주소를 입력해 주세요.";
    //     }
    //     else if (!emailReg.test(e.target.value)) {
    //         this.setState({
    //             checkEmail: false
    //         });
    //         // document.getElementById('joinbtn').disabled = true;
    //         document.getElementById('validateEmail').textContent = "이메일의 양식에 맞춰주세요!";
    //         document.getElementById('validateEmail').setAttribute('style', 'color: #ff3535');
    //     }
    //     else {
    //         document.getElementById('validateEmail').textContent = "사용가능한 이메일입니다.";
    //         document.getElementById('validateEmail').setAttribute('style', 'color:blue');
    //         this.setState({
    //             email: e.target.value,
    //             checkEmail: true
    //         });
    //     }
    // }

    modify = (e) => {
        if (this.state.checkEmail === true && this.state.checkMobile === true &&
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
                // //console.log(res);
                alert("됐음~~");
            })
        }
        else {
            alert("안됨");
            // //console.log(this.state.checkEmail);
            // //console.log(this.state.checkMobile);
            // //console.log(this.state.checkPw);
            // //console.log(this.state.addr1B);
            // //console.log(this.state.addr2B);
        }
    }

    fireUser = (e) => {
        axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/member/` + this.state.id, {
            id: this.state.id,
        }).then(res => {
            alert("회원탈퇴가 완료되었습니다.");
            this.logout();
        })
    }

    logout = (e) => {
        const { cookies } = this.props;

        cookies.remove('token');
        window.location.replace("/");
    };

    render() {
        const {
            modalOpen,
            fullAddress,
            zoneCode,
            addr2,
            id,
            isSeller
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
                <div className="inner_wrap mypage">
                    <div className="size sub_page">
                        <div className="cs_tab">
                            <div className="sub">
                                {/* 판매자 서브메뉴 */}
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
                                            className="on"
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
                                {/* 사용자 문제 */}
                                <ul className="clear" id="userMenu">
                                    <li className="itemList2">
                                        <Link
                                            to={{
                                                pathname: `/mypage`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                            className="on"
                                        >
                                            개인정보
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
                                    </li>
                                    <li className="itemList2">
                                        <Link
                                            to={{
                                                pathname: `/mypage/order`,
                                                state: {
                                                    id: this.state.id,
                                                    isSeller: this.state.isSeller
                                                }
                                            }}
                                        >
                                            주문내역
                                        <img src="/img/bbs_tab_arrow.png" />
                                        </Link>
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
                                            <td>{this.state.id}</td>
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
                                            <td>{this.state.name}</td>
                                        </tr>
                                        <tr>
                                            <th className="phone">휴대폰번호</th>
                                            <td><input type="text" name="cell" id="cell" className="ipt" maxLength="15" onChange={this.mobileChange} />
                                                <span className="ptxt" id="validateMobile">'010-1234-5678' 양식으로 작성해주세요.</span>
                                            </td>

                                        </tr>

                                        <tr>

                                            <th className="email">이메일</th>
                                            <td className="e_txt">
                                                <p className="ipt_box">
                                                    <input type="text" name="email" id="email" className="ipt" onChange={this.emailChange} />
                                                    <button className="ipt_btn" id="checkEmail" onClick={this.checkEmail} style={{ border: `none` }}>중복 확인</button>
                                                    <span className="ptxt" id="validateEmail">메일수신이 가능한 이메일 주소를 입력해 주세요. </span>
                                                </p>

                                            </td>
                                            {/* <th className="email">이메일</th>
                                            <td className="e_txt"><input type="text" name="email" id="email" className="ipt2" onChange={this.emailChange} />
                                                <span className="ptxt" id="validateEmail">메일수신이 가능한 이메일 주소를 입력해 주세요. </span>
                                            </td> */}
                                        </tr>
                                        <tr className="addr_section">
                                            <th className="addr_th"><span>주소</span></th>
                                            <td colSpan="3" className="addr">
                                                <p className="clear">
                                                    <a onClick={this.openModal}><input type="text" name="zipcode" id="zipcode" className="wid200" value={zoneCode == null ? "" : zoneCode} readOnly /></a>
                                                    <a onClick={this.openModal} id="gopost">우편번호</a>
                                                </p>
                                                <p className="inline">
                                                    <input type="text" name="addr1" id="addr1" value={fullAddress == null ? "" : fullAddress} readOnly />
                                                </p>
                                                <p className="inline">
                                                    <input type="text" name="addr2" id="addr2" placeholder="상세 주소를 입력하세요" onChange={this.addr2Change} value={addr2 == null ? "" : addr2} />
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="point">
                                            <th>적립금</th>
                                            <td><span className="point_span">{this.state.pointsString}</span> Point</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="color_btnSet clear">
                                    <div className="clear">
                                        <a className="btn" onClick={this.modify}>확인</a>
                                        <a className="btn" href="/">취소</a>
                                        <a className="btn fl_r" onClick={this.fireUser}>회원탈퇴</a>
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


export default withCookies(MyPage);