import axios from 'axios';
import authService from './auth';

import { API_BASE_URL } from '../config/config';

const apiService = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

apiService.interceptors.request.use(
    (config) => {
        const token = authService.getToken() ;
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiService.interceptors.response.use(
    (response) => {
        const token = response.data.token ;
        console.log("data -> ", response.data)
        authService.setToken(token) ;
        return response;
    },
    async (error) => {
        return error ;
    }
);

export default apiService ;
