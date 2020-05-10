import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import essayReducer from './essayReducer';

export default combineReducers({
    form: formReducer,
    essay: essayReducer
});