import React, { useState, useEffect } from 'react';

import TopVisual from '../../components/SellRegist/TopVisual';

import '../css/SellRegist.css';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const Regist = () => {
    var editorRef = React.createRef();
    const [category, setCategory] = useState(1);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [salePrice, setSalePrice] = useState(price);
    const [todaySalePrice, setTodaySalePrice] = useState(price);
    const [sSale, setSSale] = useState(false);
    const [sTodaySale, setSTodaySale] = useState(false);

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

        setTitle(subTit);
    } // 상품 소개 바꿀때
    const priceChange = (e) => {
        var price = document.getElementById("price").value;

        setPrice(price);
    } // 금액 바뀔 때
    const saleChange = (e) => {
        var saleRate = document.getElementById("saleRate").value;

        var salePrice = price / 100 * (100 - saleRate);

        setSalePrice(salePrice);
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
                                        <option value="4">면,파스타</option>
                                        <option value="5">분식, 야식</option>
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
                                    <input type="number" id="price" onChange={priceChange}></input>
                                    <label> 원</label>
                                </td>
                                <th scope="row">판매 수량</th>
                                <td colSpan="2">
                                    <input type="number" id="amount" onChange={subtitChange}></input>
                                    <label> 개</label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">할인 여부</th>
                                <td colSpan="5">
                                    <input type="checkBox" id="sale" onChange={saleCChange} checked={sSale}></input>
                                    <label htmlFor="sale">일반 할인</label>
                                    <input type="checkBox" id="todaySale" onChange={tSaleCChange} checked={sTodaySale}></input>
                                    <label htmlFor="todaySale">오늘만 할인 (오늘만 할인이란? 등록 순서대로 한 달의 특정한 날 할인된 가격으로 판매)</label>
                                </td>
                            </tr>
                            <tr id="trSale" className="hidden">
                                <th scope="row">할인율</th>
                                <td colSpan="2">
                                    <input type="number" id="saleRate" onChange={saleChange} readOnly></input>
                                    <label> %</label>
                                </td>
                                <th scope="row">할인가</th>
                                <td colSpan="2">
                                    <label id="salePrice">{salePrice} 원</label>
                                </td>
                            </tr>
                            <tr id="trTodaySale" className="hidden">
                                <th scope="row">오늘만 할인 할인율</th>
                                <td colSpan="2">
                                    <input type="number" id="todaySaleRate" onChange={todaySaleChange} readOnly></input>
                                    <label> %</label>
                                </td>
                                <th scope="row">오늘만 할인 할인가</th>
                                <td colSpan="2">
                                    <label id="todaySalePrice">{todaySalePrice} 원</label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">메인썸네일</th>
                                <td colSpan="2">
                                    <form className="filebox bs3-primary" encType="multipart/form-data">
                                        <input className="upload-name" id="upload-name" placeholder="파일선택" disabled="disabled" />
                                        <label htmlFor="ex_filename">업로드</label>
                                        <input type="file" accept="image/*" id="ex_filename" className="upload-hidden" onChange={e => this.handleFileInput(e)} />
                                    </form>
                                    {/* <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
                                    <button type="button" onClick={this.uploadImage}>업로드</button> */}
                                </td>
                                <th scope="row">서브썸네일</th>
                                <td colSpan="2">
                                    <form className="filebox bs3-primary" encType="multipart/form-data">
                                        <input className="upload-name" id="upload-name" placeholder="파일선택" disabled="disabled" />
                                        <label htmlFor="ex_filename">업로드</label>
                                        <input type="file" accept="image/*" id="ex_filename" className="upload-hidden" onChange={e => this.handleFileInput(e)} />
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
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttonWrap">
                        <button className="cancleBtn">취소하기</button>
                        <button className="submitBtn">등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Regist;