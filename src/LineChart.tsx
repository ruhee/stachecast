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

ChartJS.register(
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
);



const labels = [
  'Walrus stache',
  'Stache and soul patch',
  'Short beard',
  'Full beard',
  'Mountain man beard'
];

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
      data: [44, 98, 75, 58, 77],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Max per type',
      data: [86, 28, 55, 23, 88],
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
