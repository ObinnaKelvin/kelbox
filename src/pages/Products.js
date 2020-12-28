import React from 'react'
import Product from '../components/Product';
import "../css/Products.css";
// import amber from '../assets/sales.png';
// import breathofgod from '../assets/breathofgod.jpg';
import instock from '../img/instock.png';
// import orders from '../img/orders.png';
import products from '../img/products.png';
// import stockvalue from '../img/stockvalue.png';
// import zerostock from '../img/zerostock.png';
// import weather from '../img/weather.png';
// import Chart from '../components/Chart';
// import TopSelling from '../components/TopSelling';
import { PerfumeData } from '../components/PerfumeData';

function Products() {
    return (
        <div className="products">
            {/* <h1>Products</h1> */}
            <div className="products__levelOne">
                <div className="productsIn">
                    <div className="icon">
                        <img src={products} alt="products icon" />
                    </div>
                    <div className="figures">8</div>
                    <p>Products</p>
                </div>
                <div className="productsInStock">
                    <div className="icon">
                        <img src={instock} alt="instock icon" />
                    </div>
                    <div className="figures">700,475</div>
                    <p>In Stock</p>
                </div>
            </div>
            <div className="products__levelTwo">
                {
                    PerfumeData.map((item, key) => (
                        <Product key={item.id} title={item.title} image={item.image} alt={item.alt} price={item.price} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Products
