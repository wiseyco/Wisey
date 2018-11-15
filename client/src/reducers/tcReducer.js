import { GET_TRAINING_CENTER, TRAINING_CENTER_LOADING, CLEAR_CURRENT_TRAINING_CENTER } from '../actions/types';


// 1- Add th reducer to reducers/index.js
// 2- Add those lines to actions/types.js : 
    // export const GET_TRAINING_CENTER = 'GET_TRAINING_CENTER';
    // export const TRAINING_CENTER_LOADING = 'TRAINING_CENTER_LOADING';
    // export const TRAINING_CENTER_NOT_FOUND = 'TRAINING_CENTER_NOT_FOUND';
    // export const CLEAR_CURRENT_TRAINING_CENTER = 'CLEAR_CURRENT_TRAINING_CENTER';
    // export const GET_TRAINING_CENTERS = 'GET_TRAINING_CENTERS';

// 3- Add those lines into App.js
    // import Dashboard from './components/Dashboard';
    // import AddTrainingCenter from './components/add-training-center/AddTrainingCenter';
    // <Route exact path="/dashboard" component={Dashboard} />
    // <Route exact path="/add-training-center" component={AddTrainingCenter} />
    // ???? PrivateRoute ???? // Sinon : https://www.udemy.com/mern-stack-front-to-back/learn/v4/t/lecture/10055374?start=0

// 4- Add those lines into layouts/Navbar.js
    // import { clearCurrentTrainingCenter } from '../../acitons/tcActions';

    // Dans onLogoutClick, avant logoutUser:
        // this.props.clearCurrentTrainingCenter();

    // Dans l'export default, ajouter clearCurrentTrainingCenter 

    // Dans App.js, add those lines (après store.dispatch(logoutUser());  )
    // import { clearCurrentTrainingCenter } from './actions/tcActions';
    // store.dispatch(clearCurrentTrainingCenter());
    
// Private route ??
// https://www.udemy.com/mern-stack-front-to-back/learn/v4/t/lecture/10055368?start=0

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