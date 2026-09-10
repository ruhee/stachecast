import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { labels } from './data/common';

ChartJS.register(
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '2026 Gamescore',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Average per type',
      data: [57.6, 58.7, 77.2, 66.2],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Max per type',
      data: [77, 72, 82, 94],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const LineChart = () => (
  <div className="chart">
    <Line options={options} data={data} />
  </div>
)
