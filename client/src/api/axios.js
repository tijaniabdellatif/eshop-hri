import axios from 'axios';
 const customFetch =  axios.create({
    baseURL:'http://localhost:5001/'
})

export default customFetch;