import axios from 'axios';

import { GET_COURSES, GET_ERRORS, COURSE_LOADING, UPDATE_FILTER, GET_COURSE, GET_LATEST_COURSES, GET_TRAINING_CENTER_COURSES  } from './types';


// Get course by id
export const getCourseById = (id) => dispatch => {
  // dispatch(setProfileLoading());
  axios.get(`/api/courses/get/${id}`)
  .then(res => {
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
        if(filters  && filters.length > 0){
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
  .then(res => 
      dispatch({
          type: GET_LATEST_COURSES,
          payload: res.data
      })
    )
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
  dispatch(setCourseLoading());
  axios
    .get('api/courses/dashboard')
    .then(res =>
      dispatch({
        type: GET_TRAINING_CENTER_COURSES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRAINING_CENTER_COURSES,
        payload: null
      })
    );
 };
 
 // Create Course
 export const createCourse = (courseData, history) => dispatch => {
  axios
    .post('api/courses/create', courseData)
    .then(res => history.push('/dashboard'))
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

// Cards case
// Add to wishList
export const addToWishList = id => dispatch => {
  axios
    .post(`/api/courses/like/${id}`)
    // Reload the post after like
    .then(res => dispatch(getAllCourses()))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Cards case
// Romove from wishList
export const removeFromWishList = id => dispatch => {
  axios
    .post(`/api/courses/unlike/${id}`)
    // Reload the post after unlike
    .then(res => dispatch(getAllCourses()))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// One course case
// Add to wishList
export const addToWishListOne = id => dispatch => {
  axios
    .post(`/api/courses/like/${id}`)
    // Reload the post after like
    .then(res => dispatch(getCourseById(id)))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// One course case
// Romove from wishList
export const removeFromWishListOne = id => dispatch => {
  axios
    .post(`/api/courses/unlike/${id}`)
    // Reload the post after unlike
    .then(res => dispatch(getCourseById(id)))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all courses
// Use for the Add or Remove Wishlist
export const getAllCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get('/api/courses')
    .then(res => {
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })}
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
  );
};

export const getWishedCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get('/api/courses/wishlist')
    .then(res => 
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })  
    )
}