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
      const offset = pluginOptions.offset || 60;

      let imgWidth = pluginOptions.width || 50;
      let imgHeight = pluginOptions.height || 50;
      let xPixel = chart.chartArea.left - (offset || 60);

      if (canvasWidth < 650) {
        imgWidth = 40;
        imgHeight = 40;
        xPixel = chart.chartArea.left - 50;
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
