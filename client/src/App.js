import React, { Component } from 'react';
import NavbarLanding from './components/layout/NavbarLanding';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavbarLanding />
       <Landing />
       <Footer />
      </div>
    );
  }
}

export default App;
