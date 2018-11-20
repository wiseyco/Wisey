import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import { clearCurrentTrainingCenter } from '../../actions/tcActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class NavbarLanding extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       modal: false
    //     };
    
    //     this.toggle = this.toggle.bind(this);
    //   }
    
    //   toggle() {
    //     this.setState({
    //       modal: !this.state.modal
    //     });
    //   }

    onLogoutClick (e) {
        e.preventDefault();
        this.props.logoutUser();
        this.props.clearCurrentTrainingCenter();
        
    }

    render () {
        
        const { isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <nav className="d-flex align-items-center">
                            <ul className="main-menu">
                            <li><Link to="/search">Formations</Link></li>
                                <li><Link to="/profile">Profil</Link></li>
                                <li class="nav-link">
                                <a href="" onClick={this.onLogoutClick.bind(this)}>
                                {/* <img style={{width: '25px', marginRight: '5px'}} src={user.avatar} alt={user.name} title="You must have a Gravatar connecter to your email to display an image" /> */}
                                {' '}
                                Logout
                                </a>
                                </li>
                                <div className="search relative">
                                        <span className="lnr lnr-magnifier"></span>
                                        <form action="#" className="search-field search-field-landing">
                                            <input type="text" placeholder="Search here" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search here'" />
                                            <button className="search-submit"><span className="lnr lnr-magnifier"></span></button>
                                        </form>
                                    </div>
                                    <li><Link className="primary-btn navbar-btn" to="/dashboard">Je suis un professionnel</Link></li>
                            </ul>
                            <a href="#" className="mobile-btn"><span className="lnr lnr-menu"></span></a>
                        </nav>
        )

        const guestLinks = (
            <nav className="d-flex align-items-center">
                            <ul className="main-menu">
                            <li><Link to="/search">Formations</Link></li>
                                <li><Login /></li>
                                <div className="search relative">
                                        <span className="lnr lnr-magnifier"></span>
                                        <form action="#" className="search-field">
                                            <input type="text" placeholder="Search here" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search here'" />
                                            <button className="search-submit"><span className="lnr lnr-magnifier"></span></button>
                                        </form>
                                    </div>
                                {/* <li><button className="primary-btn navbar-btn">Je suis un professionnel</button></li> */}
                                <li><Link className="primary-btn navbar-btn" to="/dashboard">Je suis un professionnel</Link></li>

                            </ul>
                            <a href="#" className="mobile-btn"><span className="lnr lnr-menu"></span></a>
                        </nav>
        )
    
    return (
         // Start Header Area
		<header className="default-header">
        <div className="sticky-header">
            <div className="container">
                <div className="header-content d-flex justify-content-between align-items-center second-navbar-content">
                    <div className="logo">
                        <Link to="/"><img style={{width: '120px'}} src="/logo_title.png" /></Link>
                    </div>
                    <div className="right-bar d-flex align-items-center">
                    {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </div>
        </div>
    </header>
    // End Header Area
    )
    }
}

NavbarLanding.proptypes = {
    logoutUser: PropTypes.func.isRequired,
    clearCurrentTrainingCenter: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  })
  
  export default connect(mapStateToProps, {logoutUser, clearCurrentTrainingCenter })(NavbarLanding);