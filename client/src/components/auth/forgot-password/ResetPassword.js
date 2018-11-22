import React, { Component } from 'react'
import TextFieldGroup from '../../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../layout/Navbar';
import { withRouter} from 'react-router-dom';
import { userResetPassword } from '../../../actions/authActions';
import qs from "query-string";

class ForgotPassword extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      password: '',
      verifyPassword: '',
      token: '',
      errors: {}
    }
  }

  componentWillReceiveProps = nextProps => {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }
  componentWillMount = (e) => {
    const urlQuery = qs.parse(this.props.location.search);
    this.setState({
      token: urlQuery.token
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      password: this.state.password,
      verifyPassword: this.state.verifyPassword,
      token: this.state.token
    }
    this.props.userResetPassword(userData, this.props.history);
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

                    <h5>Saissisez votre nouveau mot de passe</h5>
                    <TextFieldGroup 
                      placeholder="Entrez votre mot de passe"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                      info="* Entrez le mot de passe !"
                    />
                    <TextFieldGroup 
                      placeholder="Confirmez le mot de passe"
                      type="password"
                      name="verifyPassword"
                      value={this.state.verifyPassword}
                      onChange={this.onChange}
                      error={errors.verifyPassword}
                      info="* Confirmez le mot de passe !"
                    />

                    <input
                      type="hidden"
                      value={this.state.token}
                    >
                    
                    </input>

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
  userResetPassword: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { userResetPassword }
)(withRouter(ForgotPassword));