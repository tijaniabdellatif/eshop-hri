import axios from 'axios';
 const customFetch =  axios.create({
    baseURL:'http://localenv.com:5001/'
})

export default customFetch;