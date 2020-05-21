import { userService } from '@/_services';
import router from 'router';

const user = JSON.parse(localStorage.getItem('user'));
const state = user 
  ? {status: {loggedIn: true}, user}
  : {status: {}, user: null}

const actions = {
  login({dispatch, commit}, {username, password}){
    commit
  }
}