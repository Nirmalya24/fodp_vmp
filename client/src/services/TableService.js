import axios from 'axios'

const API_URI = "http://localhost:3000"

export default {
  async getTables() {
    let res = await axios.get(`${API_URI}/tables`);
    return res.data;
  },
  async getTableSingle(tableName) {
    let res = await axios.get(`${API_URI}/tables/${tableName}`);
    return res.data;
  }
}