import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import tcReducer from './tcReducer';



export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    trainingCenter: tcReducer
})