// yAxisImageLabelsPlugin.js
export const yAxisImageLabelsPlugin = {
  id: 'yAxisImageLabels',
  afterDraw(chart, args, pluginOptions) {
    // 1. Chart.js automatically passes your config into 'pluginOptions'
    const { images } = pluginOptions;
    const { ctx, scales: { y } } = chart;
    const canvasWidth = chart.width;
    
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

      let imgWidth = pluginOptions.width || 40;
        let imgHeight = pluginOptions.height || 40;
        let xPixel = chart.chartArea.left - (offset || 45);

        if (canvasWidth < 500) {
          imgWidth = 24;
          imgHeight = 24;
          xPixel = chart.chartArea.left - 30; // Closer alignment for narrow canvas boxes
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
