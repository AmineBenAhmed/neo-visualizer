import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const fetchData = async () => {
  const response = await axios.get(`${API_URL}?api_key=${API_KEY}`)
  return response?.data?.near_earth_objects?.sort((a,b) => {
    const avrA = (a.estimated_diameter.kilometers.estimated_diameter_max + a.estimated_diameter.kilometers.estimated_diameter_max) / 2;
    const avrB = (b.estimated_diameter.kilometers.estimated_diameter_max + b.estimated_diameter.kilometers.estimated_diameter_max) / 2;
    if (avrB >= avrA) return 1
    else if (avrA === avrB) return 0
    else return -1
  })
}


export default fetchData || []; 

