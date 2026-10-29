import { ChartEvent, ActiveElement } from 'chart.js';

// import clean from 'url:../assets/clean.jpg';
import full from 'url:../assets/full.jpg';
import long from 'url:../assets/long.jpg';
import short from 'url:../assets/short.jpg';
import stache from 'url:../assets/stache.jpg';
// import patch from 'url:../assets/patch.jpg';
// import stache from 'url:../assets/stache-only.jpg'
// import stubble from 'url:../assets/stubble.jpg'
// import mountain from 'url:../assets/mountain.jpg'
// import placeholder from 'url:../assets/placeholder.png';
// import { formats } from './averages';

export const labelImagesSources = [stache, short, full, long];

// const labelImages = {
//   'Clean shaven': clean,
//   'Stache only': stache,
//   'Stache + soul patch': patch,
//   'Stubble + stache': stubble,
//   'Short beard': short,
//   'Full beard': full,
//   'Long beard': long,
//   'Mountain man beard': mountain,
// };

// export const labelImagesSources = formats.map(
//   (format) => labelImages[format] || placeholder
// );

export const chartOptions = (
  titleText: string,
  loadedImages: never[],
  showLegend: boolean = true,
  xMin: number = 0
) => ({
  responsive: true,
  onHover: (event: ChartEvent, chartElements: ActiveElement[]) => {
    const target = event.native?.target as HTMLElement | null;
    if (target) {
      target.style.cursor = chartElements.length > 0 ? 'pointer' : 'default';
    }
  },
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  layout: {
    padding: {
      left: 50,
    },
  },
  scales: {
    x: {
      beginAtZero: false,
      min: xMin ? xMin : undefined,
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
      display: showLegend,
      position: 'top' as const,
      onHover: (event: ChartEvent) => {
        const target = event.native?.target as HTMLElement | null;
        if (target) {
          target.style.cursor = 'pointer';
        }
      },
      onLeave: (event: ChartEvent) => {
        const target = event.native?.target as HTMLElement | null;
        if (target) {
          target.style.cursor = 'default';
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
