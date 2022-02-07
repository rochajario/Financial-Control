import Axios from 'axios'

let BASE_URL = 'https://api-financial-control.herokuapp.com/api';

export function getToken() {
    const storageItem = localStorage.getItem('financial-control-access');
    if (!storageItem) {
        return
    }
    return JSON.parse(storageItem).user.token;
}

const service = {};

//Login
service.signUp = loginData => Axios.post(`${BASE_URL}/user`, loginData);
service.login = loginData => Axios.post(`${BASE_URL}/auth/login`, loginData);

//Get
service.getAllEntries = token => Axios.get(`${BASE_URL}/entries`, {
    headers: {
        'Authorization': token
    }
});

service.getSummary = (token, year, month) => Axios.get(`${BASE_URL}/summary/${year}/${month}`, {
    headers: {
        'Authorization': token
    }
});

service.getExpenses = (token, year, month) => Axios.get(`${BASE_URL}/summary/expenses/${year}/${month}`, {
    headers: {
        'Authorization': token
    }
});

//Post
service.newEntry = (token,entry) => Axios.post(`${BASE_URL}/entries`, entry, {
    headers: {
        'Authorization': token
    }
});

export { service }