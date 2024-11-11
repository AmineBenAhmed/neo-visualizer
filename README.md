# Near Earth Object Visualization

This project is a Single Page Application (SPA) built with React to display visualizations of Near-Earth Object (NEO) data from NASA’s NeoWs API. The application allows users to view NEO data in both chart and table formats, filter the data based on orbital body, and download data in CSV format.

## Project Overview
The goal of this project is to showcase data visualizations and interactive UI elements. The app fetches data from NASA's API and displays NEO information in a bar chart, with each NEO’s min and max estimated diameter, and allows users to filter by orbital body. The app also includes a table view option for a more detailed data exploration.

## Features
- **Data Visualization:** Display NEO diameter data in a Google Charts bar chart, sorted by average diameter.
- **Filtering:** Filter NEOs based on their orbital body.
- **View Switcher:** Toggle between chart and table views.
- **CSV Export:** Download the data in CSV format.

## Tech Stack
- **Frontend:** React, Tailwind CSS, React Google Charts
- **Data Source:** [NASA’s NeoWs API](https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or above)
- **npm** (v6 or above)

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:AmineBenAhmed/neo-visualizer.git
   cd neo-visualizer
   npm install

2. Starting the project:
  ```bash
  npm run dev

  the project will start on http://localhost:5173/

 3. How to navigate
  - once you enter in the project you will have a nice UI that dispaly a bar chart which represent the NEOs diameters and sorted by estimated diameter average ((max estimated diameter + min estimated diameter) / 2)

  - Above the chart there is a button `Table View / Chart View` which take you to a table that displays neos with max and min estimated diameters
  - At the top right a drop down selection allow you to filter the vew and the displayed data by the orbital object.
  - another butter beside the `Table View/Chart View` with name `Download CSV` allow the user to download data in a CSV file, data also can be filtered by orbiting body, and the saved file take the selected one.

  ## ENJOY ...
