import React, { useState, useEffect } from 'react';

import '../css/Best.css';

import TopVisual from '../../components/Best/TopVisual';
import List from '../../components/Best/List';
import Paging from '../../components/Best/Paging';


const BestProduct = () => {

    return (
        <div id="sub">
            <div className="inner sub_menu all_menu">
                <TopVisual />
                <List />
                <Paging />
            </div>
        </div>
    )
}
export default BestProduct;