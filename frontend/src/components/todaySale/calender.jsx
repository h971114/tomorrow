import React, { useEffect } from 'react';

const Calender = () => {
    useEffect(() => {

        const timeSet = async () => {
            var d = new Date();
            var nowYyyy = Number(d.getFullYear());
            var nowMm = Number((d.getMonth() + 1));
            var nowDd = Number(d.getDate());

            var txtMm;
            if (nowMm < 10)
                txtMm = '0' + String(nowMm);
            else
                txtMm = String(nowMm);

            document.getElementById("txtMm").innerText = txtMm + "월";

            var week = new Array(0, 1, 2, 3, 4, 5, 6);

            var today = new Date(nowYyyy + '-' + nowMm + '-01').getDay();
            var totdays = new Date(nowYyyy, nowMm, 0).getDate();
            var todayLabel = week[today];

            if (totdays + todayLabel - 1 < 35) {
                if (totdays + todayLabel - 1 < 28) {
                    document.getElementById("cal_height").setAttribute("style", "height:868px")
                } else {
                    document.getElementById("cal_height").setAttribute("style", "height:1073px");
                }
                document.getElementById("lastCal").setAttribute("style", "display:none");
            } else {
                document.getElementById("cal_height").setAttribute("style", "height:1278px");
            }

            var date = 1;
            for (var i = todayLabel; i <= totdays + todayLabel - 1; i++) {
                var imgLink = '/img/calender_sample.png';
                imgLink.replace(/\@/g, "/");
                var str = "";
                if (date == nowDd) {
                    document.getElementById("d" + i).classList.add("today");
                    str += '<i class="today_line"></i>';
                }
                if (date < 10)
                    str += "<em class='day '> 0" + date + "</em>";
                else
                    str += "<em class='day '>" + date + "</em>";
                str += "<div>"
                str += '<p style="background-image:url(' + imgLink + ');">';
                str += "<img src='" + imgLink + "'/>";
                str += "</p>";
                str += "<span>밀키트 이름</span>";
                str += "</div>";
                document.getElementById("d" + i).innerHTML = str;
                document.getElementById("d" + i).classList.remove("null");
                date = date + 1;
            }
            // 0 > +1
            // 1 > +0
            // 2 > -1
            // 3 > -2
            // 4 > -3
            // 5 > -4
            // 6 > -5
        }

        timeSet();
    })

    return (
        <div className="price_calendar">
            <h4 className="month_title">
                <b id="txtMm"></b> 특가
            </h4>
            <div className="list_wrap" id="cal_height">
                <ul className="clear week">
                    <li>일</li>
                    <li>월</li>
                    <li>화</li>
                    <li>수</li>
                    <li>목</li>
                    <li>금</li>
                    <li>토</li>
                </ul>
                <ul className="clear">
                    <li className="null" id="d0"></li>
                    <li className="null" id="d1"></li>
                    <li className="null" id="d2"></li>
                    <li className="null" id="d3"></li>
                    <li className="null" id="d4"></li>
                    <li className="null" id="d5"></li>
                    <li className="null" id="d6"></li>
                </ul>
                <ul className="clear">
                    <li className="null" id="d7"></li>
                    <li className="null" id="d8"></li>
                    <li className="null" id="d9"></li>
                    <li className="null" id="d10"></li>
                    <li className="null" id="d11"></li>
                    <li className="null" id="d12"></li>
                    <li className="null" id="d13"></li>
                </ul>
                <ul className="clear">
                    <li className="null" id="d14"></li>
                    <li className="null" id="d15"></li>
                    <li className="null" id="d16"></li>
                    <li className="null" id="d17"></li>
                    <li className="null" id="d18"></li>
                    <li className="null" id="d19"></li>
                    <li className="null" id="d20"></li>
                </ul>
                <ul className="clear">
                    <li className="null" id="d21"></li>
                    <li className="null" id="d22"></li>
                    <li className="null" id="d23"></li>
                    <li className="null" id="d24"></li>
                    <li className="null" id="d25"></li>
                    <li className="null" id="d26"></li>
                    <li className="null" id="d27"></li>
                </ul>
                <ul className="clear">
                    <li className="null" id="d28"></li>
                    <li className="null" id="d29"></li>
                    <li className="null" id="d30"></li>
                    <li className="null" id="d31"></li>
                    <li className="null" id="d32"></li>
                    <li className="null" id="d33"></li>
                    <li className="null" id="d34"></li>
                </ul>
                <ul className="clear" id="lastCal">
                    <li className="null" id="d35"></li>
                    <li className="null" id="d36"></li>
                    <li className="null" id="d37"></li>
                    <li className="null" id="d38"></li>
                    <li className="null" id="d39"></li>
                    <li className="null" id="d40"></li>
                    <li className="null" id="d41"></li>
                </ul>
            </div>
        </div>
    )
}

export default Calender;