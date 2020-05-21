import axios from "axios";

const API_ENDPOINT = "http://localhost:5000"

export default {
  getTables() {
    return axios.get(`${API_ENDPOINT}/tables`);
  },

  getSingleTable(tableName) {
    return axios.get(`${API_ENDPOINT}/tables/${tableName}`);
  }
};
