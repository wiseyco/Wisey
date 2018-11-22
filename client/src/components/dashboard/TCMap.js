import React, { Component } from 'react'

import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar.js';
import DbFooter from './common/DbFooter.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TCMap extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <SideBar />
          <div className="main-panel">
            <DbNavBar />


            <DbFooter />
          </div>
        </div>
      </div>
    )
  }
}

export default TCMap;