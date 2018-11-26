import React, { Component } from 'react'
import '../../../assets/jss/dashboard.css';
import { NavLink } from 'react-router-dom';


class SideBar extends Component {
  render() {
    return (

      <div className="sidebar" data-image="../assets/img/sidebar-5.jpg" data-color="orange">
    
        <div className="sidebar-wrapper">
          <div className="logo">
            <NavLink to="/dashboard" className="simple-text">
              La Capsule
            </NavLink>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard" activeClassName="active">
                <i className="fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/tc-courses">
              <i className="fas fa-list-ol"></i>
                <p>Mes parcours</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/tc-map">
                <i className="fas fa-table"></i>	
                <p>Calendrier</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tc-profile" className="nav-link" activeClassName="active">
                <i className="fas fa-user-alt"></i>
                <p>Profile</p>
              </NavLink>
            </li>
            <li className="active-pro">
              <div className="nav-link text-center" href="upgrade.html">
                <p>Wisey ❤ you</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
    )
  }
}

export default SideBar;