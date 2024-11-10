import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import fetchData from '../api/fetchData';

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
      <h1 className='text-container text-2xl font-bold my-4' >NASA NEO Data Visualizer!</h1>

        {
          apiData?.near_earth_objects?.map((item, ind) => (
            <ul key={ind} className='text-black' >
              <li>{item.name}</li>
            </ul>
          ))
        }
   
    </div>
  )
}

export default Dashboard
