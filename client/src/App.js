import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { clearCurrentTrainingCenter } from './actions/tcActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

// import NavbarLanding from './components/layout/NavbarLanding';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer'
// import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Courses from './components/courses/Courses'
import Course from './components/courses/Course'


import Dashboard from './components/dashboard/Dashboard';
import AddTrainingCenter from './components/add-training-center/AddTrainingCenter';

import Profile from './components/profile/Profile';


import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set Auth Token Header Auth
  setAuthToken(localStorage.jwtToken);
  // Decode Token and get User info
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <Route exact path="/" component={ Landing } />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <div className="container">
          <Route exact path="/register" component={ Register } />
          {/* <Route exact path="/login" component={ Login } /> */}
          <Route exact path="/add-training-center" component={AddTrainingCenter} />
          <Switch>
            <PrivateRoute exact path="/profile" component={ Profile } />
          </Switch>
          <Route exact path="/Courses" component={ Courses } />
          <Route exact path="/course/:id" component={ Course } />
          </div>
          <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
