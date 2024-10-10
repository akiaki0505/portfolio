"use client";
// components/RadarChart.js
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.jsのレーダーチャートに必要な要素を登録
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
    const tailwindColors = {
        primary: '#ff6384',  // Tailwindのテーマカラーに対応する値
        secondary: '#36a2eb',
      };
    
  const data = {
    labels: ['HTML', 'CSS', 'bootstrap', 'tailwind', 'wordpress'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [4, 4, 3, 2, 1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132) ',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
