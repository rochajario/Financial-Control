import Axios from 'axios'
const api = {}
const BASE_URL = "https://api-financial-control.herokuapp.com";

api.getAllEntries = () => Axios.get(`${BASE_URL}/entries`)
api.newEntry = entry => Axios.post(`${BASE_URL}/entries`, entry)

export {api}