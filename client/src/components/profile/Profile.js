import React, { Component } from 'react';
import Navbar from '../layout/Navbar';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import { setCurrentUser } from '../../actions/authActions';
import isEmpty from '../../validation/isEmpty';


class Profile extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstName: this.props.auth.user.firstName,
            lastName: this.props.auth.user.lastName,
            email: this.props.auth.user.email,
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount () {
        // this.props.setCurrentUser();
        console.log("props did mount :", this.props.auth.user.email);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }

        if (nextProps.auth.user) {
            const user = nextProps.auth.user;

            // If user field does not exist, make an empty string
            user.firstName =!isEmpty(user.firstName) ? user.firstName : '';
            user.lastName =!isEmpty(user.lastName) ? user.lastName : '';
            user.email =!isEmpty(user.email) ? user.email : '';

            // Set component fields state
            this.setState({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            })
        }
    }

    onChange (e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit (e) {
        console.log(this.props);
        e.preventDefault();

        const updateUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        }

        axios
        .post('/api/users/update', updateUser)
        .then(res => this.setState({
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
        }))
        .catch(err => this.setState({errors: err.response.data}))
    }

    render () {

        const { isAuthenticated, user} = this.props.auth;
    
    return (
        <div> 
            <Navbar /> 
            <section>
                <div className="container emp-profile">
                    <form method="">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                <div>
                                    <img src="https://vignette.wikia.nocookie.net/oss-117-film/images/9/9b/Lucien_Bramare.png/revision/latest?cb=20160405071507&path-prefix=fr" alt="" />
                                </div>
                                    <br />
                                    <div className="file btn btn-primary">
                                        Change Photo
                                        <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h3>
                                    {this.props.auth.user.firstName} {this.props.auth.user.lastName}
                                    </h3>
                                    <h4>
                                        Agent Secret
                                    </h4>
                                    <h4>
                                        Office of Strategy Services
                                    </h4>
                                    <p className="proile-rating"></p>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                                aria-controls="profile" aria-selected="true">Profil</a>
                                        </li>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>LIENS / SOCIAL</p>
                                    <a href="">Profil Linkedin</a><br />
                                    <a href="">Compte Twitter</a><br />
                                    <a href="">Profil Github</a><br />
                                    <a href="">Site Personnel</a><br />
                                    <p>SKILLS</p>
                                    <a href="">Web Design</a><br />
                                    <a href="">Programmation</a><br />
                                    <a href="">Marketing</a><br />
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                <form noValidate onSubmit={this.onSubmit} action="/" method="post">
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">

                                            <div className="col-md-8">
                                                <h6>Informations personnelles</h6>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">

                                            <div className="col-md-6">
                                                <label>Prénom</label>
                                            </div>
                                            <div className="col-md-6">
                                            <input
                                            class="form-control profile-input"
                                            type="text" name="firstName"
                                            value={this.state.firstName}
                                            placeholder={this.props.auth.user.firstName}
                                            onChange={this.onChange}
                                            />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nom</label>
                                            </div>
                                            <div className="col-md-6">
                                            <input
                                            class="form-control profile-input"
                                            onChange={this.onChange}
                                            type="text"
                                            name="lastName"
                                            value={this.state.lastName}
                                            placeholder={this.props.auth.user.lastName}
                                            />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                            <input
                                            class="form-control profile-input"
                                            onChange={this.onChange}
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            placeholder={this.props.auth.user.email}
                                            />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Téléphone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>0123456789</p>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">

                                            <div className="col-md-8">
                                                <h6>Informations professionnelles</h6>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Poste</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Agent Secret</p>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Société</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Office of Stategy Services</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10 ans</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Diplômes</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Master 2</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Heure CPF Cumulées</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>100</p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <button type="submit" class="btn btn-primary primary-btn">Enregistrer les modifications</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    )
    }
}

Navbar.proptypes = {
    setCurrentUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    payload: state.payload
  })

// export default Profile;

export default connect(mapStateToProps, {setCurrentUser})(Profile);