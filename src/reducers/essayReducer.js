import { GET_SCORE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SCORE:
      return { ...state, score: action.payload };
    default:
      return state;
  }
};