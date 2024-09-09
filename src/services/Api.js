import axios from 'axios';  
const BASE_URL = 'https://backendtesteestagio.onrender.com';

export const Api = axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const { accessToken } = JSON.parse(localStorage.getItem("user")) || {};
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    
    return Promise.reject(error);
  }
);

export const setAuthToken = (token) => {
  if (token) {
    axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosPrivate.defaults.headers.common['Authorization'];
  }
};
