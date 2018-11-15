import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


class Navbar extends Component {


    onLogoutClick (e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render () {
    
        const { isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Formations<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/profile">Profil <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-link">
                <a href="" onClick={this.onLogoutClick.bind(this)}>
                     {/* <img style={{width: '25px', marginRight: '5px'}} src={user.avatar} alt={user.name} title="You must have a Gravatar connecter to your email to display an image" /> */}
                     {' '}
                        Logout
                </a>
                </li>
            </ul>

        </div>
        )

        const guestLinks = (
            <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Formations<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <Login/>
                </li>
            </ul>

        </div>
            )

    return (
        <div> 
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark second-navbar">
        <Link class="navbar-brand" to="/">wiseyco</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        {isAuthenticated ? authLinks : guestLinks}
        </nav>

        </div>
    )
    }
}
Navbar.proptypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  })
  
  export default connect(mapStateToProps, {logoutUser })(Navbar);