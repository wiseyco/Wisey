import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';

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

    render () {
        
    
    return (
         // Start Header Area
		<header className="default-header">
        <div className="sticky-header">
            <div className="container">
                <div className="header-content d-flex justify-content-between align-items-center second-navbar-content">
                    <div className="logo">
                        <Link to="/"><h3>wiseyco</h3></Link>
                    </div>
                    <div className="right-bar d-flex align-items-center">
                        <nav className="d-flex align-items-center">
                            <ul className="main-menu">
                                <li><a href="/search.html">Formations</a></li>
                                <li><Link to="/profile">Profil</Link></li>
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
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
    // End Header Area
    )
    }
}

export default NavbarLanding;