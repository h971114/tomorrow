import React, { useState, useEffect } from 'react';

import List from '../../components/SellRegist/List';
import Paging from '../../components/SellRegist/Paging';

const SellList = () => {

    return (
        <div id="sub">
            <div className="inner sub_menu all_menu">
                <List />
                <Paging />
            </div>
        </div>
    )
}
export default SellList;