import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

class AddTrainingCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInputs: false,
      inputTab: 1,
      displayThirdStep: false,
      uri: '',
      companyName: '',
      logo: '',
      desc: '',
      certification: '',
      expertise: '',
      numberOfTrainers: '',
      lastYearTrainedPeople: '',
      website: '',
      linkedin: '',
      twitter: '',
      youtube: '',
      errors: {}
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    const { errors } = this.state;

    // Select option for status
    // const options = [
    //   { label: 'Selectionnez ' }
    // ];


    return (
      <div>
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">
                  Votre centre de formation
                </h1>
                <p className="lead text-center">
                  {"Dites nous tout à propos de vous ;)"}
                </p>
                <small className="d-block pb-3">* = champs obligatoires</small>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup 
                    placeholder="* Nom du centre de formation"
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.onChange}
                    error={errors.companyName}
                    info="* Renseignez ici le nom de votre entreprise."
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AddTrainingCenter.propTypes = {
  trainingCenter: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  trainingCenter: state.trainingCenter,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  null
)(AddTrainingCenter);