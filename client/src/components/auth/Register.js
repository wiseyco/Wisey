import React, { Component } from 'react';
import Navbar from '../layout/Navbar';

class Register extends Component {

    render () {
    
    return (
        <div>
            <Navbar />
    <section className="profile-section">
        <div className="container">
            <div className="row">
         <div className="signup-form">
                <form action="/" method="post">
                    <h2>Inscription</h2>
                    <p className="hint-text">Créer un compte ne vous prendra que 30 secondes :)</p>
                
                    <div className="form-group">
                            <input type="firstname" className="form-control" name="firstname" placeholder="Prénom" required="required"/>
                        </div>
                    <div className="form-group">
                            <input type="lastname" className="form-control" name="lastname" placeholder="Nom" required="required"/>
                        </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password" className="form-control" name="password" id="myInput" placeholder="Mot de passe" required="required"/>
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