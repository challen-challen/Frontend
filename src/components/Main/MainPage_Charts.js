import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function MainPage_Charts() {
    const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 200, pv: 1200, amt: 1200 },
    { name: 'Page C', uv: 400, pv: 2400, amt: 1200 },
    { name: 'Page D', uv: 600, pv: 3000, amt: 1200 },
    { name: 'Page E', uv: 900, pv: 4000, amt: 1200 },
    { name: 'Page F', uv: 300, pv: 2000, amt: 1200 },
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 200, pv: 1200, amt: 1200 },
    { name: 'Page C', uv: 400, pv: 2400, amt: 1200 },
    { name: 'Page D', uv: 600, pv: 3000, amt: 1200 },
    { name: 'Page E', uv: 900, pv: 4000, amt: 1200 },
    { name: 'Page F', uv: 300, pv: 2000, amt: 1200 },
    ];

    return (
        <div className="MainPage_Charts">
            <div className="MainPage_Charts_title">
                <p>우리나라 온실 가스 배출 현황</p>
                <p>온실 가스를 줄이기위해 챌린지에 참여해주세요</p>
            </div>
            <div className="MainPage_Charts_charts">
                <LineChart width={350} height={350} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}

export default MainPage_Charts
