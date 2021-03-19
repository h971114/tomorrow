import React, { useState, useEffect } from 'react';

import TimerBg from '../../components/todaySale/timerBg';
import TodaySales from '../../components/todaySale/todaySales';
import Calender from '../../components/todaySale/calender';

import '../css/TodaySale.css';


const TodaySale = () => {


    return (
        <div id="sub">
            <div className="inner special">
                <TimerBg />

                <div className="size">
                    <TodaySales />
                    <Calender />
                </div>
            </div>
        </div>
    )
}
export default TodaySale;