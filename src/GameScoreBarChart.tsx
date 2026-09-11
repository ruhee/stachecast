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
import { chartOptions, labels, labelImagesSources } from './data/common';
import { yAxisImageLabelsPlugin } from './plugins/yAxisImages';

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
      label: 'Average',
      data: [57.6, 58.7, 77.2, 66.2],
      backgroundColor: 'rgba(19, 74, 142, 0.5)',
      borderColor: 'rgba(19, 74, 142, 1)',
      borderWidth: 1,
    },
    { 
      label: 'Highest',
      data: [77, 72, 82, 94],
      backgroundColor: 'rgba(29, 45, 92, 0.5)',
      borderColor: 'rgba(29, 45, 92, 1)',
      borderWidth: 1,
    }
  ]
}

export const GameScoreBarChart = () => {
  const [loadedImages, setLoadedImages] = useState<never[]>([]);
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
        setLoadedImages(images as never[]);
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
