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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '2026 Game Scores',
    },
  },
};

export const data = {
    labels: labels, 
    datasets: [
        {
            label: 'Avg per type',
            data: [57.6, 58.7, 77.2, 66.2],
            backgroundColor: 'rgba(210, 45, 73, 0.5)',
            borderColor: 'rgba(147, 31, 51, 1)'
        },
        { 
            label: 'Max per type',
            data: [77, 72, 82, 94],
            backgroundColor: 'rgba(98, 54, 205, 0.5)',
            borderColor: 'rgba(98, 54, 205, 1)'
        }
    ]
}

export const GameScoreBarChart = () => (
<div className="chart">
        <Bar options={options} data={data} />
    </div>
);