import * as actions from '../actions/types';

const initialState = {
  authenticated: false,
  user: '',
};

/**
 * log in user
 * @param {object} state where user data is stored
 * @param {string} action string used to identify the function to use
 * @return {object} updated state
 */
export default function login(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        authenticated: action.authenticated,
      };
    case actions.LOGIN_USER_COOKIE:
      return {
        ...state,
        user: action.user,
        authenticated: action.authenticated,
      };
    case actions.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }
}
