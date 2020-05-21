import {authHeader} from '@/_helpers';
import axios from 'axios';
import router from '@/router';

const API_ENDPOINT = "http://localhost:5000/api/v1";

export const userService = {
  login,
  logout,
  register,
  getAll
};

function login(form) {
  axios.post(`${API_ENDPOINT}/auth/signin`, form)
      .then(user => {
        if(user.data.data.token) {
          localStorage.setItem('user', JSON.stringify(user.data.data))
          router.push('/dashboard')
        }
      })
      .catch(console.error);
}

function logout() {
  localStorage.removeItem('user');
}

function register(form) {
  axios.post(`${API_ENDPOINT}/auth/signin`, form)
    .then(console.log("account created!"))
    .catch(console.error);
}

function getAll() {
  axios.get(`${API_ENDPOINT}/admin/users`, {'headers': authHeader})
    .then(res => console.table(res))
    .catch(console.error)
}