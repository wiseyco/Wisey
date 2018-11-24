import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';


// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = (userData) => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user
export const logoutUser = () => dispatch => {
  // Remove Token from Local Storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to an empty object which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}

// Update User
export const updateUser = (userData, history) => dispatch => {
  axios
    .post('api/users/update', userData)
    .then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      })
      history.push('/profile')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
 };

export const userForgotPassword = (userData, history) => dispatch => {
  axios
    .post('api/users/forgot-password', userData)
    .then(res => history.push('/email-sent'))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const userResetPassword = (userData, history) => dispatch => {
  axios
    .post('api/users/reset-password', userData)
    .then(res => {
      history.push('dashboard')
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};