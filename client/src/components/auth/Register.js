import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Header from '../layout/Navbar';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {

    constructor () {
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Check to see if we are already logged in
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/')
        }
      }

    componentWillReceiveProps (nextProps) {

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
          }

        if (nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }
    

    onChange (e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit (e) {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        console.log(newUser);

        // use this.props.history to redirect from this action
        this.props.registerUser(newUser, this.props.history);

        // axios
        // .post('/api/users/register', newUser)
        // .then(res => console.log("retour serveur :",res.data))
        // .catch(err => this.setState({errors: err.response.data}))
    }

    render () {
    
    const { errors } = this.state;

    return (
        <div>
            <Header />
    <section className="profile-section">
        <div className="container">
            <div className="row">
         <div className="signup-form">
                <form noValidate onSubmit={this.onSubmit} action="/" method="post">
                    <h2>Inscription</h2>
                    <p className="hint-text">Créer un compte ne vous prendra que 30 secondes</p>
                
                    <div className="form-group">
                            <input type="text"
                            className={classnames('form-control', { 'is-invalid': errors.firstName})}
                            value={this.state.firstName}
                            onChange={this.onChange}
                            name="firstName"
                            placeholder="Prénom"
                            />
                            {errors.firstName && (<div className ="invalid-feedback">{errors.firstName}</div>)}
                        </div>
                    <div className="form-group">
                            <input type="text"
                            className={classnames('form-control', { 'is-invalid': errors.lastName})}
                            value={this.state.lastName}
                            onChange={this.onChange}
                            name="lastName"
                            placeholder="Nom"
                            />
                            {errors.lastName && (<div className ="invalid-feedback">{errors.lastName}</div>)}
                        </div>
                    <div className="form-group">
                        <input type="email"
                        className={classnames('form-control', { 'is-invalid': errors.email})}
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email" 
                        placeholder="Email"
                        />
                        {errors.email && (<div className ="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div class="form-group">
                        <input type="password"
                        className={classnames('form-control', { 'is-invalid': errors.password})}
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password" id="myInput"
                        placeholder="Mot de passe"
                        />
                        {errors.password && (<div className ="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div class="agile_label">
                            <input id="check3" name="check3" type="checkbox" value="show password" onclick="showPassword()"/>
                            <label className="check" for="check3">Show password</label>
                          </div>
                    <div className="form-group">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Je m'inscris !</button>
                    </div>
                </form>
                <div className="text-center">Vous avez déjà un compte ? <a href="/">Connexion</a></div>
            </div>
        </div>
        </div>

    </section>
  
        </div>
    )
    }
}

// Mapping PropTypes
Register.PropTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect (mapStateToProps, { registerUser }) (withRouter(Register));