import { ADMIN_URL } from "../../utils/api/urls";
import axios from "../../utils/api/generalAxios";




export const getUsers = (config) => {
    
    return new Promise((resolve,reject) =>{
    axios.get(ADMIN_URL.ALL_USERS, config).then((res) => resolve(res))
    .catch((err) => {
        reject(err.response.data)
        })
    })
;}