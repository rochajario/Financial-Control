const BASE_URL = "https://api-financial-control.herokuapp.com/";

export async function getAllEnrties() {
    fetch(`${BASE_URL}/entries`)
        .then(res => {
            console.log(res.json)
        })
}