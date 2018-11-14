import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


class Login extends Component {

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

        <div>

        <Button color="danger" onClick={this.toggle}>Connexion</Button>

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
                                                            <Link to='/register'><p id="emailHelp" className="form-text text-muted">Vous n'avez pas encore de compte ? Inscrivez vous ici</p></Link>
                                                          </div>
                                                  </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Valider</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                                    </ModalFooter>
                                    </Modal>

                                    </div>
    )
    }
}

export default Login;