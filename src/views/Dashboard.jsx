import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import fetchData from '../api/fetchData';
import ChartView from '../components/ChartView';

const Dashboard = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
      .then( data => {setApiData(data);})
      .finally(() => setLoading(false))  
    
    }, [])
  
  if (loading) return <p>Loading api data...</p>

  return (
    <div>
      <h1 className='text-container text-2xl font-bold my-4 text-sm' >NASA NEO Data Visualizer!</h1>

        <ChartView data={apiData} />
   
    </div>
  )
}

export default Dashboard
