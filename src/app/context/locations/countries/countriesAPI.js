
import axios from "axios";
const URL = "http://127.0.0.1:8000/general/fetch_countries/"

export const getCountries = () => {
    // console.log("bef");
    return new Promise((resolve,reject) =>
    axios.get(URL).then((res) => resolve(res))
    .catch((err) => {
        // alert(`${JSON.stringify(err.response.data.detail)}`)
        console.warn(`${JSON.stringify(err.response.data.detail)}`)
        reject(err.response.data)
        })
    );}
  