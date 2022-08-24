
import axios from "axios";
const URL = "http://127.0.0.1:8000/general/fetch_airports/"

export const getAirports = (origin_id) => {
    let id = origin_id ? origin_id +'/' : 0
    return new Promise((resolve,reject) =>{
     axios.get(URL+id).then((res) => resolve(res))
    .catch((err) => {
        // alert(`${JSON.stringify(err.response.data.detail)}`)
        console.warn(`${JSON.stringify(err.response.data)}`)
        reject(err.response.data)
        })}
    );}
  