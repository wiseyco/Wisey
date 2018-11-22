import React, { Component } from 'react'
import TextFieldGroup from '../../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../layout/Navbar';
import { Link, withRouter} from 'react-router-dom';
import { userForgotPassword } from '../../../actions/authActions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      email: '',
      errors: {}
    }
  }

  componentWillReceiveProps = nextProps => {
    if(nextProps.errors) {
      this.setState({
        display: false,
        errors: nextProps.errors
      })
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email
    }

    this.props.userForgotPassword(userData, this.props.history);
  }

  render() {

    const { errors } = this.state;

    return (

      <div>
        <Navbar />
        <div class="forgot-password">
          <section class="section profile-section">
            <div class="container">
            
              <div class="row">
                <div class="pro-form">
                  <form onSubmit={this.onSubmit}>

                    <h5>Mot de passe oublié ? Entrez votre email</h5>
                    <TextFieldGroup 
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      info="* Renseignez ici votre adresse email !"
                    />

                    <input
                      type="submit"
                      value="Continuer"
                      className="btn btn-primary btn-lg btn-block pro-btn"
                    />

                  </form>
                  
                </div>
              </div>
            </div>
          </section>    
        </div>
      </div>

    )
  }
}

ForgotPassword.propTypes = {
  errors: PropTypes.object.isRequired,
  userForgotPassword: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { userForgotPassword }
)(withRouter(ForgotPassword));