import { useEffect, useState } from 'react';
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
import { chartOptions, labels } from './data/common';
import { yAxisImageLabelsPlugin } from './plugins/yAxisImages';
import img from "url:./assets/img.png";

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
      label: 'Average',
      data: [57.6, 58.7, 77.2, 66.2],
      backgroundColor: 'rgba(210, 45, 73, 0.5)',
      borderColor: 'rgba(147, 31, 51, 1)',
      borderWidth: 1,
    },
    { 
      label: 'Highest',
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
  let options = chartOptions('2026 Game Scores', loadedImages);

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
  
  return (
    <div className="chart">
      <Bar options={options} data={data} plugins={[yAxisImageLabelsPlugin]} />
    </div>
  )
}
