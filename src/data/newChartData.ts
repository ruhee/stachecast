// chartData.ts is the prod 2026 stuff, leave that alone while tinkering.
// this will eventually replace it.

import { averages } from './averages-full';
import { velocities, formats, starts } from './velocities';
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
import { stuffs } from './fangraphs';

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

// https://www.schemecolor.com/coastal-vintage-2.php
export const breakingVeloData = {
  labels: formats,
  datasets: [
    {
      label: 'Slider',
      data: velocities['Slider'],
      backgroundColor: 'rgba(166, 36, 189, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(166, 36, 189)',
    },
    {
      label: 'Sweeper',
      data: velocities['Sweeper'],
      backgroundColor: 'rgba(189, 166, 36, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(189, 166, 36)',
    },
    {
      label: 'Knuckle Curve',
      data: velocities['Knuckle Curve'],
      backgroundColor: 'rgba(36, 189, 166, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(36, 189, 166, 1)',
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
      backgroundColor: 'rgba(36, 140, 131, 0.5)',
      borderColor: 'rgba(36, 140, 131, 1)',
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

export const kPercentageData = {
  labels: formats,
  datasets: [
    {
      label: 'K%',
      data: averages['K%'],
      backgroundColor: 'rgba(35, 83, 71, 0.5)',
      borderColor: 'rgba(35, 83, 71, 1)',
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
      backgroundColor: 'rgba(158, 39, 57, 0.5)',
      borderColor: 'rgb(158, 39, 57)',
      borderWidth: 1,
    },
    {
      label: 'Sinker',
      data: velocities['Sinker'],
      backgroundColor: 'rgba(39, 116, 158, 0.5)',
      borderColor: 'rgb(39, 116, 158)',
      borderWidth: 1,
    },
  ],
};

export const occurrenceData = {
  labels: formats,
  datasets: [
    {
      label: 'Appearances',
      data: starts,
      backgroundColor: 'rgba(113, 89, 123, 0.5)',
      borderColor: 'rgba(113, 89, 123, 1)',
      borderWidth: 1,
    },
  ],
};

export const stuffPlusData = {
  labels: formats,
  datasets: [
    {
      label: 'Stuff+',
      data: stuffs,
      backgroundColor: 'rgba(80, 174, 38, 0.5)', // the actual fangraphs colour lol
      borderWidth: 1,
      borderColor: 'rgba(80, 174, 38, 1)',
    },
  ],
};

export const newChartConfig = {
  velo: {
    legendXMin: 94,
    title: 'Average Fastball Velocity',
  },
  breaking: {
    title: 'Average Breaking Ball Velocity',
  },
  gameScore: {
    legendXMin: 30,
    title: 'Game Scores',
  },
  k9: {
    legendXMin: 7,
    title: 'Strikeouts/9',
  },
  kPercentage: {
    title: 'Strikeout %',
  },
};

export const totalStarts = starts.reduce((acc, curr) => acc + curr, 0);
