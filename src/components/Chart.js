import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "../css/Chart.css";

function Chart() {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
            <div><Line data={chartData}/></div>
        </div>
    )
}

export default Chart
