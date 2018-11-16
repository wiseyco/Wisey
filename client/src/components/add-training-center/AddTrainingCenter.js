import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import InputGroup from '../common/InputGroup';
// import SelectListGroup from '../common/SelectListGroup';
import Navbar from '../layout/Navbar';
import { createTrainingCenter } from '../../actions/tcActions';

class AddTrainingCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInputTab: 1,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    // if (this.state.errors.companyName) {
    //   this.setState({
    //     displayInputTab: 1
    //   });

    // } else {

      const trainingCenterData = {
        uri: this.state.uri,
        companyName: this.state.companyName,
        logo: this.state.logo,
        desc: this.state.desc,
        certification: this.state.certification,
        expertise: this.state.expertise,
        numberOfTrainers: this.state.numberOfTrainers,
        lastYearTrainedPeople: this.state.lastYearTrainedPeople,
        website: this.state.website,
        linkedin: this.state.linkedin,
        twitter: this.state.twitter,
        youtube: this.state.youtube
      }

      this.props.createTrainingCenter(trainingCenterData, this.props.history);
    // }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    // Select option for status
    // const options = [
    //   { label: 'Selectionnez ' }
    // ];

    const { errors, displayInputTab } = this.state;

    let progressBar;
    let inputTab;

    if(displayInputTab === 1) {

    
      progressBar = (
        <div class="progress">
          <div class="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
            33%
          </div>
        </div>
      );

      inputTab = (
        <div>
          <h3>Compte professionnel</h3>
          <p>ETAPE 1</p>

          <TextFieldGroup 
            placeholder="* Nom du centre de formation"
            name="companyName"
            value={this.state.companyName}
            onChange={this.onChange}
            error={errors.companyName}
            info="* Renseignez ici le nom de votre entreprise."
          />

          <TextAreaFieldGroup
            placeholder="Description"
            name="desc"
            value={this.state.desc}
            onChange={this.onChange}
            error={errors.desc}
            info="Description succinte de la société"
          />


          <div class="form-group submit-btn-pro">
            <button
              type="button"
              onClick={() => {
                this.setState({
                  displayInputTab: 2
                });
              }}
              className="btn btn-primary btn-lg btn-block pro-btn"
            >
            Continuer
            </button>
          </div>
        </div>
      );
    } else if (displayInputTab === 2) {


      progressBar = (
        <div class="progress">
          <div class="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
            66%
          </div>
        </div>
      );

      inputTab = (
        <div>
          <h3>Compte professionnel</h3>
          <p>ETAPE 2</p>

          <h5>Spécialité</h5>

          <TextAreaFieldGroup
            placeholder="Certifications professionnelles"
            name="certification"
            value={this.state.certification}
            onChange={this.onChange}
            error={errors.certification}
            info="Listez vos certifications professionnelles."
          />

          <TextFieldGroup 
            placeholder="Type d'expertise"
            name="expertise"
            value={this.state.expertise}
            onChange={this.onChange}
            error={errors.expertise}
            info="Listez ici toutes vos expertises. Séparez vos expertises par des virgules."
          />

          <TextFieldGroup 
            placeholder="Principaux clients"
            name="mainCustomers"
            value={this.state.mainCustomers}
            onChange={this.onChange}
            error={errors.mainCustomers}
            info="Listez ici vos principaux clients."
          />

          <h5>Chiffres clés</h5>

          <TextFieldGroup 
            placeholder="Nombre de formateurs"
            name="numberOfTrainers"
            value={this.state.numberOfTrainers}
            onChange={this.onChange}
            error={errors.numberOfTrainers}
            info="Dites nous combien de formateurs travailles avec vous."
          />

          <TextFieldGroup 
            placeholder="Nombre de participants"
            name="lastYearTrainedPeople"
            value={this.state.lastYearTrainedPeople}
            onChange={this.onChange}
            error={errors.lastYearTrainedPeople}
            info="Dites nous combien de participants vous avez formé l'année dernière (2017)."
          />

          <h5>Liens externes</h5>

          <TextFieldGroup 
            placeholder="Site internet"
            name="uri"
            value={this.state.uri}
            onChange={this.onChange}
            error={errors.uri}
          />

          <TextFieldGroup 
            placeholder="Compte Linkedin"
            name="linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <TextFieldGroup 
            placeholder="Compte Twitter"
            name="twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <TextFieldGroup 
            placeholder="Compte Youtube"
            name="youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <div class="form-group submit-btn-pro">
            <button
              type="button"
              onClick={() => {
                this.setState({
                  displayInputTab: 1
                });
              }}
              className="btn btn-primary btn-lg pro-btn"
              style={{marginRight: '20px'}}
            >
            Précédent
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({
                  displayInputTab: 3
                });
              }}
              className="btn btn-primary btn-lg btn-block pro-btn"
            >
            Continuer
            </button>

          </div>
        </div>        
      );
    } else {

      progressBar = (
        <div class="progress">
          <div class="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            100%
          </div>
        </div>
      );

      inputTab= (
        <div>
          <h3>Compte professionnel</h3>
          <p>ETAPE 3</p>
          <h5>Télécharger des photos</h5>

          <div class="form-group input-group mb-3">
            <div class="custom-file form-control-lg">
              <input type="file" placeholder="Logo" class="custom-file-input " id="logo" />
              <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Importez votre logo</label>
            </div>
          </div>

            <div class="form-group submit-btn-pro">
          <button
            type="button"
            onClick={() => {
              this.setState({
                displayInputTab: 2
              });
            }}
            className="btn btn-primary btn-lg pro-btn"
            style={{marginRight: '20px'}}
          >
            Précédent
          </button>

            <input
              type="submit"
              value="Continuer"
              className="btn btn-primary btn-lg btn-block pro-btn"
            />
          </div>
        </div>
      );

    }

    return (
      <div>
      <Navbar />
      <section class="section profile-section">
        <div class="container">
          
          {progressBar}

            <div class="row">
              <div class="pro-form col-md-5">
                <form onSubmit={this.onSubmit}>

                  {inputTab}

                </form>
              </div>
            </div>
          </div>
        </section>    
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
  { createTrainingCenter }
)(AddTrainingCenter);