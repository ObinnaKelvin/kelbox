import React from 'react';
import '../css/Home.css';
import sales from '../img/sales.png';
import revenue from '../img/revenue.png';
import instock from '../img/instock.png';
import orders from '../img/orders.png';

function Home() {
    return (
        <div className="home">
            <div className="home__title">
                <p>Hi, Goodmorning!</p>
            </div>
            <div className="home__levelOne">
                <div className="home__levelOne__sales">
                    <div className="head">
                        <div className="label"><small>This Month</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={sales} alt="sales icon"/>
                        </div>
                        <div className="details"><h2>8,475</h2>Sales</div>
                    </div>
                </div>
                <div className="home__levelOne__revenue">
                    <div className="head">
                        <div className="label"><small>This Month</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={revenue} alt="revenue icon"/>
                        </div>
                        <div className="details"><h2>8,475</h2>Revenue</div>
                    </div>
                </div>
                <div className="home__levelOne__inStock">
                    <div className="head">
                        <div className="label"><small>This Month</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={instock} alt="in stock icon"/>
                        </div>
                        <div className="details"><h2>8,475</h2>In Stock</div>
                    </div>
                </div>
                <div className="home__levelOne__orders">
                    <div className="head">
                        <div className="label"><small>This Month</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={orders} alt="revenue icon"/>
                        </div>
                        <div className="details"><h2>8,475</h2>Orders</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
