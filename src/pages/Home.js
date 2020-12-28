import React from 'react';
import '../css/Home.css';
// import numeral from 'numeral';
import CountUp from 'react-countup';
import sales from '../img/sales.png';
import revenue from '../img/revenue.png';
import instock from '../img/instock.png';
import orders from '../img/orders.png';
import products from '../img/products.png';
import stockvalue from '../img/stockvalue.png';
import zerostock from '../img/zerostock.png';
import weather from '../img/weather.png';
import Chart from '../components/Chart';
import TopSelling from '../components/TopSelling';

function Home() {
    return (
        <div className="home">
            <div className="home__title">
                <p className="p1">Hi Joshua, <em>Good morning!</em></p>
                <p>Here is what is happening with your store today.</p>
            </div>
            <div className="home__levelOne">
                <div className="home__levelOne__sales">
                    <div className="head">
                        <div className="label"><small>Today</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={sales} alt="sales icon"/>
                        </div>
                        <div className="details"><h2><CountUp end={8475} duration={3} separator=","/></h2>Sales</div>
                    </div>
                </div>
                <div className="home__levelOne__revenue">
                    <div className="head">
                        <div className="label"><small>Today</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={revenue} alt="revenue icon"/>
                        </div>
                        <div className="details"><h2><CountUp end={1008475} duration={3} separator="," prefix="₦"/></h2>Revenue</div>
                    </div>
                </div>
                <div className="home__levelOne__inStock">
                    <div className="head">
                        <div className="label"><small>Today</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={instock} alt="in stock icon"/>
                        </div>
                        <div className="details"><h2><CountUp end={700475} duration={3} separator=","/></h2>In Stock</div>
                    </div>
                </div>
                <div className="home__levelOne__orders">
                    <div className="head">
                        <div className="label"><small>Today</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={orders} alt="revenue icon"/>
                        </div>
                        <div className="details"><h2><CountUp end={208475} duration={3} separator=","/></h2>Orders</div>
                    </div>
                </div>
            </div>

            <div className="home__levelOne">
                <div className="home__levelOne__products">
                    <div className="head">
                        <div className="label"><small>Currently</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={products} alt="products icon"/>
                        </div>
                        <div className="details"><h2><CountUp end={8} duration={3} separator=","/></h2>Products</div>
                    </div>
                </div>
                <div className="home__levelOne__stockvalue">
                    <div className="head">
                        <div className="label"><small>Currently</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={stockvalue} alt="stockvalue icon"/>
                        </div>
                        <div className="details"><h2><CountUp end={11258475} duration={3} separator="," prefix="₦"/></h2>Stock Value</div>
                    </div>
                </div>
                <div className="home__levelOne__zeroStock">
                    <div className="head">
                        <div className="label"><small>Currently</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={zerostock} alt="zero stock icon"/>
                        </div>
                        <div className="details"><h2><CountUp end={0} duration={3} separator=","/></h2>Zero Stock</div>
                    </div>
                </div>
                <div className="home__levelOne__weather">
                    <div className="head">
                        <div className="label"><small>Weather</small></div>                    
                    </div>
                    <div className="body">
                        <div className="imageHolder">
                            <img src={weather} alt="weather icon"/>
                        </div>
                        <div className="details">
                            <h2>20 &#176;c</h2>
                            <small><em>Light rain showers</em></small>
                            Lagos
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__leveltwo">
                <Chart />
            </div>

            <div className="home__levelthree">
                <TopSelling />
            </div>
        
        </div>
    )
}

export default Home
