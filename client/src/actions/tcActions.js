import axios from 'axios';
import { GET_TRAINING_CENTER, TRAINING_CENTER_LOADING, CLEAR_CURRENT_TRAINING_CENTER, GET_ERRORS } from './types';


// Get current training center
export const getCurrentTrainingCenter = () => dispatch => {
  
  dispatch(setTrainingCenterLoading());
  
  axios
    .get('/api/tc')
    .then(res => 
      dispatch({
        type: GET_TRAINING_CENTER,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_TRAINING_CENTER,
        payload: {}
      })  
    )
}

// Get tc by handle
export const getProfileByHandle = uri => dispatch => {
  dispatch(setTrainingCenterLoading());
  axios
    .get(`/api/tc/${uri}`)
    .then(res =>
      dispatch({
        type: GET_TRAINING_CENTER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRAINING_CENTER,
        payload: null
      })
    );
};

// Create training center
export const createTrainingCenter = (trainingCenterData, history) => dispatch => {
  axios.post('/api/tc', trainingCenterData)
    .then(res => history.push('/dashboard'))
    // .then(res => console.log('res :', res))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    }
    );
}

// Udpate training center
export const updateTrainingCenter = (trainingCenterData, history) => dispatch => {
  axios.post('/api/tc', trainingCenterData)
    .then(res => history.push('/tc-profile'))
    // .then(res => console.log('res :', res))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    }
    );
}

// Training center loading
export const setTrainingCenterLoading = () => {
  return {
    type: TRAINING_CENTER_LOADING
  };
};

// Clear training center
export const clearCurrentTrainingCenter = () => {
  return {
    type: CLEAR_CURRENT_TRAINING_CENTER
  };
};