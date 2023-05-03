import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";


function LineChart({chartData}) {
  return (
    <div>
     <Line data={chartData} />
    </div>
  )
}

export default LineChart

