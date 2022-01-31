import Axios from 'axios'
const api = {}
const BASE_URL = "https://api-financial-control.herokuapp.com";

//Get
api.getAllEntries = () => Axios.get(`${BASE_URL}/entries`)
api.getSummary = (year, month) => Axios.get(`${BASE_URL}/summary/${year}/${month}`)

//Post
api.newEntry = entry => Axios.post(`${BASE_URL}/entries`, entry)

export {api}