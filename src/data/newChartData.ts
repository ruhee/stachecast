// chartData.ts is the prod 2026 stuff, leave that alone while tinkering.
// this will eventually replace it.

import { formats } from './averages';
import placeholder from 'url:../assets/placeholder.png';
import full from 'url:../assets/full2.jpg';
import long from 'url:../assets/long2.jpg';
import short from 'url:../assets/short4.jpg';
import stache from 'url:../assets/stache.jpeg';

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
