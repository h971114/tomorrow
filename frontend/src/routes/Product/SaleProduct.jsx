import React, { useState, useEffect } from 'react';

import TopVisual from '../../components/Sale/TopVisual';
import List from '../../components/Sale/List';
import Paging from '../../components/Sale/Paging';

const SaleProduct = () => {

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
export default SaleProduct;