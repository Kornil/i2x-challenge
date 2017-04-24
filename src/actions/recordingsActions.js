import axios from 'axios';
import cookie from 'react-cookie';

import {
  GET_DATA,
  REMOVE_DATA,
} from './types';

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
