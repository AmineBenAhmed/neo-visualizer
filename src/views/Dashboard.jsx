import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import fetchData from '../api/fetchData';
import ChartView from '../components/ChartView';
import DropdownFilter from '../components/DropdownFilter';

const Dashboard = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [selectedObject, setSelectedObject] = useState('');

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

  if (loading) return <p>Loading api data...</p>

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center lg:text-2xl font-bold my-10 sm:text-sm" >NASA NEO Data Visualizer!</h1>
      <div className='lg:ml-[90svw] lg:w-[40%] md:ml-[90svw] md:w-[50%]' >
        <DropdownFilter  options={orbitalBodies} selected={selectedObject} onChange={setSelectedObject}/>
      </div>
      <ChartView data={filteredData} />
    </div>
  )
}

export default Dashboard
