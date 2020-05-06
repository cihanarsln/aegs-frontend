import aegs from '../apis/aegs.js';
import {GET_SCORE} from './types';
import { formValues } from 'redux-form';

export const getScore = formValues => async dispatch => {
    const response = await aegs.get('/aegs/score', {formValues});
    dispatch({ type: GET_SCORE, payload: response.data });   
}