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
    Nav,
    NavItem,
    } from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          scroll: 0
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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
   
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    handleScroll = () => {
        this.setState({scroll: window.scrollY});
     }

    render () {

        let classNavbar = ["Navbar"];

        if(this.state.scroll > 50){
            classNavbar.push("navbar navbar-expand-md navbar-dark fixed-top bg-dark second-navbar navbar-scrolled");
         }

         else {
             classNavbar.push('navbar navbar-expand-md navbar-dark fixed-top bg-dark second-navbar')
         }
    
        const { isAuthenticated } = this.props.auth;

        const authLinks = (

            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to="/courses">Formations <span className="sr-only">(current)</span></Link>
                </NavItem>
                <NavItem>
                <Link className="nav-link" to="/profile">Profil <span className="sr-only">(current)</span></Link>
                </NavItem>
                <NavItem>
                   <Link className="nav-link" to="/dashboard">Accès Pro<span className="sr-only">(current)</span></Link>
                </NavItem>
                <NavItem>
                    <Link to="/" onClick={this.onLogoutClick.bind(this)}>Logout</Link>
                </NavItem>
            </Nav>
        )

        const guestLinks = (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to="/courses">Formations <span className="sr-only">(current)</span></Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/dashboard">Accès Pro<span className="sr-only">(current)</span></Link>
                </NavItem>
                <NavItem>
                    <Login/>
                </NavItem>
            </Nav>
    
            )

    return (
            <div>
                <Navbar className={classNavbar.join(" ")}>
                    <Link to="/"><img style={{width: '150px', marginTop: '10px', marginBottom: '10px'}} src={DarkLogo} alt="Wisey logo"/></Link>
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