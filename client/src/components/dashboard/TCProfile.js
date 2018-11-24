import React, { Component } from 'react';
import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar.js';
import DbFooter from './common/DbFooter.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentTrainingCenter, createTrainingCenter } from '../../actions/tcActions';
import isEmpty from '../../validation/isEmpty';
import { Link } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class TCProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount = () => {
    this.props.getCurrentTrainingCenter();
  }

  componentWillReceiveProps = nextProps =>  {

    if(nextProps.trainingCenter.trainingCenter) {

      const trainingCenter = nextProps.trainingCenter.trainingCenter;
          
      trainingCenter.uri = !isEmpty(trainingCenter.uri) ? trainingCenter.uri : '';
      trainingCenter.companyName = !isEmpty(trainingCenter.companyName) ? trainingCenter.companyName : '';
      trainingCenter.logo = !isEmpty(trainingCenter.logo) ? trainingCenter.logo : '';
      trainingCenter.desc = !isEmpty(trainingCenter.desc) ? trainingCenter.desc : '';
      trainingCenter.certification = !isEmpty(trainingCenter.certification) ? trainingCenter.certification : '';
      trainingCenter.expertise = !isEmpty(trainingCenter.expertise) ? trainingCenter.expertise : '';
      trainingCenter.numberOfTrainers = !isEmpty(trainingCenter.numberOfTrainers) ? trainingCenter.numberOfTrainers : '';
      trainingCenter.lastYearTrainedPeople = !isEmpty(trainingCenter.lastYearTrainedPeople) ? trainingCenter.lastYearTrainedPeople : '';

      trainingCenter.social = !isEmpty(trainingCenter.social) ? trainingCenter.social : {};
      trainingCenter.website = !isEmpty(trainingCenter.social.website) ? trainingCenter.social.website : '';
      trainingCenter.linkedin = !isEmpty(trainingCenter.social.linkedin) ? trainingCenter.social.linkedin : '';
      trainingCenter.twitter = !isEmpty(trainingCenter.social.twitter) ? trainingCenter.social.twitter : '';
      trainingCenter.youtube = !isEmpty(trainingCenter.social.youtube) ? trainingCenter.social.youtube : '';

      this.setState({
        uri: trainingCenter.uri,
        companyName: trainingCenter.companyName,
        logo: trainingCenter.logo,
        desc: trainingCenter.desc,
        certification: trainingCenter.certification,
        expertise: trainingCenter.expertise,
        numberOfTrainers: trainingCenter.numberOfTrainers,
        lastYearTrainedPeople: trainingCenter.lastYearTrainedPeople,
        mainCustomers: trainingCenter.mainCustomers,
        website: trainingCenter.website,
        linkedin: trainingCenter.linkedin,
        twitter: trainingCenter.twitter,
        youtube: trainingCenter.youtube,
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const trainingCenterData = {
      uri: this.state.uri,
      companyName: this.state.companyName,
      logo: this.state.logo,
      desc: this.state.desc,
      certification: this.state.certification,
      expertise: this.state.expertise,
      numberOfTrainers: this.state.numberOfTrainers,
      lastYearTrainedPeople: this.state.lastYearTrainedPeople,
      mainCustomers: this.state.mainCustomers,
      website: this.state.website,
      linkedin: this.state.linkedin,
      twitter: this.state.twitter,
      youtube: this.state.youtube,
    }

    this.props.createTrainingCenter(trainingCenterData, this.props.history)
    
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    const { errors } = this.state;

    return (
      <div>
        <div className="wrapper">
            <SideBar />
            <div className="main-panel">
              <DbNavBar />

              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Editer votre profile</h4>
                        </div>
                        <div className="card-body">

                          <form onSubmit={this.onSubmit}>

                            <div className="row">
                              <div className="col-md-7 pr-1">
                                <label>Raison sociale</label>
                                <TextFieldGroup 
                                  placeholder="* Nom du centre de formation"
                                  name="companyName"
                                  value={this.state.companyName}
                                  onChange={this.onChange}
                                  error={errors.companyName}
                                  info="* Renseignez ici le nom de votre entreprise."
                                />
                              </div>
                              <div className="col-md-4 px-1">
                                <label>Url personnalisée</label>
                                <TextFieldGroup 
                                  placeholder="Personnaliser votre url"
                                  name="uri"
                                  value={`wisey.co/tc/${this.state.uri}`}
                                  onChange={this.onChange}
                                  error={errors.companyName}
                                  info="* Personnalisez votre url"
                                  disabled={true}
                                />  
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-8 pr-1">
                                <label>Certifications professionnelles</label>
                                <TextFieldGroup
                                  placeholder="Certifications professionnelles"
                                  name="certification"
                                  value={this.state.certification}
                                  onChange={this.onChange}
                                  error={errors.certification}
                                  info="Listez vos certifications professionnelles."
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-8 pr-1">
                                <label>Expertise</label>
                                <TextFieldGroup 
                                  placeholder="Type d'expertise"
                                  name="expertise"
                                  value={this.state.expertise}
                                  onChange={this.onChange}
                                  error={errors.expertise}
                                  info="Listez ici toutes vos expertises. Séparez vos expertises par des virgules."
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-8 pr-1">
                                <label>Principaux clients</label>
                                <TextFieldGroup 
                                  placeholder="Principaux clients"
                                  name="mainCustomers"
                                  value={this.state.mainCustomers}
                                  onChange={this.onChange}
                                  error={errors.mainCustomers}
                                  info="Listez ici vos principaux clients."
                                />
                              </div>
                            </div> 
                              
                            <div className="row">
                              <div className="col-md-5 pr-1">
                                <label>Nombre de formateurs</label>
                                <TextFieldGroup 
                                  placeholder="Nombre de formateurs"
                                  name="numberOfTrainers"
                                  value={this.state.numberOfTrainers}
                                  onChange={this.onChange}
                                  error={errors.numberOfTrainers}
                                  info="Dites nous combien de formateurs travailles avec vous."
                                />
                              </div>
                              <div className="offset-md-1 col-md-5 pr-1">
                                <label>Nombre de participants</label>
                                <TextFieldGroup 
                                  placeholder="Nombre de participants"
                                  name="lastYearTrainedPeople"
                                  value={this.state.lastYearTrainedPeople}
                                  onChange={this.onChange}
                                  error={errors.lastYearTrainedPeople}
                                  info="Dites nous combien de participants vous avez formé l'année dernière (2017)."
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-8 pr-1">
                                <label>Site interne</label>
                                <TextFieldGroup 
                                  placeholder="Site internet"
                                  name="website"
                                  value={this.state.website}
                                  onChange={this.onChange}
                                  error={errors.website}
                                />
                              </div>
                            </div>  

                            <div className="row">
                              <div className="col-md-8 pr-1">
                                <label>Compte Linkedin</label>
                                <TextFieldGroup 
                                  placeholder="Compte Linkedin"
                                  name="linkedin"
                                  value={this.state.linkedin}
                                  onChange={this.onChange}
                                  error={errors.linkedin}
                                />
                              </div>
                            </div> 

                            <div className="row">
                              <div className="col-md-8 pr-1">
                                <label>Compte Twitter</label>
                                <TextFieldGroup 
                                  placeholder="Compte Twitter"
                                  name="twitter"
                                  value={this.state.twitter}
                                  onChange={this.onChange}
                                  error={errors.twitter}
                                />
                              </div>
                            </div> 

                            <div className="row">
                              <div className="col-md-8 pr-1">
                                <label>Compte Youtube</label>
                                <TextFieldGroup 
                                  placeholder="Compte Youtube"
                                  name="youtube"
                                  value={this.state.youtube}
                                  onChange={this.onChange}
                                  error={errors.youtube}
                                />
                              </div>
                            </div>  

                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>description</label>     
                                  <TextAreaFieldGroup
                                    placeholder="Description"
                                    name="desc"
                                    value={this.state.desc}
                                    onChange={this.onChange}
                                    error={errors.desc}
                                    info="Description succinte de la société"
                                  />   
                                </div>
                              </div>
                            </div>
                            <input
                              type="submit"
                              className="btn btn-info btn-fill pull-right"
                              value="Mettre à jour"/>

                            <div className="clearfix"></div>

                          </form>

                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card card-user">
                        <div className="card-image">
                          <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
                        </div>
                        <div className="card-body">
                          <div className="author">
                            <Link to="/dashboard">
                            {/* {this.onClickLogo} */}
                              <img className="avatar border-gray" src={this.state.logo} alt="..." />
                              <h5 className="title">{this.state.companyName}</h5>
                            </Link>
                          <p className="description">
                              {this.state.website}
                          </p>
                        </div>
                        <p className="description text-center text-muted" >
                          {this.state.desc}
                        </p>
                      </div>
                      <hr />
                      <div className="button-container mr-auto ml-auto">
                        <Link to={this.state.linkedin} className="btn btn-simple btn-link btn-icon">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to={this.state.twitter} className="btn btn-simple btn-link btn-icon">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={this.state.youtube} className="btn btn-simple btn-link btn-icon">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           <DbFooter />
          </div>
        </div>
      </div>
    )
  }
}

TCProfile.propTypes = {
  trainingCenter: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getCurrentTrainingCenter: PropTypes.func.isRequired,
  createTrainingCenter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  trainingCenter: state.trainingCenter,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentTrainingCenter, createTrainingCenter }
)(TCProfile);
