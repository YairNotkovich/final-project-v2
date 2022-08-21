
// source https://github.com/gitdagray/react_jwt_auth.git
import axios from 'axios';

import { BASE_URL } from "./urls";

export default axios.create({
    baseURL: BASE_URL,
});

export const privateAxios = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

