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
      data: [89.2, 89.1, 88.8, 88.2],
      backgroundColor: "rgba(0, 87, 127, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(0, 87, 127, 8)",
    },
    {
      label: "Sweeper",
      data: [83.5, 84.1, 82.8, 81.8],
      backgroundColor: "rgba(150, 101, 177, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(150, 101, 177)",
    },
    {
      label: "Changeup",
      data: [83.8, 82.9, 79.9, 79.2],
      backgroundColor: "rgba(255, 114, 136, 0.5)",
      borderWidth: 1,
      borderColor: "rgba(255, 114, 136, 1)",
    },
    {
      label: "Knuckle Curve",
      data: [82.4, 82.9, 81.9, 80.6],
      backgroundColor: "rgba(255, 196, 59, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(255, 196, 59, 1)",
    },
  ],
};

export const BreakingVeloBarChart = () => {
  const [loadedImages, setLoadedImages] = useState<never[]>([]);
  let options = chartOptions(
    "2026 Average Breaking Ball/Offspeed Velo",
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
