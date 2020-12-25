import React from 'react'
import "../css/Products.css";
// import sales from '../img/sales.png';
// import revenue from '../img/revenue.png';
import instock from '../img/instock.png';
// import orders from '../img/orders.png';
import products from '../img/products.png';
// import stockvalue from '../img/stockvalue.png';
// import zerostock from '../img/zerostock.png';
// import weather from '../img/weather.png';
// import Chart from '../components/Chart';
// import TopSelling from '../components/TopSelling';

function Products() {
    return (
        <div className="products">
            {/* <h1>Products</h1> */}
            <div className="products__levelOne">
                <div className="productsIn">
                    <div className="icon">
                        <img src={products} alt="products icon" />
                    </div>
                    <div className="figures">25</div>
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

            </div>
        </div>
    )
}

export default Products
