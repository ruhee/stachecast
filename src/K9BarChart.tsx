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
      label: "K/9",
      data: [6.22, 5.38, 6.64, 7.08],
      backgroundColor: "rgba(6, 86, 61, 0.5)",
      borderColor: "rgba(6, 86, 61, 1)",
      borderWidth: 1,
    },
  ],
};

export const K9BarChart = () => {
  const [loadedImages, setLoadedImages] = useState<never[]>([]);
  let options = chartOptions("2026 Strikeouts/9", loadedImages, false);

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
