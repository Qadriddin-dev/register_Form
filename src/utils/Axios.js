import axios from "axios";
import { UseLocalStorage } from './UseLocalStorage'

const BaseUrl = 'http://localhost:3000/api/';
const instance = axios.create({baseURL: BaseUrl,});

const { getItem,removeItem } = UseLocalStorage();

instance.interceptors.request.use(
    config => {
        const token = getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

instance.interceptors.response.use(
    response => {
        if(response.status === 401) {
            removeItem('token');
            //then redirect to login page
        }
        return response;
    }
);

const get = (url, params) => {
    return instance.get(url, { params });
}
const post = (url, data) => {
    return instance.post(url, data);
}
const put = (url, data) => {
    return instance.put(url, data);
}
const del = (url, data) => {
    return instance.delete(url, data);
}

export const Axios = {
    get,
    post,
    put,
    del
}