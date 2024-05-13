# Plotly
Using D3, create an interactive dashboard for Belly Button Bacteria study.
 
 - const metadata = data.metadata;Here we extracr the metadata field from the data object. 
Extracting the metadata field from the data object is necessary to access and work with the metadata specifically. 

- The filterResult holds the metadata object corresponding to the desired sample number, or it may be undefined if no matching object is found. This filtered result will then be used for further processing or display purposes.

- After selecting the panel with the id of #sample-metadata, the variable panel holds a D3.js selection representing the HTML element with the id sample-metadata

- After clearing all the html code and appending new tags for key-values oin the filtered metadata and finally, get samples field, we can use the samples variable to access the sample information stored within the data object. This could include data about different samples, in an array or object format.

- Within the process of filtering samples and retriving data, we will use it them to create our visualization chart later on. 

1. we build our bubble chart, add the BubbleChartData and finally, rendered it to our panel. Together, this function uses the data and layout configuration provided to generate and render a bubble chart using Plotly in the specified HTML element with the id "bubble". The chart will appear in the DOM at the location of the element with that id.

a. Overall, yticks contains a list of strings formatted as "OTU {otu_id}", where {otu_id} represents the original OTU identifier. This list of strings is intended to be used as y-axis tick labels in a bar chart visualization.


2. We vuild the BarChart, add the BarChartData and finally, rendered it to our panel. This code snippet builds and renders a horizontal bar chart showing the top 10 bacteria cultures found, with the sample values on the x-axis and the OTU IDs as labels on the y-axis.

- after dropping the menu and poppulating the DOM with our new data, the dropdown menu will be populated with options corresponding to the sample names, and firstSample will be assigned the value of the second sample name in the list.

- after initiating the process of generating the charts and metadata, we set up an event listener to respond to changes in the selected sample and initializes the dashboard when the page loads. This ensures that the charts and metadata panel are updated accordingly whenever a new sample is selected from the dropdown menu.




