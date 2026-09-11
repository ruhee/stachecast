import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { labels } from './data/common';
import img from "url:./assets/img.png";
import { yAxisImageLabelsPlugin } from './plugins/yAxisImages';
import React, { useEffect, useState, useMemo } from 'react';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
    labels: labels, 
    datasets: [
        {
            label: 'Four-seam fastball',
            data: [97.6, 97.2, 96.9, 96.1],
            backgroundColor: 'rgba(210, 45, 73, 0.5)',
            borderColor: 'rgba(147, 31, 51, 1)',
            borderWidth: 1,
        },
        { 
            label: 'Sinker',
            data: [96.1, 96.1, 95.8, 95],
            backgroundColor: 'rgba(254, 157, 0, 0.5)',
            borderColor: 'rgba(178, 110, 0, 1)',
            borderWidth: 1,
        },
        {
            label: 'Slider',
            data: [89.2, 89.1,88.8,88.2],
            backgroundColor: 'rgba(238, 231, 22, 0.5)',
            borderWidth: 1,
            borderColor: 'rgba(167, 162, 15, 1)',
        },
    ]
}

const labelImagesSources = [
    img,
    img,
    img,
    img
]

export const VeloBarChart = () => {
 const [loadedImages, setLoadedImages] = useState([]);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
      let isMounted = true;
      
      const promises = labelImagesSources.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous'; 
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
        });
      });
  
      Promise.all(promises).then((images) => {
        if (isMounted) {
          setLoadedImages(images);
          setImagesReady(true);
        }
      });
  
      return () => { isMounted = false; };
    }, []);

    const options = {
  responsive: true,
  indexAxis: 'y' as const,
  layout: {
padding: {
        left: 50 
      }
  },
  scales: {
    x: {
        beginAtZero:false,
    },
    y: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          // 5. Distance between the Y-axis baseline border and the text strings
          padding: 8, 
          display: false, 
        },
      },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '2026 Average Velo Per Type',
    },
    yAxisImageLabels: {
        images: loadedImages, 
        offset: 45,           
        width: 40,
        height: 40
      },
  },
}
return (
<div className="chart">
        <Bar options={options} data={data} plugins={[yAxisImageLabelsPlugin]}  />
    </div>
)
}