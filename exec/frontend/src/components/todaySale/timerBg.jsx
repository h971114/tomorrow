import React, { useEffect } from 'react';

const TimerBg = () => {
    useEffect(() => {
        const timeSet = async () => {
            var d = new Date();
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

            document.getElementById('hour1').innerText = txthours.substring(0, 1);
            document.getElementById('hour2').innerText = txthours.substring(1, 2);

            document.getElementById('min1').innerText = txtminutes.substring(0, 1);
            document.getElementById('min2').innerText = txtminutes.substring(1, 2);

            document.getElementById('sec1').innerText = txtseconds.substring(0, 1);
            document.getElementById('sec2').innerText = txtseconds.substring(1, 2);

            var txtDd;
            if (nowDd < 10)
                txtDd = '0' + String(nowDd);
            else
                txtDd = String(nowDd);

            document.getElementById("days").innerText = txtDd;
        }

        document.getElementById("timerBg").setAttribute("style", "background-image:url('/img/today_bg.png')");

        let timer = setInterval(() => {
            timeSet();
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    })

    return (
        <div className="sub_visual tb" id="timerBg">
            <div className="size">
                <p className="date">
                    <img src="/img/today_date.png" />
                    <span>TODAY</span>
                    <b id="days"></b>
                </p>
                <div className="timer">
                    <div className="img">
                        <div className="tb">
                            <div className="tbc">
                                <img src="/img/today_timer.png" />
                                <b>남은시간<span> 특가</span></b>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <div className="tb">
                            <div className="tbc">
                                <ul className="clear">
                                    <li className="hour">
                                        <span className="first" id="hour1"></span>
                                        <span className="second" id="hour2"></span>
                                    </li>
                                    <li className="minute">
                                        <span className="first" id="min1"></span>
                                        <span className="second" id="min2"></span>
                                    </li>
                                    <li className="second">
                                        <span className="first" id="sec1"></span>
                                        <span className="second" id="sec2"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TimerBg;



/*


*/