import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import recordingsReducer from './recordingsReducer';

export default combineReducers({ userReducer, recordingsReducer, form: formReducer });
