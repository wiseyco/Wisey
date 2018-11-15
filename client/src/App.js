import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import NavbarLanding from './components/layout/NavbarLanding';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer'
// import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Test from './components/common/Test'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Route exact path="/" component={ Landing } />
       <Route exact path="/test" component={ Test } />
       <div className="container">
       <Route exact path="/register" component={ Register } />
       {/* <Route exact path="/login" component={ Login } /> */}
       </div>
       <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
