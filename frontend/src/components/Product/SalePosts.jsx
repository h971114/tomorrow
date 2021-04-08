import React, { useEffect } from 'react';
import List from "./SaleList"

export const SalePosts = ({ posts, loading }) => {

    // // //console.log(posts);
    if (loading) {

        const arrays = [1, 2, 3];

        const ArrayList = arrays.map(
            (array) => (
                <li key={array}>
                    <a href="#">
                        <div className="pic skeletonUI" style={{ height: '345px' }}>
                            <p className="pro_img">
                                <img src="/img/best_img_sample.png" />
                            </p>
                            <p className="pic_hover">
                                <img src="/img/best_img_sample.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name skeletonUI"></b>
                                <span className="sub_title skeletonUI"></span>
                            </p>
                            <span className="product_sale per" >
                                <span className="before_p skeletonUI"></span>
                                <b></b>
                                <span className="sale_per skeletonUI"></span>
                            </span>
                        </div>
                    </a>
                </li>
            )
        );

        return (
            <div className="product_list new_list">
                <div className="product_wrap">
                    <ul className="clear">
                        {ArrayList}
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div className="product_list new_list">
            <div className="product_wrap">
                <ul className="clear">
                    {posts.map(post => (
                        <List
                            key={post.menu.id}
                            id={post.menu.id}
                            name={post.menu.name}
                            subname={post.menu.subname}
                            category={post.menu.category}
                            price={post.menu.price}
                            discount_rate={post.menu.discount_rate}
                            img1={post.menu.img1}
                            img2={post.menu.img2}
                            amount={post.menu.amount}
                            sell_amount={post.menu.sell_amount}
                            seller_id={post.menu.seller_id}
                            subname={post.menu.subname}
                            create_at={post.menu.create_at}
                        />
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SalePosts;