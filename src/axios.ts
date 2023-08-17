import axios from 'axios';

export const $axios = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: window.localStorage.getItem('accessToken')
      ? `Bearer ${window.localStorage.getItem('accessToken')}`
      : undefined,
  },
});
