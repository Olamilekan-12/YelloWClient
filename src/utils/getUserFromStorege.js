import axios from 'axios';

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('yellowUser')
    ? JSON.parse(localStorage.getItem('yellowUser'))
    : null;
  return user;
};

export const baseUrl = axios.create({
  baseURL: 'https://yellowiron.onrender.com',
});
