// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const result = metadata.filter(sampleObj => sampleObj.id == sample);
    const filterResult = result[0]

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    panel.html("");

    console.log(metadata)
    console.log(filterResult)

    // Inside a loop, you will need to use d3 to append new tags for each key-value in the filtered metadata.
    Object.entries(filterResult).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}
console.log(buildMetadata(940))

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;

    // Filter the samples for the object with the desired sample number
    const SampleNumber = samples.filter(sampleObj => sampleObj.id == sample);
    const filterSampleNumber = SampleNumber[0]

    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = filterSampleNumber.otu_ids;
    const otu_labels = filterSampleNumber.otu_labels;
    const sample_values = filterSampleNumber.sample_values;

    console.log(buildMetadata(940))


    // Build a Bubble Chart
    const BubbleChartData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];
    const BubbleChart = {
      title: "Bacteria Cultures Per Sample",
      hovermode: "closest",
      margin: { t: 0 },
      hoverlabel: { bgcolor: "white" },
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Value" }
    };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", BubbleChartData, BubbleChart);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks using slice and reverse
    const yticks = otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const BarChartData = [{
      x: sample_values.slice(0, 10).reverse(),
      y: yticks,
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];
    const BarChart = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", BarChartData, BarChart);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.

    names.forEach((name) => {
      dropdown.append("option").text(name).property("value", name);
    });

    // Get the first sample from the list
    const firstSample = names[1];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
