import axios from 'axios';

import { GET_COURSES, GET_ERRORS, COURSE_LOADING, UPDATE_FILTER, GET_COURSE } from './types';


// Get course by id
export const getCourseById = (id) => dispatch => {
  // dispatch(setProfileLoading());
  axios.get(`/api/courses/get/${id}`)
  .then(res => {
    console.log("res après axios", res);
      dispatch({
          type: GET_COURSE,
          payload: res.data
      })
    })
      
      .catch(err =>
          dispatch({
              type: GET_COURSE,
              payload: null
          })
          )
}

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