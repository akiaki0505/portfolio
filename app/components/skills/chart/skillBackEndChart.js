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
import { useEffect, useState } from 'react';

// Chart.jsのレーダーチャートに必要な要素を登録
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillBackEndChart = () => {
  const [darkMode, setDarkMode] = useState(false);
  // ページ読み込み時に localStorage から状態を復元
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode === 'true') setDarkMode(true);
  }, []);

  // ダークモード切替時に状態を保存
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
    
  const data = {
    labels: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'jQuery'],
    datasets: [
      {
        label: 'My skill level',
        data: [3, 1, 2, 2, 3],
        fill: true,
        borderColor: darkMode ? "rgb(16 185 129)" : "rgb(255, 99, 132)",
        /*backgroundColor: darkMode ? "rgb(16 185 129)" : "rgba(255, 99, 132, 0.2)",
        borderColor: darkMode ? "rgb(16 185 129)" : "rgb(255, 99, 132)",
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: "rgb(255, 99, 132)",*/
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        grid: {
          drawBorder: true,
          color: darkMode ? "rgb(20 184 166)" : "rgb(229 231 235)", //borderの色
        },
        ticks: {
          color: darkMode ? "rgb(20 184 166)" : "rgb(107 114 128)", //テキストの色
          font: {
            size: 16,
          },
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

export default SkillBackEndChart;
