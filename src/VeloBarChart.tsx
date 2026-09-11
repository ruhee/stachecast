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
  indexAxis: 'y' as const,
  scales: {
    x: {
        beginAtZero:false,
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '2026 Average Velo Per Type',
    },
  },
};

export const data = {
    labels: labels, 
    datasets: [
        {
            label: 'Four-seam fastball',
            data: [97.6, 97.2, 96.9, 96.1],
            backgroundColor: 'rgba(210, 45, 73, 0.5)',
            borderColor: 'rgba(147, 31, 51, 1)'
        },
        { 
            label: 'Sinker',
            data: [96.1, 96.1, 95.8, 95],
            backgroundColor: 'rgba(254, 157, 0, 0.5)',
            borderColor: 'rgba(178, 110, 0, 1)',
        },
        {
            label: 'Slider',
            data: [89.2, 89.1,88.8,88.2],
            backgroundColor: 'rgba(238, 231, 22, 0.5)',
            borderColor: 'rgba(167, 162, 15, 1)',
        },
        // {
        //     label: 'Sweeper',
        //     data: [83.5,84.1,82.8,81.8],
        //     backgroundColor: 'rgba(221, 179, 58, 0.5)',
        //      borderColor: 'rgba(155, 125, 41, 1)',
        // },
    //     {
    //         label: 'Changeup',
    //         data: [83.8,82.9,79.9,79.2],
    //         backgroundColor: 'rgba(29, 190, 58, 0.2)',
    //   borderColor: 'rgba(20, 133, 41, 1)',
    //     }
    ]
}

export const VeloBarChart = () => (
<div className="chart">
        <Bar options={options} data={data} />
    </div>
);