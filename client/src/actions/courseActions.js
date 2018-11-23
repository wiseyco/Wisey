import axios from 'axios';

import { GET_COURSES, GET_ERRORS, COURSE_LOADING, UPDATE_FILTER, GET_COURSE, GET_LATEST_COURSES, GET_TRAINING_CENTER_COURSES, CREATE_COURSE  } from './types';


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

// Get latest courses
export const getLatestCourses = () => dispatch => {
  // dispatch(setProfileLoading());
  axios.get("/api/courses/latest")
  .then(res => {
    console.log("res latest courses", res);
      dispatch({
          type: GET_LATEST_COURSES,
          payload: res.data
      })
    })
    .catch(err =>
      dispatch({
          type: GET_ERRORS,
          payload: null
        })
    )
}

  export const updateFilters = (filters) => dispatch => {
    dispatch({
      type: UPDATE_FILTER,
      payload: filters,
    });

  }

// Get the training center's courses fot the training center dashboard @route GET api/courses/dashboard

export const getCourseDashboard = () => dispatch => {
  console.log("getCourseDashboard to back");
  dispatch(setCourseLoading());
  axios
    .get('api/courses/dashboard')
    .then(res => {
      console.log("Got courses", res);
      dispatch({
        type: GET_TRAINING_CENTER_COURSES,
        payload: res.data
      })
     }
    )
    .catch(err => {
      console.log("Error", err);
      dispatch({
        type: GET_TRAINING_CENTER_COURSES,
        payload: null
      })}
    );
 };

 // Create Course
 export const createCourse = (courseData, history) => dispatch => {
  axios
    .post('api/courses/create', courseData)
    .then(res => {
      console.log("Created course", res);
      history.push('/dashboard')})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
 };

 // Update Course
 export const updateCourse = (courseData, history) => dispatch => {
  axios
    .post('api/courses/update', courseData)
    .then(res => {
      console.log("Updated course", res);
      history.push('/dashboard')})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
 };

  // Course loading
export const setCourseLoading = () => {
  return {
      type: COURSE_LOADING
  }
};
