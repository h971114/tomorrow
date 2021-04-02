import React, { useState, useEffect } from 'react';
import axios from "axios";

import TopVisual from '../../components/SellRegist/TopVisual';

import '../css/SellRegist.css';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const Regist = ({ history }) => {
    var editorRef = React.createRef();
    const [category, setCategory] = useState(1);
    const [title, setTitle] = useState("");
    const [subtitle, setsubTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [salePrice, setSalePrice] = useState(price);
    const [saleRate, setSaleRate] = useState(0);
    const [todaySalePrice, setTodaySalePrice] = useState(price);
    const [sSale, setSSale] = useState(false);
    const [sTodaySale, setSTodaySale] = useState(false);
    const [thumb, setThumb] = useState();
    const [thumb2, setThumb2] = useState();
    const [content, setContent] = useState("");

    const goBack = () => {
        history.goBack();
    };

    const selectChange = (e) => {
        var cate = document.getElementById("category").value;
        setCategory(cate);
        // console.log(cate);
    } // 카테고리 바꿀 때
    const titChange = (e) => {
        var tit = document.getElementById("tit").value;

        setTitle(tit);
        // console.log(titles);
    } // 상품명 바꿀때
    const subtitChange = (e) => {
        var subTit = document.getElementById("subTit").value;

        setsubTitle(subTit);
    } // 상품 소개 바꿀때
    const priceChange = (e) => {
        var price = document.getElementById("price").value;
        // console.log(price);
        setPrice(price);
    } // 금액 바뀔 때
    const amountChange = (e) => {
        var amount = document.getElementById("amount").value;

        setAmount(amount);
    }
    const saleChange = (e) => {
        var saleRate = document.getElementById("saleRate").value;
        // var salePrice = saleRate
        if (Number(saleRate) >= 100) {
            setSalePrice(0);
            alert('할인율은 최대 99%까지 가능합니다');
            document.getElementById("saleRate").value = '';
        } else {
            var salePrice = price / 100 * (100 - saleRate);
            setSalePrice(salePrice);
            setSaleRate(saleRate);
        }
    } // 세일 퍼센트 바뀔때
    const todaySaleChange = (e) => {
        var todaySaleRate = document.getElementById("todaySaleRate").value;

        var todaySalePrice = price / 100 * (100 - todaySaleRate);

        setTodaySalePrice(todaySalePrice);
    } //오늘의 할인율 바뀔 때

    const saleCChange = (e) => {
        if (sSale === false) {
            setSSale(true);
            document.getElementById("trSale").classList.remove("hidden");
            document.getElementById("saleRate").readOnly = false;
        } else {
            setSSale(false);
            document.getElementById("trSale").classList.add("hidden");
            document.getElementById("saleRate").readOnly = true;
            document.getElementById("saleRate").value = null;
            setSalePrice(0);
        }
    } // 세일 체크박스 바뀔때
    const tSaleCChange = (e) => {
        if (sTodaySale === false) {
            setSTodaySale(true);
            document.getElementById("trTodaySale").classList.remove("hidden");
            document.getElementById("todaySaleRate").readOnly = false;
        } else {
            setSTodaySale(false);
            document.getElementById("trTodaySale").classList.add("hidden");
            document.getElementById("todaySaleRate").readOnly = true;
            document.getElementById("todaySaleRate").value = null;
            setTodaySalePrice(0);
        }
    } // 오늘의 할인 체크박스 바뀔 때

    const editorChange = (e) => {
        setContent(editorRef.current.getInstance().getHtml());
    }

    const handleFileInput = (e) => {
        // setSelectedFile(e.target.files[0])

        var filename;
        if (window.FileReader) {
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop();
        }

        document.getElementById('upload-name1').value = filename;

        var file = e.target.files[0];
        console.log(file);
        var formData = new FormData();
        formData.append('data', file);
        formData.append('hostid', localStorage.getItem('id'));
        formData.append('dirNum', 1);
        axios.post('http://j4a305.p.ssafy.io/myapp/gallery/upload', formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            console.log(res);
            var dec = decodeURI(res.data);
            console.log(dec);
            setThumb(dec);
        }).catch(err => {
        })
    }

    const handleFileInput2 = (e) => {
        // setSelectedFile(e.target.files[0])

        var filename;
        if (window.FileReader) {
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop();
        }

        document.getElementById('upload-name2').value = filename;

        var file = e.target.files[0];
        // console.log(file);
        var formData = new FormData();
        formData.append('data', file);
        formData.append('hostid', localStorage.getItem('id'));
        formData.append('dirNum', 1);
        axios.post('http://j4a305.p.ssafy.io/myapp/gallery/upload', formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            console.log(res);
            var dec = decodeURI(res.data);
            console.log(dec);
            setThumb2(dec);
        }).catch(err => {
        })
    }

    const regist = (e) => {
        var id = localStorage.getItem('id');
        var nameLength = title.length;
        var subNameLength = subtitle.length;
        var contents = content;

        // console.log(contents);
        if (nameLength < 3) {
            alert("상품명은 3글자 이상 입력해주세요");
        }
        else if (subNameLength < 3) {
            alert("상품 소개는 3글자 이상 입력해주세요");
        }
        else if (price < 0) {
            alert("금액을 입력해주세요");
        }
        else if (amount < 0) {
            alert("판매 수량을 입력해주세요");
        }
        else if (sSale) {
            axios.post("http://j4a305.p.ssafy.io/myapp/menu", {
                seller_id: id,
                name: title,
                subname: subtitle,
                price: price,
                amount: amount,
                sell_amount: 0,
                discount_rate: saleRate,
                category: category,
                img1: thumb,
                img2: thumb2,
                detail: contents
            }).then(res => {
                if (res.data === "SUCCESS") {
                    alert("상품 등록을 완료하셨습니다.");
                    console.log(res);
                } else {
                    alert("상품 등록에 실패하셨습니다. 잠시후 다시 시도해주세요!");
                }
            })
        }
        else if (!sSale) {
            axios.post("http://j4a305.p.ssafy.io/myapp/menu", {
                seller_id: id,
                name: title,
                subname: subtitle,
                price: price,
                amount: amount,
                sell_amount: 0,
                category: category,
                img1: thumb,
                img2: thumb2,
                detail: contents
            }).then(res => {
                if (res.data === "SUCCESS") {
                    alert("상품 등록을 완료하셨습니다.");
                } else {
                    alert("상품 등록에 실패하셨습니다. 잠시후 다시 시도해주세요!");
                }
            })
        }
    }

    function priceOnlyNum(e) {
        var price = document.getElementById('price').value;
        if (e.nativeEvent.data === '-') {
            document.getElementById('price').value = price.slice(0, -1);
        }
        if (price === '0') {
            if (e.nativeEvent.data === '0') {
                document.getElementById('price').value = price.slice(0, -1);
            }
        }
    }

    function amountOnlyNum(e) {
        var amount = document.getElementById('amount').value;
        if (e.nativeEvent.data === '-') {
            document.getElementById('amount').value = amount.slice(0, -1);
        }
        if (amount === '0') {
            if (e.nativeEvent.data === '0') {
                document.getElementById('amount').value = amount.slice(0, -1);
            }
        }
    }

    function saleRateOnlyNum(e) {
        var saleRate = document.getElementById('saleRate').value;
        if (e.nativeEvent.data === '-') {
            document.getElementById('saleRate').value = saleRate.slice(0, -1);
        }
        if (saleRate === '0') {
            if (e.nativeEvent.data === '0') {
                document.getElementById('saleRate').value = saleRate.slice(0, -1);
            }
        }
    }

    return (
        <div id="sub">
            <div className="inner sub_menu all_menu">
                <TopVisual />

                <div className="size writeInputWrap">
                    <h2>상품 등록</h2>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th scope="row">카테고리</th>
                                <td colSpan="5">
                                    <select id="category" value={category} onChange={selectChange}>
                                        <option value="1" defaultValue>한  식</option>
                                        <option value="2">양  식</option>
                                        <option value="3">중식,일식</option>
                                        <option value="4">동남아</option>
                                        <option value="5">샐러드</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">상품 명</th>
                                <td colSpan="2">
                                    <input type="text" id="tit" onChange={titChange}></input>
                                </td>
                                <th scope="row">상품 소개</th>
                                <td colSpan="2">
                                    <input type="text" id="subTit" onChange={subtitChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">금액</th>
                                <td colSpan="2">
                                    <input type="number" min="0" id="price" onChange={priceChange} onInput={priceOnlyNum}></input>
                                    <label> 원</label>
                                </td>
                                <th scope="row">판매 수량</th>
                                <td colSpan="2">
                                    <input type="number" min="0" id="amount" onChange={amountChange} onInput={amountOnlyNum}></input>
                                    <label> 개</label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">할인 여부</th>
                                <td colSpan="5">
                                    <input type="checkBox" id="sale" onChange={saleCChange} checked={sSale}></input>
                                    <label htmlFor="sale">일반 할인</label>
                                    {/* <input type="checkBox" id="todaySale" onChange={tSaleCChange} checked={sTodaySale}></input>
                                    <label htmlFor="todaySale">오늘만 할인 (오늘만 할인이란? 등록 순서대로 한 달의 특정한 날 할인된 가격으로 판매)</label> */}
                                </td>
                            </tr>
                            <tr id="trSale" className="hidden">
                                <th scope="row">할인율</th>
                                <td colSpan="2">
                                    <input type="number" min="0" max="100" id="saleRate" onChange={saleChange} onInput={saleRateOnlyNum}></input>
                                    <label> %</label>
                                </td>
                                <th scope="row">할인가</th>
                                <td colSpan="2">
                                    <label id="salePrice">{salePrice} 원</label>
                                </td>
                            </tr>
                            {/* <tr id="trTodaySale" className="hidden">
                                <th scope="row">오늘만 할인 할인율</th>
                                <td colSpan="2">
                                    <input type="number" id="todaySaleRate" onChange={todaySaleChange} readOnly></input>
                                    <label> %</label>
                                </td>
                                <th scope="row">오늘만 할인 할인가</th>
                                <td colSpan="2">
                                    <label id="todaySalePrice">{todaySalePrice} 원</label>
                                </td>
                            </tr> */}
                            <tr>
                                <th scope="row">메인썸네일</th>
                                <td colSpan="2">
                                    <form className="filebox bs3-primary" encType="multipart/form-data">
                                        <input className="upload-name" id="upload-name1" placeholder="파일선택" disabled="disabled" />
                                        <label htmlFor="ex_filename">업로드</label>
                                        <input type="file" accept="image/*" id="ex_filename" className="upload-hidden" onChange={handleFileInput} />
                                    </form>
                                    {/* <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
                                    <button type="button" onClick={this.uploadImage}>업로드</button> */}
                                </td>
                                <th scope="row">서브썸네일</th>
                                <td colSpan="2">
                                    <form className="filebox bs3-primary" encType="multipart/form-data">
                                        <input className="upload-name" id="upload-name2" placeholder="파일선택" disabled="disabled" />
                                        <label htmlFor="ex_filename2">업로드</label>
                                        <input type="file" accept="image/*" id="ex_filename2" className="upload-hidden" onChange={handleFileInput2} />
                                    </form>
                                    {/* <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
                                    <button type="button" onClick={this.uploadImage}>업로드</button> */}
                                </td>
                            </tr>
                            <tr>

                            </tr>

                            <tr>
                                <th scope="row">내 용</th>
                                <td colSpan="5">
                                    <Editor
                                        placeholder="글쓰기"
                                        previewStyle="vertical"
                                        height="500px"
                                        initialEditType="wysiwyg"
                                        ref={editorRef}
                                        onChange={editorChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttonWrap">
                        <button className="cancleBtn" onClick={goBack}>취소하기</button>
                        <button className="submitBtn" onClick={regist}>등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Regist;