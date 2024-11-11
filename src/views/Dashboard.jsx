import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import fetchData from '../api/fetchData';
import ChartView from '../components/ChartView';
import DropdownFilter from '../components/DropdownFilter';
import TableView from '../components/TableView';
import DownloadCSV from '../components/DownloadCSV';

const Dashboard = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [selectedObject, setSelectedObject] = useState('');
  const [view, setView] = useState('chart');

  const orbitalBodies = Array.from(
    new Set(
        apiData.flatMap((item) => 
            item.close_approach_data.map((approach) => approach.orbiting_body)
        )
    ));

  useEffect(() => {
    fetchData()
      .then( data => setApiData(data))
      .finally(() => setLoading(false))  
    
    }, []);

  
  const filteredData = selectedObject
  ? apiData.filter(item => 
    item.close_approach_data.some((approach) => approach.orbiting_body === selectedObject)
  )
  : apiData
  
  if (loading) return <p className='text-bold text-white text-center'>Loading api data...</p>

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-white text-center lg:text-2xl font-bold my-0 sm:text-sm" >NASA NEO Data Visualizer!</h1>
      <div className='lg:ml-[90svw] lg:w-[40%] md:ml-[90svw] md:w-[50%]' >
        <DropdownFilter  options={orbitalBodies} selected={selectedObject} onChange={setSelectedObject}/>
      </div>
      <div className='w-full flex flex-col lg:items-center sm:items-start' >
     <div>
     <button 
        className=' bg-[#00C3FF] text-zinc-900 text-bold p-2 rounded self-center lg:w-40 m-2'
        onClick={() => setView(prev => prev === 'table' ? 'chart' : 'table')}
        >
          {view === 'table' ? 'Chart view' : 'Table View'}
        </button>
        <DownloadCSV data={filteredData} fileName={selectedObject}/>
     </div>

        {view === 'chart' ? <ChartView data={filteredData} /> : <TableView data={filteredData} />}
      </div>
    </div>
  )
}

export default Dashboard
