import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          email: '',
          password: '',
          errors: {}
        };
    
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

      componentWillReceiveProps(nextProps) {
        
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push('/register');
        }
    
        if(nextProps.errors){
         this.setState({errors: nextProps.errors})
        }
      }

      onSubmit (e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData);
        this.props.loginUser(userData);
    }

      onChange (e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render () {
      const { errors } = this.state;
      
    return (

        <div>

        <Button color="danger" onClick={this.toggle}>Connexion</Button>

        <Modal className="reactstrap-modal" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Connexion</ModalHeader>
             <ModalBody >
                <form onSubmit={this.onSubmit}>
                                                    <div className="form-group login-form">
                                                        <br />
                                                      <label for="exampleInputEmail1">Email</label>
                                                      <input type="email"
                                                      name="email"
                                                      className={classnames('form-control', { 'is-invalid': errors.email})}
                                                      value={this.state.email}
                                                      onChange={this.onChange}
                                                      id="exampleInputEmail1"
                                                      aria-describedby="emailHelp"
                                                      placeholder="Entrez votre adresse email"
                                                      />
                                                      {errors.email && (<div className ="invalid-feedback">{errors.email}</div>)}
                                                    </div>
                                                    <div className="form-group login-form">
                                                      <label for="exampleInputPassword1">Mot de passe</label>
                                                      <input type="password"
                                                      name="password"
                                                      value={this.state.password}
                                                      onChange={this.onChange}
                                                      className={classnames('form-control', { 'is-invalid': errors.password})}
                                                      id="exampleInputPassword1"
                                                      placeholder="Saisissez votre mot de passe"
                                                      />
                                                      {errors.password && (<div className ="invalid-feedback">{errors.password}</div>)}
                                                    </div>
                                                    <button type="submit" className="btn btn-primary primary-btn">Connexion</button>
                                                    <div className="form-group login-form">
                                                            <Link to='/register'><p id="emailHelp" className="form-text text-muted">Vous n'avez pas encore de compte ? Inscrivez vous ici</p></Link>
                                                          </div>
                                                  </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                                    </ModalFooter>
                                    </Modal>

                                    </div>
    )
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
