import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

// import NavbarLanding from './components/layout/NavbarLanding';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer'
// import Login from './components/auth/Login'
import Register from './components/auth/Register'

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
          <div className="container">
          <Route exact path="/register" component={ Register } />
          {/* <Route exact path="/login" component={ Login } /> */}
          </div>
          <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
