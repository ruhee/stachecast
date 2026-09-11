// yAxisImageLabelsPlugin.js
export const yAxisImageLabelsPlugin = {
  id: 'yAxisImageLabels',
  afterDraw(chart, args, pluginOptions) {
    // 1. Chart.js automatically passes your config into 'pluginOptions'
    const { images } = pluginOptions;
    const { ctx, scales: { y } } = chart;
    
    // Safety check if no images were provided to this specific chart
    if (!images || images.length === 0) return;

    ctx.save();

    y.ticks.forEach((tick, index) => {
      const img = images[index];
      if (!img) return;

      const yPixel = y.getPixelForTick(index);
      
      // Calculate layout positioning relative to the left axis border line
      // You can also pass custom offsets through pluginOptions if desired!
      const offset = pluginOptions.offset || 45;
      const xPixel = chart.chartArea.left - offset; 

      const imgWidth = pluginOptions.width || 40;
      const imgHeight = pluginOptions.height || 40;

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
