import React from 'react';
import '../css/Product.css';

function Product({title, image, alt, price}) {
    return (
        <div className="product">
            <div className="image">
                <img src={image} alt={alt}/>
            </div>
            <div className="title">{title}</div>
            <div className="details">
                <div className="price">
                    <p className="p1">Price</p>
                    <p className="p2"><strong>&#8358;{price}</strong></p>
                </div>
                <button className="addToCart">
                    <p className="p1">Add to Cart</p>                       
                </button>
            </div>
        </div>
    )
}

export default Product
