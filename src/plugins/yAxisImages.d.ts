import type { Plugin } from 'chart.js';

export type YAxisImageLabelsOptions = {
  images?: Array<CanvasImageSource | null>;
  offset?: number;
  width?: number;
  height?: number;
};

export const yAxisImageLabelsPlugin: Plugin<'bar', YAxisImageLabelsOptions>;
