import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import tcReducer from './tcReducer';
import courseReducer from './courseReducer';
import filterReducer from './filterReducer';



export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    trainingCenter: tcReducer,
    course: courseReducer,
    filters: filterReducer,
})