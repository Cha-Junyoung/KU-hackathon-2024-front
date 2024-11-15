import axios from 'axios';

export const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  // baseURL: 'http://localhost:8080/api',
  timeout: 60000,
  withCredentials: true,
});

// Request interceptor to add the access token to every request
API.interceptors.request.use(
    async config => {
      // Retrieve the token from secure storage
      const accessToken = await localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    error => {
      // Handle the error
      return Promise.reject(error);
    },
);

// Response 인터셉터 추가
API.interceptors.response.use(
    (response) => {
      // 응답 데이터를 변환합니다.
      return response;
    },
    (error) => {
      // 에러를 그대로 전달합니다.
      return Promise.reject(error);
    },
);
