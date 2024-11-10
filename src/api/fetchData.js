import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const fetchData = async () => {
  const response = await axios.get(`${API_URL}?api_key=${API_KEY}`)
  return response.data
}


export default fetchData;

