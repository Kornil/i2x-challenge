import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import getaudios from './getaudios';

export default combineReducers({ login, getaudios, form: formReducer });
