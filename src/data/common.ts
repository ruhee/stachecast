import { ChartEvent, ActiveElement } from "chart.js";

import full from "url:../assets/full2.jpg";
import long from "url:../assets/long2.jpg";
import short from "url:../assets/short4.jpg";
import stache from "url:../assets/stache.jpeg";

export const labelImagesSources = [stache, short, full, long];

export const labels: string[] = [
  "Stache and soul patch",
  "Short beard",
  "Full beard",
  "Long beard",
];

export const chartOptions = (
  titleText: string,
  loadedImages: never[],
  showLegend: boolean = true,
  xMin: number = 0,
) => ({
  responsive: true,
  onHover: (event: ChartEvent, chartElements: ActiveElement[]) => {
    const target = event.native?.target as HTMLElement | null;
    if (target) {
      target.style.cursor = chartElements.length > 0 ? "pointer" : "default";
    }
  },
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
      min: xMin ? xMin : undefined,
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
      display: showLegend,
      position: "top" as const,
      onHover: (event: ChartEvent) => {
        const target = event.native?.target as HTMLElement | null;
        if (target) {
          target.style.cursor = "pointer";
        }
      },
      onLeave: (event: ChartEvent) => {
        const target = event.native?.target as HTMLElement | null;
        if (target) {
          target.style.cursor = "default";
        }
      },
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
