
import axios from "../../utils/api/generalAxios";
import {AUTH_URL} from '../../utils/api/urls'
// const AuthURL = "http://127.0.0.1:8000/auth/authenticate/"
const PermsURL = "http://127.0.0.1:8000/auth/fetch_user_perms/"

// const tempTok = JSON.parse(sessionStorage.getItem("accessToken"))
// console.log(tempTok)
// const config = {
    
//     headers: { Authorization: `Bearer ${tempTok?tempTok:''}` }
// };

export const signIn = (user) => {
    // console.log(user);
    return new Promise((resolve,reject) =>{
    axios.post(AUTH_URL.LOGIN, user).then((res) => resolve(res))
    .catch((err) => {
        reject(err.response.data)
        })})
;}




export const register = (user) => {
    console.log(user);
    return new Promise((resolve,reject) =>{
    axios.post(AUTH_URL.REGISTER, user).then((res) => resolve(res))
    .catch((err) => {
        reject(err.response.data)
        })})
;}


// export const fetchUserPerms = () => {
    
//     return new Promise((resolve,reject) =>
//     axios.get(PermsURL,config).then((res) => resolve(res))
//     .catch((err) => {
//         reject(err.response.data)
//         })
//     );}