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
      label: "Four-seam",
      data: [97.6, 97.2, 96.9, 96.1],
      backgroundColor: "rgba(210, 45, 73, 0.5)",
      borderColor: "rgba(147, 31, 51, 1)",
      borderWidth: 1,
    },
    {
      label: "Sinker",
      data: [96.1, 96.1, 95.8, 95],
      backgroundColor: "rgba(226, 149, 82, 0.5)",
      borderColor: "rgba(226, 149, 82, 1)",
      borderWidth: 1,
    },
  ],
};

export const VeloBarChart = () => {
  const [loadedImages, setLoadedImages] = useState<never[]>([]);
  let options = chartOptions("2026 Average Fastball Velocity", loadedImages);

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
    <div className="chart">
      <Bar options={options} data={data} plugins={[yAxisImageLabelsPlugin]} />
    </div>
  );
};
