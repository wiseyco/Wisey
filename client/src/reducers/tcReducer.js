import { GET_TRAINING_CENTER, TRAINING_CENTER_LOADING, CLEAR_CURRENT_TRAINING_CENTER } from '../actions/types';

const initialState = {
  trainingCenter: null,
  trainingCenters: null,
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TRAINING_CENTER_LOADING: 
      return {
        ...state,
        loading: true
      };
    case GET_TRAINING_CENTER:
      return {
        ...state,
        trainingCenter: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_TRAINING_CENTER: 
      return {
        ...state,
        trainingCenter: null
      };
    default: {
      return state;
    }
  }
}