import React, { useEffect } from 'react';
import List from "./List"

export const Posts = ({ posts, loading }) => {

    if (loading) {

        const arrays = [1, 2, 3];

        const ArrayList = arrays.map(
            (array) => (
                <li>
                    <a href="#">
                        <div className="pic">
                            <p className="pro_img" style={{ backgroundColor: '#dadada', borderRadius: '5px' }}>
                                <img src="/img/best_img_sample.png" />
                            </p>
                            <p className="pic_hover" style={{ backgroundColor: '#dadada', borderRadius: '5px' }}>
                                <img src="/img/best_img_sample.png" />
                            </p>
                        </div>
                        <div className="pro_txt">
                            <p>
                                <b className="p_name" style={{ backgroundColor: '#dadada', borderRadius: '5px' }}></b>
                                <span className="sub_title" style={{ backgroundColor: '#dadada', borderRadius: '5px' }}></span>
                            </p>
                            <span className="product_sale per" style={{ backgroundColor: '#dadada', borderRadius: '5px' }}>
                                <span className="before_p"></span>
                                <b></b>
                                <span className="sale_per"></span>
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
                {posts.map(post => (
                    <List
                        key={post.id}
                        id={post.id}
                        name={post.name}
                        subname={post.subname}
                        category={post.category}
                        price={post.price}
                        discount_rate={post.discount_rate}
                        img1={post.img1}
                        img2={post.img2}
                        amount={post.amount}
                        sell_amount={post.sell_amount}
                        seller_id={post.seller_id}
                        subname={post.subname}
                        create_at={post.create_at}
                    />
                ))}
            </div>
        </div>
    )
}

export default Posts;