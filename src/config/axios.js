import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

// modify config
// รับ parameter callback 2 ตัว 
// 1. modify
// 2. error
axios.interceptors.request.use((config) => {
    const token = getAccessToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default axios;
