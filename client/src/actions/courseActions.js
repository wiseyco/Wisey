import axios from 'axios';

import { GET_COURSES, GET_ERRORS, COURSE_LOADING, UPDATE_FILTER } from './types';



// Get all courses
export const getCourses = (filters) => dispatch => {
    // dispatch(setCourseLoading());
    axios
      .get('/api/courses')
      .then(res => {
        let courses = res.data;
        console.log("courses", courses, "res data", res.data)

        if(filters 
          // && filters.length > 0
          ){
        courses = courses.filter( c => filters.find( f => c.categories.find( field => field === f ) ) )
      }

      // if(!!callback) {
      //   callback();
      // }
        dispatch({
          type: GET_COURSES,
          payload: courses
        })}
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  export const updateFilters = (filters) => dispatch => {
    dispatch({
      type: UPDATE_FILTER,
      payload: filters,
    });
  
  }

  // Course loading
export const setCourseLoading = () => {
  return {
      type: COURSE_LOADING
  }
};