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
import { chartOptions, labelImagesSources } from '../../data/common';
import { gameScoreData } from '../../data/chartData';
import { yAxisImageLabelsPlugin } from '../../plugins/yAxisImages';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const GameScoreBarChart = () => {
  const [loadedImages, setLoadedImages] = useState<never[]>([]);
  let options = chartOptions('2026 Game Scores', loadedImages, true, 50);

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
  }, []);

  return (
    <div className="chart">
      <Bar
        options={options}
        data={gameScoreData}
        plugins={[yAxisImageLabelsPlugin]}
      />
    </div>
  );
};
