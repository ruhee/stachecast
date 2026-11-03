import { BarChart } from './BarChart';
// import { veloData } from '../../data/chartData';

export const NewVeloBarChart = ({ data }) => {
  return <BarChart data={data} legendXMin={94} title="wew velo bar chart" />;
};
