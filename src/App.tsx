import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
);

export const radialData = {
  labels: [
    'Walrus stache',
    'Stache and soul patch',
    'Short beard',
    'Full beard',
    'Mountain man beard'
  ],
  // Data in the array corresponds to the label at the same index
  datasets: [
    {
      label: 'Slider',
      data: [93, 94, 96, 92, 92],
      backgroundColor: 'rgba(238, 231, 22, 0.2)',
      borderColor: 'rgba(167, 162, 15, 1)',
      borderWidth: 1,
    },
    {
      label: '4-seam',
      data: [98.7, 97, 96, 95, 95],
      backgroundColor: 'rgba(210, 45, 73, 0.2)',
      borderColor: 'rgba(147, 31, 51, 0.8)',
      borderWidth: 1,
    },
    {
      label: 'Sinker',
      data: [94, 96, 95, 97, 96],
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

export function App() {
  return (
    <><div style={{ maxWidth: "800px", maxHeight: "90vh" }}>
      <Radar data={radialData} />;
    </div>
    <div style={{ }}>
      <div style={{ maxWidth: "800px", maxHeight: "90vh" }}>
        <Line options={options} data={data} />
      </div>
    </div>
    <footer>
      <p>Brought to you by <a href="https://bsky.app/profile/ruhee.ca">the stupid brain</a> behind the David Price Nickname Generator (RIP) and the Stanton Strikeout Tracker (also RIP).</p>

      <p>Credits:</p>
      <ul>
        <li>Data via <a href="https://baseballsavant.mlb.com/savant-player/dylan-cease-656302?stats=gamelogs-r-pitching-mlb&season=2026">Baseball Savant and Statcast</a></li>
        <li><a href="https://bsky.app/profile/phrichards.ca">Phil Richards</a> for the name</li>
      </ul>
      <p>With sincerest apologies to Dylan Cease</p>
    </footer>
    </>
  )
}
