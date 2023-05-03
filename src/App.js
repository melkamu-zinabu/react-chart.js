import React, { useState } from 'react'
import BarChart from './BarChart'
import UserData from './Data'
import LineChart from './LineChart'
//import PieChart from './PieChart'
import PieChart from './PieChart'
export default function App() {
  const [userdata, setuserdata]=useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  })
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userdata} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userdata} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userdata} />
      </div>
    </div>
  )
}

