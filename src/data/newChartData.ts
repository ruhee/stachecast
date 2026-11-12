// chartData.ts is the prod 2026 stuff, leave that alone while tinkering.
// this will eventually replace it.

import { averages } from './averages-full';
import { velocities, formats } from './velocities';
import clean from 'url:../assets/clean.jpg';
import stubble from 'url:../assets/stubble.jpg';
import stache from 'url:../assets/stache-only.jpg';
import patch from 'url:../assets/patch.jpg';
import stubbleStache from 'url:../assets/stubble-stache.jpg';
import shortStache from 'url:../assets/short-stache.jpg';
import short from 'url:../assets/short-new.jpg';
import full from 'url:../assets/full-new.jpg';
import long from 'url:../assets/long-new.jpg';
import mountain from 'url:../assets/mountain.jpg';

import placeholder from 'url:../assets/placeholder.png';

const labelImages = {
  'Clean shaven': clean,
  Stubble: stubble,
  'Stache only': stache,
  'Stache + soul patch': patch,
  'Stubble + stache': stubbleStache,
  'Short beard + stache': shortStache,
  'Short beard': short,
  'Full beard': full,
  'Long beard': long,
  'Mountain man beard': mountain,
};

export const newLabelImagesSources = formats.map(
  (format) => labelImages[format] || placeholder
);

export const breakingVeloData = {
  labels: formats,
  datasets: [
    {
      label: 'Slider',
      data: velocities['Slider'],
      backgroundColor: 'rgba(29, 45, 92, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(29, 45, 92)',
    },
    {
      label: 'Sweeper',
      data: velocities['Sweeper'],
      backgroundColor: 'rgba(108, 54, 124, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(108, 54, 124)',
    },
    // {
    //   label: 'Changeup',
    //   data: averages['Change'],
    //   backgroundColor: 'rgba(187, 52, 121, 0.5)',
    //   borderWidth: 1,
    //   borderColor: 'rgba(187, 52, 121, 1)',
    // },
    {
      label: 'Knuckle Curve',
      data: velocities['Knuckle Curve'],
      backgroundColor: 'rgba(255, 145, 0, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(255, 145, 0, 1)',
    },
  ],
};

export const gameScoreData = {
  labels: formats,
  datasets: [
    {
      label: 'Average',
      data: averages['Game score'],
      backgroundColor: 'rgba(140, 36, 97, 0.5)',
      borderColor: 'rgba(140, 36, 97, 1)',
      borderWidth: 1,
    },
    {
      label: 'Highest',
      data: averages['Game score max'],
      backgroundColor: 'rgba(19, 74, 142, 0.5)',
      borderColor: 'rgba(19, 74, 142, 1)',
      borderWidth: 1,
    },
  ],
};

export const k9data = {
  labels: formats,
  datasets: [
    {
      label: 'K/9',
      data: averages['K/9'],
      backgroundColor: 'rgba(6, 86, 61, 0.5)',
      borderColor: 'rgba(6, 86, 61, 1)',
      borderWidth: 1,
    },
  ],
};

export const veloData = {
  labels: formats,
  datasets: [
    {
      label: 'Four-seam',
      data: velocities['4-Seam Fastball'],
      backgroundColor: 'rgba(142, 16, 16, 0.5)',
      borderColor: 'rgba(142, 16, 16, 1)',
      borderWidth: 1,
    },
    {
      label: 'Sinker',
      data: velocities['Sinker'],
      backgroundColor: 'rgba(94, 82, 185, 0.5)',
      borderColor: 'rgba(94, 82, 185, 1)',
      borderWidth: 1,
    },
  ],
};

export const newChartConfig = {
  velo: {
    legendXMin: 94,
    title: 'Average Fastball Velocity',
  },
  breaking: {
    // legendXMin: 0,
    title: 'Average Breaking Ball/Offspeed Velocity',
  },
  gameScore: {
    legendXMin: 30,
    title: 'Game Scores',
  },
  k9: {
    legendXMin: 7,
    title: 'Strikeouts/9',
  },
};
