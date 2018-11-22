import { GET_COURSES, GET_COURSE, COURSE_LOADING, GET_LATEST_COURSES } from '../actions/types';

const initialState = {
    course: null,
    courses: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_COURSE:
        return {
            ...state,
            course: action.payload,
            loading: false
        }
        case GET_COURSES:
        return {
            ...state,
            course: action.payload,
            loading: false
        }
        case GET_LATEST_COURSES:
        return {
            ...state,
            course: action.payload,
            loading: false
        }
        case COURSE_LOADING:
        return {
            ...state,
            loading: true
        }
        default:
        return state;
        
    }
}