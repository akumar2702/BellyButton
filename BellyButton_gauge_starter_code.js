// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

     // Create a variable that holds the samples array. 
     var metadata = data.metadata

     // Create a variable that filters the samples for the object with the desired sample number.
     var filteredMetadata = metadata.filter(sampleInfo => sampleInfo.id == sample)[0]
 
     // 1. Create a variable that filters the metadata array for the object with the desired sample number.
     // See above
 
     // Create a variable that holds the first sample in the array.
     // See above
 
     // 2. Create a variable that holds the first sample in the metadata array.
     // See above
 
     // 3. Create a variable that holds the washing frequency.
     var washFreq = filteredMetadata.wfreq
     
     // 4. Create the trace for the gauge chart.
     var gaugeData = [{
       domain: { x: [0, 1], y: [0, 1] },
       value: washFreq,
       title: { text: "<b>Belly Button Washing Frequency</b><br>(Times per Week)</br>" },
       type: "indicator",
       mode: "gauge+number",
       gauge: {
         bar: {color: 'white'},
         axis: { range: [null, 10] },
         steps: [
           { range: [0, 2], color: 'teal' },
           { range: [2, 4], color: 'E4F78F' },
           { range: [4, 6], color: 'yellow' },
           { range: [6, 8], color: 'lightgreen' },
           { range: [8, 10], color: 'green' },
         ],
       }
     }];
     
     // 5. Create the layout for the gauge chart.
     var gaugeLayout = { 
       width: 500, height: 400, margin: { t: 0, b: 0 } 
     };
 
     // 6. Use Plotly to plot the gauge data and layout.
     Plotly.newPlot('gauge', gaugeData, gaugeLayout);
 
   });
 }