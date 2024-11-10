import axios from 'axios';


const API_URL = import.meta.API_URL;
const API_KEY = import.meta.API_KEY;

const fetchData = async () => {
  const response = await axios.get(`${API_URL}?api_key=${API_KEY}`)
  return response.data
}


export default fetchData;

