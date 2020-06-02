export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.data.token) {    
    return { 'token': user.data.token }; // for Node.js Express back-end
  } else {
    return {};
  }
}
