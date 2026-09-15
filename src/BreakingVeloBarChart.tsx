import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartOptions, labels, labelImagesSources } from "./data/common";
import { yAxisImageLabelsPlugin } from "./plugins/yAxisImages";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Slider",
      data: [89, 89.1, 88.8, 88.2],
      backgroundColor: "rgba(29, 45, 92, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(29, 45, 92)",
    },
    {
      label: "Sweeper",
      data: [83.3, 84.1, 82.8, 81.8],
      backgroundColor: "rgba(108, 54, 124, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(108, 54, 124)",
    },
    {
      label: "Changeup",
      data: [83.3, 82.9, 79.9, 79.2],
      backgroundColor: "rgba(187, 52, 121, 0.5)",
      borderWidth: 1,
      borderColor: "rgba(187, 52, 121, 1)",
    },
    {
      label: "Knuckle Curve",
      data: [82.3, 82.9, 81.9, 80.6],
      backgroundColor: "rgba(255, 145, 0, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(255, 145, 0, 1)",
    },
  ],
};

export const BreakingVeloBarChart = () => {
  const [loadedImages, setLoadedImages] = useState<never[]>([]);
  let options = chartOptions(
    "2026 Average Breaking Ball/Offspeed Velocity",
    loadedImages,
  );

  useEffect(() => {
    let isMounted = true;

    const promises = labelImagesSources.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
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
    <div className="chart breaking">
      <Bar options={options} data={data} plugins={[yAxisImageLabelsPlugin]} />
    </div>
  );
};
