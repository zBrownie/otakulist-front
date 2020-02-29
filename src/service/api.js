import axios from 'axios'


const api = axios.create({
    baseURL: 'https://otaku-list.herokuapp.com/'
})

//process.env.REACT_APP_API_URL

export default api