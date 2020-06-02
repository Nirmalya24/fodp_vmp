import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api/v1/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'home');
  }

  getUserBoard() {
    return axios.get(API_URL + 'admin/users', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getTables() {
    return axios.get(API_URL + 'admin/tables/', { headers: authHeader() });
  }

  getTable(tableName) {
    return axios.get(API_URL + 'admin/table/' + tableName, { headers: authHeader() });
  }
}

export default new UserService();
