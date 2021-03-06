import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "../css/Chart.css";

function Chart() {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [
                {
                    label: 'Sales for Last Week',
                    data: [500567, 825000, 1065550, 678400, 724500],
                    backgroundColor: [
                        'rgba(225, 190, 231, 1)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div className="chart">
            <h3>Last week overview</h3>
            <div>
                <Line 
                    data={chartData}
                    options={{
                        responsive: true,
                        // title: {text: 'THICKNESS SCALE', display:true},
                        scales: {
                            // yAxes: [
                            //     {
                            //         ticks: {
                            //             autoSkip: true,
                            //             maxTicksLimit: 10,
                            //             beginAtZero: true
                            //         },
                            //         gridLines: {
                            //             display: false
                            //         }
                            //     }
                            // ],
                            xAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Chart
