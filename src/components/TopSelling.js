import React from 'react';
import perfume1 from '../assets/eaudeparfum.jpg';
import '../css/TopSelling.css';

function TopSelling() {
    return (
        <div className="topSelling">
            <div className="title">
                <h2>Top selling products</h2>
            </div>
            <div className="body">
                <div className="product">
                    <div className="image">
                        <img src={perfume1} alt="eau de parfum"/>
                    </div>
                    <div className="title">Eau De Parfum</div>
                    <div className="details">
                        <div className="price">
                            <p className="p1">Price</p>
                            <p className="p2"><strong>&#8358;1,500</strong></p>
                        </div>
                        <div className="totalSales">
                            <p className="p1">Total Sales</p>
                            <p className="p2"><strong>&#8358;1,790,500</strong></p>                            
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <img src={perfume1} alt="eau de parfum"/>
                    </div>
                    <div className="title">Eau De Parfum</div>
                    <div className="details">
                        <div className="price">
                            <p className="p1">Price</p>
                            <p className="p2"><strong>&#8358;1,500</strong></p>
                        </div>
                        <div className="totalSales">
                            <p className="p1">Total Sales</p>
                            <p className="p2"><strong>&#8358;1,790,500</strong></p>                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TopSelling
