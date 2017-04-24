import axios from 'axios';
import cookie from 'react-cookie';

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_COOKIE,
  LOGOUT_USER_SUCCESS,
} from './types';

/**
 * handle user login
 * @param {string} email is the user email
 * @param {string} password is the user password
 * @return {string} json web token
 */
export function loginUser(email, password) {
  return dispatch => axios.post('https://i2x-challenge.herokuapp.com/core/login/', {
    email,
    password,
  }).then((res) => {
    cookie.save('token', res.data.token);
    cookie.save('user', email);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      user: email,
      authenticated: true,
    });
  })
  .catch(() => {
    dispatch(() => {
      alert('Error: Invalid email or password.');
      return {
        type: LOGOUT_USER_SUCCESS,
        user: '',
        authenticated: false,
      };
    });
  });
}

/**
 * @param {string} user the user on cookie
 * @return {object} updated state with user
 */
export function loginFromCookie() {
  return {
    type: LOGIN_USER_COOKIE,
    user: cookie.load('user'),
    authenticated: true,
  };
}

/**
 * @return {*} actually nothing, just logs the user out and deletes the cookies
 */
export function logout() {
  cookie.remove('user');
  cookie.remove('token');
  return {
    type: LOGOUT_USER_SUCCESS,
    user: '',
    authenticated: false,
  };
}
