// chartData.ts is the prod 2026 stuff, leave that alone while tinkering.
// this will eventually replace it.

import { averages, formats } from './averages-full';
import placeholder from 'url:../assets/placeholder.png';
import full from 'url:../assets/full.jpg';
import long from 'url:../assets/long.jpg';
import short from 'url:../assets/short.jpg';
import stache from 'url:../assets/stache.jpg';

const labelImages = {
  'Clean shaven': '',
  'Stache only': '',
  'Stache + soul patch': stache,
  'Stubble + stache': '',
  'Short beard': short,
  'Full beard': full,
  'Long beard': long,
  'Mountain man beard': '',
};

export const newLabelImagesSources = formats.map(
  (format) => labelImages[format] || placeholder
);

export const breakingVeloData = {
  labels: formats,
  datasets: [
    {
      label: 'Slider',
      data: averages['Slider'],
      backgroundColor: 'rgba(29, 45, 92, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(29, 45, 92)',
    },
    {
      label: 'Sweeper',
      data: averages['Sweeper'],
      backgroundColor: 'rgba(108, 54, 124, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(108, 54, 124)',
    },
    {
      label: 'Changeup',
      data: averages['Change'],
      backgroundColor: 'rgba(187, 52, 121, 0.5)',
      borderWidth: 1,
      borderColor: 'rgba(187, 52, 121, 1)',
    },
    {
      label: 'Knuckle Curve',
      data: averages['Knuckle curve'],
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
      data: averages['4 seam'],
      backgroundColor: 'rgba(142, 16, 16, 0.5)',
      borderColor: 'rgba(142, 16, 16, 1)',
      borderWidth: 1,
    },
    {
      label: 'Sinker',
      data: averages['Sinker'],
      backgroundColor: 'rgba(94, 82, 185, 0.5)',
      borderColor: 'rgba(94, 82, 185, 1)',
      borderWidth: 1,
    },
  ],
};
