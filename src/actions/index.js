import aegs from '../apis/aegs.js';
import {GET_SCORE} from './types';

export const getScore = formValues => async dispatch => {
    const response = await aegs.post('/aegs/essay/score', formValues);
    dispatch({ type: GET_SCORE, payload: response.data });   
}