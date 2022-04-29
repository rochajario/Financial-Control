import Axios from 'axios'

let BASE_URL = 'https://api-financial-control.herokuapp.com/api';

//let BASE_URL = 'https://fin_ctrl_back:3000/api';

export function getToken() {
    const storageItem = localStorage.getItem('financial-control-access');
    if (!storageItem) {
        return
    }
    return JSON.parse(storageItem).user.token;
}

const service = {};

//Wakeup
service.wakeup = () => Axios.post(`${BASE_URL}/wakeup`);

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

//Put
service.editEntry = (token,entry) => Axios.put(`${BASE_URL}/entries/${entry.id}`, entry, {
    headers: {
        'Authorization': token
    }
});

//Delete
service.removeEntry = (token,id) => Axios.delete(`${BASE_URL}/entries/${id}`, {
    headers: {
        'Authorization': token
    }
});

export { service }