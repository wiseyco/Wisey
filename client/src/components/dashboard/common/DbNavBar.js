import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class DbNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className=" container-fluid  ">
          <NavLink className="navbar-brand" to="/dashboard"> Dashboard </NavLink>
            <button to="" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navigation">
              <ul className="nav navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="#" className="nav-link" data-toggle="dropdown">
                        <span className="d-lg-none">Dashboard</span>
                    </NavLink>
                </li>
                <li className="dropdown nav-item">
                    <NavLink to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                        <span className="notification">5</span>
                        <i className="far fa-envelope-open"></i>
                        <span className="d-lg-none">Notification</span>
                    </NavLink>
                    <ul className="dropdown-menu">
                        <NavLink className="dropdown-item" to="#">Notification 1</NavLink>
                        <NavLink className="dropdown-item" to="#">Notification 2</NavLink>
                        <NavLink className="dropdown-item" to="#">Notification 3</NavLink>
                        <NavLink className="dropdown-item" to="#">Notification 4</NavLink>
                        <NavLink className="dropdown-item" to="#">Another notification</NavLink>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">
                      <i class="fas fa-search"></i>
                      <span className="d-lg-block">&nbsp;Search</span>
                    </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="#pablo">
                        <span className="no-icon">Account</span>
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="no-icon">Dropdown</span>
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink className="dropdown-item" to="#">Action</NavLink>
                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                    <NavLink className="dropdown-item" to="#">Something</NavLink>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                    <div className="divider"></div>
                    <NavLink className="dropdown-item" to="#">Separated link</NavLink>
                  </div>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="#pablo">
                  <span className="no-icon">Log out</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default DbNavBar;