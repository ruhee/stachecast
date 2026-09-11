export const yAxisImageLabelsPlugin = {
  id: 'yAxisImageLabels',
  afterDraw(chart, args, pluginOptions) {
    const { images } = pluginOptions;
    const { ctx, scales: { y } } = chart;
    const canvasWidth = chart.width;

    if (!images || images.length === 0) return;

    ctx.save();

    y.ticks.forEach((tick, index) => {
      const img = images[index];
      if (!img) return;

      const yPixel = y.getPixelForTick(index);
      const offset = pluginOptions.offset || 45;

      let imgWidth = pluginOptions.width || 40;
      let imgHeight = pluginOptions.height || 40;
      let xPixel = chart.chartArea.left - (offset || 45);

      if (canvasWidth < 500) {
        imgWidth = 24;
        imgHeight = 24;
        xPixel = chart.chartArea.left - 30;
      }

      ctx.drawImage(
        img,
        xPixel,
        yPixel - imgHeight / 2,
        imgWidth,
        imgHeight
      );
    });

    ctx.restore();
  },
};
