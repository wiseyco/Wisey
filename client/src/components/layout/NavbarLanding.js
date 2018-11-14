import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class NavbarLanding extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render () {
        
    
    return (
         // Start Header Area
		<header className="default-header">
        <div className="sticky-header">
            <div className="container">
                <div className="header-content d-flex justify-content-between align-items-center second-navbar-content">
                    <div className="logo">
                        <a href="index.html"><h3>wiseyco</h3></a>
                    </div>
                    <div className="right-bar d-flex align-items-center">
                        <nav className="d-flex align-items-center">
                            <ul className="main-menu">
                                <li><a href="/search.html">Formations</a></li>
                                <li><Button color="danger" onClick={this.toggle}>Connexion</Button>
                                    <Modal className="reactstrap-modal" isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Connexion</ModalHeader>
                                    <ModalBody >
                                    <form>
                                                    <div className="form-group login-form">
                                                        <br />
                                                      <label for="exampleInputEmail1">Email</label>
                                                      <input type="email" className="form-control profile-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrez votre adresse email" />
                                                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                    </div>
                                                    <div className="form-group login-form">
                                                      <label for="exampleInputPassword1">Mot de passe</label>
                                                      <input type="password" className="form-control profile-input" id="exampleInputPassword1" placeholder="Saisissez votre mot de passe" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary primary-btn">Connexion</button>
                                                    <div className="form-group login-form">
                                                            <a href="#"><small id="emailHelp" className="form-text text-muted">Vous n'avez pas encore de compte ? Inscrivez vous ici</small></a>
                                                          </div>
                                                  </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Valider</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                                    </ModalFooter>
                                    </Modal>
                                </li>
                              
                                <div className="search relative">
                                        <span className="lnr lnr-magnifier"></span>
                                        <form action="#" className="search-field">
                                            <input type="text" placeholder="Search here" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search here'" />
                                            <button className="search-submit"><span className="lnr lnr-magnifier"></span></button>
                                        </form>
                                    </div>
                                <li><button className="primary-btn navbar-btn">Je suis un professionnel</button></li>
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