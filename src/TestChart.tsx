import React, { useEffect, useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import img from "url:./assets/img.png";
import { yAxisImageLabelsPlugin } from './plugins/yAxisImages';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labelImagesSources = [
    img,
    img,
    img
]

export default function HorizontalImageLabelChart() {
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

  const data = {
    labels: ['Microsoft', 'Nike', 'Apple'],
    datasets: [
      {
        label: 'Revenue (Billions)',
        data: [42, 97, 76],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    // 3. Flips the bars horizontally
    indexAxis: 'y', 
    responsive: true,
    layout: {
      // 4. Add safety padding buffer on the LEFT side of the canvas context frame
      padding: {
        left: 50 
      }
    },
    plugins: {
      yAxisImageLabels: {
        images: loadedImages, 
        offset: 45,           
        width: 40,
        height: 40
      }
    },
    scales: {
      x: {
        beginAtZero: true,
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
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Bar 
        key={imagesReady ? 'horizontal-loaded' : 'horizontal-loading'} 
        data={data} 
        options={options} 
        plugins={[yAxisImageLabelsPlugin]} 
      />
    </div>
  );
}
