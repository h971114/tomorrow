import React, { useEffect } from 'react';

const List = () => {
    return (
        <div className="pagenate btnSet clear">
            <ul className="paging">
                <li>
                    <a href="#" className="current">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
            </ul>
        </div>
    )
}
export default List;