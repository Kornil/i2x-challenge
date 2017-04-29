import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import userReducer from '../../src/reducers/userReducer';
import * as ActionType from '../../src/actions/types';
import * as actions from '../../src/actions/userActions';

const initialState = {
  authenticated: false,
  user: '',
};

const API_URL = 'https://i2x-challenge.herokuapp.com';
const defaultEmail = 'challenge@i2x.ai';

//const middlewares = [promiseMiddleware];
const mockStore = configureStore([thunk]);

describe('Reducer::userReducer', () => {
  it('returns default state in case of wrong action type', () => {
    // setup
    const action = { type: 'unknown' };
    // execute
    const newState = userReducer(initialState, action.type);
    // verify
    expect(newState).to.deep.equal(initialState);
  });

  describe('on LOGIN_USER_SUCCESS', () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });
    it('returns the response in given action', () => {
      // setup
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: { message: 'success', status: '200' },
        });
      });

      const store = mockStore({
        authenticated: false,
        user: '',
      });
      const expectedActions = [{
        type: ActionType.LOGIN_USER_SUCCESS,
        user: defaultEmail,
        authenticated: true,
      }];

      return store.dispatch(actions.loginUser(defaultEmail, 'pass123'))
      .then(() => { // return of async actions
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
    });
  });

  describe('on LOGOUT_USER_SUCCESS', () => {
    it('returns the response in given action', () => {
      // setup
      const action = {
        type: ActionType.LOGOUT_USER_SUCCESS,
        response: {
          user: '',
          authenticated: false,
        },
      };
      // execute
      const newState = userReducer(initialState, action.type);
      // verify
      expect(newState).to.deep.equal(action.response);
    });
  });
});
