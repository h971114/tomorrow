import React, { useEffect } from 'react';


const TopVisual = () => {

    useEffect(() => {
        document.getElementById('notice_top').setAttribute('style', 'background:#f5e07e');
        document.getElementById('top_pc').setAttribute('style', 'background-image: url(/img/cscenter_visual.png)');
    }, [])

    return (
        <div className="inner_wrap cscenter">
            <div className="top_visual" id="notice_top">
                <p className="pc" id="top_pc">
                    <img src="/img/cscenter_visual.png" />
                </p>
            </div>
        </div>
    )
}
export default TopVisual;