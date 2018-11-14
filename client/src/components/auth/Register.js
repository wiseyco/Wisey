import React, { Component } from 'react';
import Navbar from '../layout/Navbar';

class Register extends Component {

    constructor () {
        super();
        this.state = {
            firstNname:'',
            lastName:'',
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    }

    render () {
    
    return (
        <div>
            <Navbar />
    <section className="profile-section">
        <div className="container">
            <div className="row">
         <div className="signup-form">
                <form onSubmit={this.onSubmit} action="/" method="post">
                    <h2>Inscription</h2>
                    <p className="hint-text">Créer un compte ne vous prendra que 30 secondes :)</p>
                
                    <div className="form-group">
                            <input type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChange}
                            name="firstName"
                            placeholder="Prénom"
                            required="required"/>
                        </div>
                    <div className="form-group">
                            <input type="text"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChange}
                            name="lastName"
                            placeholder="Nom"
                            required="required"/>
                        </div>
                    <div className="form-group">
                        <input type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email" 
                        placeholder="Email"
                        required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password" id="myInput"
                        placeholder="Mot de passe"
                        required="required"/>
                    </div>
                    <div class="agile_label">
                            <input id="check3" name="check3" type="checkbox" value="show password" onclick="showPassword()"/>
                            <label className="check" for="check3">Show password</label>
                          </div>
                    <div class="form-group">
                        <label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
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

export default Register;