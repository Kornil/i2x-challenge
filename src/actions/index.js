import axios from 'axios';
import cookie from 'react-cookie';

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_COOKIE,
  LOGOUT_USER_SUCCESS,
  GET_DATA,
  REMOVE_DATA,
} from './types';

/**
 * handle user login
 * @param {string} email is the user email
 * @param {string} password is the user password
 * @return {string} json web token
 */
export function loginUser(email, password) {
  return (dispatch) => {
    axios.post('https://i2x-challenge.herokuapp.com/core/login/', {
      email,
      password,
    })
      .then((res) => {
        cookie.save('token', res.data.token);
        cookie.save('user', email);
        dispatch({
          type: LOGIN_USER_SUCCESS,
          user: email,
          authenticated: true,
        });
      })
      .catch(() => {
        alert('Error: Invalid email or password.');
      });
  };
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

/**
 * @return {json} the array with the audios
 */
export function getData() {
  return (dispatch) => {
    const instance = axios.create({
      headers: { Authorization: `JWT ${cookie.load('token')}` },
    });
    instance.get('https://i2x-challenge.herokuapp.com/ai/recording/list/')
    .then((res) => {
      dispatch({
        type: GET_DATA,
        audioFiles: res.data.results,
      });
    });
  };
}

/**
 * @return {*} deletes the audios from state on logout
 */
export function removeData() {
  return {
    type: REMOVE_DATA,
    audioFiles: [],
  };
}
