import axios from 'axios';

export const getAuthorizationHeader = () => {
  const token = window.localStorage.getItem('accessToken');
  return token ? `Bearer ${token}` : undefined;
};

export const $axios = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: getAuthorizationHeader(),
  },
});
