const BASE_URL = "https://api-financial-control.herokuapp.com/";

const customHeaders = new Headers({
    "Access-Control-Allow-Origin": "*"
})

const init = {
    headers: customHeaders,
    mode: 'cors',
    cache: 'default'
}

export async function getAllEnrties() {
    fetch(`${BASE_URL}/entries`, init)
        .then(res => {
            console.log(res.json)
        })
}