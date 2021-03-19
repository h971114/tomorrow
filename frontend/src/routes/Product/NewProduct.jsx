import React, { useState, useEffect } from 'react';

import '../css/New.css';

import TopVisual from '../../components/New/TopVisual';
import List from '../../components/New/List';
import Paging from '../../components/New/Paging';

const NewProduct = () => {

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
export default NewProduct;