import {
  Chart as ChartJS,
  RadialLinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
);

const options = {
  layout: {
    padding: {
      top: 100
    }
  },
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
}

export const radialData = {
  labels: [
    'Stache and soul patch',
    'Short beard',
    'Full beard',
    'Mountain man beard'
  ],
  // Data in the array corresponds to the label at the same index
  datasets: [
    {
      label: 'Slider',
      data: [89.2, 89.1, 88.8, 88.2],
      backgroundColor: 'rgba(238, 231, 22, 0.2)',
      borderColor: 'rgba(167, 162, 15, 1)',
      borderWidth: 1,
    },
    {
      label: '4-seam',
      data: [97.6, 97.2, 96.9, 96.1],
      backgroundColor: 'rgba(210, 45, 73, 0.2)',
      borderColor: 'rgba(147, 31, 51, 0.8)',
      borderWidth: 1,
    },
    {
      label: 'Sinker',
      data: [96.1, 96.1, 95.8, 95],
      backgroundColor: 'rgba(254, 157, 0, 0.2)',
      borderColor: 'rgba(178, 110, 0, 1)',
      borderWidth: 1,
    },
    // {
    //   label: 'Changeup',
    //   data: [83, 86, 81, 80, 82],
    //   backgroundColor: 'rgba(29, 190, 58, 0.2)',
    //   borderColor: 'rgba(20, 133, 41, 1);',
    //   borderWidth: 1,
    // },
    // {
    //   label: 'Sweeper',
    //   data: [85, 88, 83, 85, 84],
    //   backgroundColor: 'rgba(221, 179, 58, 0.2)',
    //   borderColor: 'rgba(155, 125, 41, 1);',
    //   borderWidth: 1,
    // },
    // {
    //   label: 'Knuckle Curve',
    //   data: [83, 86, 81, 80, 83],
    //   backgroundColor: 'rgba(98, 54, 205, 0.2)',
    //   borderColor: 'rgba(98, 54, 205, 1);',
    //   borderWidth: 1,
    // },
  ],
};

export const RadialChart = () => (
    <div className="chart radial">
      <Radar options={options} data={radialData} />
    </div>
)