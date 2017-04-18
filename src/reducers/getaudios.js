import * as actions from '../actions/types';

const initialState = {
  audioFiles: [],
};

/**
 * get data to display to user
 * @param {object} state where audio data is stored
 * @param {string} action string used to identify the function to use
 * @return {object} updated state
 */
export default function getaudios(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        audioFiles: action.audioFiles,
      };
    case actions.REMOVE_DATA:
      return {
        ...state,
        audioFiles: action.audioFiles,
      };
    default:
      return state;
  }
}
