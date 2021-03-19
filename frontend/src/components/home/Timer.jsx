import React, { useEffect } from 'react';

const Timer = () => {
    useEffect(() => {
        const timeSet = async () => {

            var xmlHttp;

            function srvTime() {
                if (window.XMLHttpRequest) {
                    xmlHttp = new XMLHttpRequest();
                    xmlHttp.open('HEAD', window.location.href.toString(), false);
                    xmlHttp.setRequestHeader("Content-Type", "text/html");
                    xmlHttp.send('');
                    return xmlHttp.getResponseHeader("Date");
                }
            }
            var st = srvTime();
            var d = new Date(st);
            var nowYyyy = Number(d.getFullYear());
            var nowMm = Number((d.getMonth() + 1));
            var nowDd = Number(d.getDate());
            var nowHh = Number(d.getHours());
            var nowMi = Number(d.getMinutes());
            var nowSs = Number(d.getSeconds());

            var now = new Date(nowYyyy, nowMm, nowDd, nowHh, nowMi, nowSs); //현재시간 지정
            var later = new Date(nowYyyy, nowMm, nowDd, 23, 59, 59);
            // 일
            var days = (later - now) / 1000 / 60 / 60 / 24;
            var daysRound = Math.floor(days);
            //시
            var hours = (later - now) / 1000 / 60 / 60 - (24 * daysRound);
            var hoursRound = Math.floor(hours);
            //분
            var minutes = (later - now) / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
            var minutesRound = Math.floor(minutes);
            //초
            var seconds = (later - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
            var secondsRound = Math.round(seconds);

            var txthours;
            var txtminutes;
            var txtseconds;
            if (hoursRound < 10) { txthours = '0' + String(hoursRound) }
            else { txthours = String(hoursRound) }

            if (minutesRound < 10) { txtminutes = '0' + String(minutesRound) }
            else { txtminutes = String(minutesRound) }

            if (secondsRound < 10) { txtseconds = '0' + String(secondsRound) }
            else { txtseconds = String(secondsRound) }

            document.getElementById('firstH').innerText = txthours.substring(0, 1);
            document.getElementById('secondH').innerText = txthours.substring(1, 2);

            document.getElementById('firstM').innerText = txtminutes.substring(0, 1);
            document.getElementById('secondM').innerText = txtminutes.substring(1, 2);

            document.getElementById('firstS').innerText = txtseconds.substring(0, 1);
            document.getElementById('secondS').innerText = txtseconds.substring(1, 2);
        }

        let timer = setInterval(() => {
            timeSet();
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    })

    return (
        <div className="time">
            <span>오늘만 <b>특가</b></span>
            <span className="sale"><b>~ 50%</b> Sale</span>

            <p className="clock tb"><span>남은 시간</span><img src="img/timer.png" /></p>
            <div className="timer">
                <ul className="clear">
                    <li className="hour">
                        <span className="first" id="firstH"></span>
                        <span className="second" id="secondH"></span>
                    </li>
                    <li className="minute">
                        <span className="first" id="firstM"></span>
                        <span className="second" id="secondM"></span>
                    </li>
                    <li className="second">
                        <span className="first" id="firstS"></span>
                        <span className="second" id="secondS"></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Timer;