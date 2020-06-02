import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'auth/signin/', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'auth/signup', {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
