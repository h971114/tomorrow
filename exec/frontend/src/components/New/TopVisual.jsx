import React, { useEffect } from 'react';

const TopVisual = () => {

    useEffect(() => {
        document.getElementById("pcBanner").setAttribute("style", "background-image:url(/img/new_banner.png)");
    }, [])

    return (
        <div className="top_visual">
            <p id="pcBanner">
                <img src="/img/new_banner.png" />
            </p>
        </div>
    )
}
export default TopVisual;