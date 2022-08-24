import { ADMIN_URL } from "../../utils/api/urls";
import axios from "../../utils/api/generalAxios";

const tempTok = JSON.parse(sessionStorage.getItem("accessToken"))
const config = {
    
    headers: { Authorization: `Bearer ${tempTok?tempTok:''}` }
};


export const getUsers = (user) => {
    // console.log(user);
    return new Promise((resolve,reject) =>{
    axios.get(ADMIN_URL.ALL_USERS, config).then((res) => resolve(res))
    .catch((err) => {
        reject(err.response.data)
        })
    })
;}