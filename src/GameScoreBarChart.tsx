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
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labelImagesSources = [
  img,
  img,
  img,
  img
];

export const data = {
    labels: labels, 
    datasets: [
        {
            label: 'Avg per type',
            data: [57.6, 58.7, 77.2, 66.2],
            backgroundColor: 'rgba(210, 45, 73, 0.5)',
            borderColor: 'rgba(147, 31, 51, 1)',
            borderWidth: 1,
          },
        { 
            label: 'Max per type',
            data: [77, 72, 82, 94],
            backgroundColor: 'rgba(98, 54, 205, 0.5)',
            borderColor: 'rgba(98, 54, 205, 1)',
            borderWidth: 1,
        }
    ]
}

export const GameScoreBarChart = () => {
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
    maintainAspectRatio: false,
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
          // Distance between the Y-axis baseline border and the text strings
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
        text: '2026 Game Scores',
      },
      yAxisImageLabels: {
        images: loadedImages, 
        // offset: 45,           
        // width: 40,
        // height: 40
      },
    },
  };
  
  return (
    <div className="chart">
      <Bar options={options} data={data} plugins={[yAxisImageLabelsPlugin]} />
    </div>
  )
}