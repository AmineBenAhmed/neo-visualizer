import { Chart } from 'react-google-charts';

const ChartView = ({ data }) => {

  if (!data?.length) {
    return <h1>No Data to Display</h1>
  }

  const chartData = [
    ["NEO", "Min Diameter", "Max Diameter"],
    ...data.map(item => [
      item.name,
      item.estimated_diameter.kilometers.estimated_diameter_min,
      item.estimated_diameter.kilometers.estimated_diameter_max,
    ])
  ];

  const options = {
    title: "Near Earth Objects",
    chartArea: { width: '50%' },
    hAxis: { title: "Diameter (km)", minValue: 0 },
    vAxis: { title: "NEOs" }
  }

  return (
    <Chart
      chartType='BarChart'
      width="100%"
      height="600px"
      data={chartData}
      options={options}
    />
  )
}

export default ChartView;