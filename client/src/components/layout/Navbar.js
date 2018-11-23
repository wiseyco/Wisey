import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearCurrentTrainingCenter } from '../../actions/tcActions';
import DarkLogo from '../../assets/img/wiseyco/logos/dark-logo.png';

import { logoutUser } from '../../actions/authActions';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
    DropdownItem } from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


    onLogoutClick (e) {
        e.preventDefault();
        this.props.logoutUser();
        this.props.clearCurrentTrainingCenter();
    }

    render () {
    
        const { isAuthenticated, user} = this.props.auth;

        const authLinks = (

            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink><Link class="nav-link" to="/courses">Formations <span class="sr-only">(current)</span></Link></NavLink>
                </NavItem>
                <NavItem>
                <Link class="nav-link" to="/profile">Profil <span class="sr-only">(current)</span></Link>
                </NavItem>
                <NavItem>
                    <NavLink><Link class="nav-link" to="/dashboard">Accès Pro<span class="sr-only">(current)</span></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    <Link to="/" onClick={this.onLogoutClick.bind(this)}>Logout</Link>
                    </NavLink>
                </NavItem>
            </Nav>
        )

        const guestLinks = (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink><Link class="nav-link" to="/courses">Formations <span class="sr-only">(current)</span></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link class="nav-link" to="/dashboard">Accès Pro<span class="sr-only">(current)</span></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Login/></NavLink>
                </NavItem>
            </Nav>
    
            )

    return (
            <div>
                <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark second-navbar">
                    <Link to="/"><NavbarBrand><img style={{width: '150px'}} src={DarkLogo} /></NavbarBrand></Link>
                        <NavbarToggler onClick={this.toggle} style={{color: 'black'}} />
                            <Collapse isOpen={this.state.isOpen} style={{color: 'black'}} navbar> 
                                {isAuthenticated ? authLinks : guestLinks}
                        </Collapse>
                </Navbar>
            </div>
        )
    }
}
Navbar.proptypes = {
    logoutUser: PropTypes.func.isRequired,
    clearCurrentTrainingCenter: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  })
  
  export default connect(mapStateToProps, {logoutUser, clearCurrentTrainingCenter })(Header);