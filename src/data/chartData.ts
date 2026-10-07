import { labels } from './common';

export const breakingVeloData = {
  labels: labels,
  datasets: [
    {
      label: "Slider",
      data: [89, 88.6, 89, 88],
      backgroundColor: "rgba(29, 45, 92, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(29, 45, 92)",
    },
    {
      label: "Sweeper",
      data: [83.3, 84.1, 82.8, 81.4],
      backgroundColor: "rgba(108, 54, 124, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(108, 54, 124)",
    },
    {
      label: "Changeup",
      data: [83.3, 82, 80.2, 78.6],
      backgroundColor: "rgba(187, 52, 121, 0.5)",
      borderWidth: 1,
      borderColor: "rgba(187, 52, 121, 1)",
    },
    {
      label: "Knuckle Curve",
      data: [82.3, 81.7, 81.9, 80.4],
      backgroundColor: "rgba(255, 145, 0, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(255, 145, 0, 1)",
    },
  ],
};

export const gameScoreData = {
  labels: labels,
  datasets: [
    {
      label: "Average",
      data: [57.7, 55.4, 72.8, 66.9],
      backgroundColor: "rgba(140, 36, 97, 0.5)",
      borderColor: "rgba(140, 36, 97, 1)",
      borderWidth: 1,
    },
    {
      label: "Highest",
      data: [77, 72, 82, 94],
      backgroundColor: "rgba(19, 74, 142, 0.5)",
      borderColor: "rgba(19, 74, 142, 1)",
      borderWidth: 1,
    },
  ],
};

export const k9data = {
  labels: labels,
  datasets: [
    {
      label: "K/9",
      data: [13.25, 14.04, 12.13, 11.44],
      backgroundColor: "rgba(6, 86, 61, 0.5)",
      borderColor: "rgba(6, 86, 61, 1)",
      borderWidth: 1,
    },
  ],
};

export const veloData = {
  labels: labels,
  datasets: [
    {
      label: "Four-seam",
      data: [97.4, 96.7, 97, 95.9],
      backgroundColor: "rgba(142, 16, 16, 0.5)",
      borderColor: "rgba(142, 16, 16, 1)",
      borderWidth: 1,
    },
    {
      label: "Sinker",
      data: [95.9, 95.8, 96.2, 94.8],
      backgroundColor: "rgba(94, 82, 185, 0.5)",
      borderColor: "rgba(94, 82, 185, 1)",
      borderWidth: 1,
    },
  ],
};
