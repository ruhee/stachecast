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
import img from "url:./assets/img.png"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const labelImagesSources = [
//   'https://assets.streamlinehq.com/image/private/w_68,h_68,ar_1/f_auto/v1/icons/interface-essential/add-circle-bold-221ce.png',
//   'https://assets.streamlinehq.com/image/private/w_68,h_68,ar_1/f_auto/v1/icons/interface-essential/add-circle-bold-221ce.png',
//   'https://assets.streamlinehq.com/image/private/w_68,h_68,ar_1/f_auto/v1/icons/interface-essential/add-circle-bold-221ce.png',
// ];

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

  const yAxisImageLabelsPlugin = useMemo(() => ({
    id: 'yAxisImageLabels',
    afterDraw(chart) {
      const { ctx, scales: { y } } = chart;
      
      if (loadedImages.length === 0) return;

      ctx.save();

      y.ticks.forEach((tick, index) => {
        const img = loadedImages[index];
        if (!img) return;

        // 1. Get the precise vertical pixel center for each row item
        const yPixel = y.getPixelForTick(index);
        
        // 2. Position the image to the LEFT of the chart grid boundary line.
        // Moving it left by 45 pixels leaves clean space for text labels.
        const xPixel = chart.chartArea.left - 45; 

        const imgWidth = 40;
        const imgHeight = 40;

        ctx.drawImage(
          img,
          xPixel, 
          yPixel - imgHeight / 2, // Centered perfectly vertically with the bar text row
          imgWidth,
          imgHeight
        );
      });

      ctx.restore();
    },
  }), [loadedImages]);

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
