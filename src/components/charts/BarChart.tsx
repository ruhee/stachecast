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
import { yAxisImageLabelsPlugin } from '../../plugins/yAxisImages';
import {
  chartOptions,
  labelImagesSources as labelImages,
} from '../../data/common';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({
  data,
  title,
  legendXMin,
  customClassName = '',
  showLegend = true,
  labelImagesSources = labelImages,
}) => {
  const [loadedImages, setLoadedImages] = useState<never[]>([]);
  let options = chartOptions(title, loadedImages, showLegend, legendXMin || 0);

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

    return () => {
      isMounted = false;
    };
  }, [labelImagesSources]);

  return (
    <div className={`chart ${customClassName || ''}`}>
      <Bar options={options} data={data} plugins={[yAxisImageLabelsPlugin]} />
    </div>
  );
};
