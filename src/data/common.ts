import img from "url:../assets/img.png";
export const labelImagesSources = [
  img,
  img,
  img,
  img
];

export const labels: string[] = [
  'Stache and soul patch',
  'Short beard',
  'Full beard',
  'Mountain man beard'
];

export const chartOptions = (titleText: string, loadedImages: never[]) => ({
   responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    layout: {
      padding: {
        left: 50 
      }
    },
    scales: {
      x: {
        beginAtZero:false,
        grace: '3%' as const,
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
        position: 'top' as const,
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
