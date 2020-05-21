import axios from 'axios'
import {authHeader} from '@/_helpers/'

const API_ENDPOINT = "http://localhost:5000/api/v1"

function getTables() {
  return axios.get(`${API_ENDPOINT}/admin/tables`, {'header': authHeader})
}

function getSingleTable(tableName) {
  return axios.get(`${API_ENDPOINT}/admin/table/${tableName}`, {'header': authHeader})
}

export default {
  getTables, getSingleTable
};