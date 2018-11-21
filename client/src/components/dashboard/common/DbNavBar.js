import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { clearCurrentTrainingCenter } from '../../../actions/tcActions';
import { logoutUser } from '../../../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class DbNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }
  toggle =() => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentTrainingCenter();
  }

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
                  <Dropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                  <DropdownToggle caret>
                    <span className="notification">5</span>
                    <i className="far fa-envelope-open"></i>
                    <span className="d-lg-none">Notification</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        <span className="no-icon">Acceuil du site</span>
                    </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
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
                </li> */}
                <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={this.onLogoutClick}>
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


DbNavBar.proptypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentTrainingCenter: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser, clearCurrentTrainingCenter })(DbNavBar);