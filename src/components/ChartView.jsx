import { Chart } from 'react-google-charts';

const ChartView = ({ data }) => {
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
    <div className='lg:w-[80%] md:w-[90%] sm:w-[100%]' >
      <Chart
      chartType='BarChart'
      width="100%"
      height="600px"
      data={chartData}
      options={options}
    />
    </div>
  )
}

export default ChartView;