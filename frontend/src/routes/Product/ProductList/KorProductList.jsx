import React, { useState, useEffect } from 'react';

import TopVisual from '../../../components/Product/TopVisual/TopVisualKor';
import List from '../../../components/Product/List/ListKor';
import Paging from '../../../components/Product/Paging';

const KorProductList = () => {

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
export default KorProductList;