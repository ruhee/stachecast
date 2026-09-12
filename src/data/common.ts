import full from "url:../assets/full2.jpg";
import long from "url:../assets/long2.jpg";
import short from "url:../assets/short3.jpg";
import stache from "url:../assets/stache.jpeg";
export const labelImagesSources = [stache, short, full, long];

export const labels: string[] = [
  "Stache and soul patch",
  "Short beard",
  "Full beard",
  "Long beard",
];

export const chartOptions = (titleText: string, loadedImages: never[]) => ({
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y" as const,
  layout: {
    padding: {
      left: 50,
    },
  },
  scales: {
    x: {
      beginAtZero: false,
      grace: "3%" as const,
    },
    y: {
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        // Distance between the Y-axis baseline border and the text strings
        padding: 8,
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: titleText,
    },
    yAxisImageLabels: {
      images: loadedImages,
    },
  },
});
