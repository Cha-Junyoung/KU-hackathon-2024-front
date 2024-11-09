import axios from 'axios';

export const API = axios.create({
  // baseURL: 'https://port-0-test-back-m32mykqd6aabb332.sel4.cloudtype.app/api',
  baseURL: 'http://localhost:8080/api',
  timeout: 3000,
  withCredentials: true,
});

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
