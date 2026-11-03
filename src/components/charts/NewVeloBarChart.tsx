import { BarChart } from './BarChart';
import { veloData } from '../../data/chartData';

export const NewVeloBarChart = () => {
  return (
    <BarChart
      // options={options}
      data={veloData}
      legendXMin={94}
      title="New velo bar chart"
    />
  );
};
