
import  {privateAxios} from '../../utils/api/customAxios'
import {USER_URL} from '../../utils/api/urls'

const axios = privateAxios

export const getUserProfile = () => {
    return new Promise((resolve,reject) =>{
    axios.get(USER_URL.GET_PROFILE).then((res) => resolve(res))
    .catch((err) => {
        reject(err.response.data)
        })})
;}


export const uploadPicture = (form) => {

    return new Promise((resolve,reject) =>{
    axios.post(USER_URL.UPLOAD_IMAGE, form).then((res) => resolve(res))
    .catch((err) => {
        reject(err.response.data)
        })})
;}


