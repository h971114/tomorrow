import React, { useEffect } from 'react';

const TopVisual = () => {

    useEffect(() => {
        document.getElementById("pcBanner").setAttribute("style", "background-image:url(/img/product_asia_bg.png)");
    }, [])

    return (
        <div className="top_visual">
            <p id="pcBanner">
                <img src="/img/product_bg.png" />
            </p>
        </div>
    )
}
export default TopVisual;