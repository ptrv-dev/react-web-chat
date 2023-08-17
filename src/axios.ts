import axios from 'axios';

const token = window.localStorage.getItem('accessToken');

export const $axios = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});
