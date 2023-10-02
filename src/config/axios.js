import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

// modify config
// รับ parameter callback 2 ตัว 
// 1. modify
// 2. error
axios.interceptors.request.use(config => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

// ขาเข้า รอรับ req ถ้า 401 ให้กลับไปหน้า login อีกรอบ
axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        removeAccessToken();
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

export default axios;
