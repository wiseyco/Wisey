import axios from 'axios';
import { GET_TRAINING_CENTER, TRAINING_CENTER_LOADING, CLEAR_CURRENT_TRAINING_CENTER } from './types';

// Get current training center
export const getCurrentTrainingCenter = () => dispatch => {
  
  dispatch(setTrainingCenterLoading());
  
  axios
    .get('/api/tc')
    .then(res => {
      console.log('res :', res);
      dispatch({
        type: GET_TRAINING_CENTER,
        payload: res.data
      })
    })
    .catch(err => 
      dispatch({
        type: GET_TRAINING_CENTER,
        payload: {}
      })  
    )
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