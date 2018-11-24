import React, { Component } from 'react';
import Header from '../layout/Navbar';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentUser, updateUser } from '../../actions/authActions';
import { getWishedCourses } from '../../actions/courseActions';

import isEmpty from '../../validation/isEmpty';
import TextFieldGroup from '../common/TextFieldGroup';
import ProfileWishies from './ProfileWishes';
import Spinner from '../common/Spinner';



class Profile extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstName: this.props.auth.user.firstName,
            lastName: this.props.auth.user.lastName,
            email: this.props.auth.user.email,
            wishedCourses: [],
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // this.setCurrentUser();
        this.props.getWishedCourses();
    }

    componentDidUpdate (prevProps) {
        if (this.props.payload !== prevProps.payload) {
            const user = this.props.payload;

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.course.course) {

            const wishedCourses = nextProps.course.course

            this.setState({
                wishedCourses: wishedCourses
            })
        }
    }

    // componentWillReceiveProps (nextProps) {
    //     if (nextProps.errors) {
    //         this.setState({errors: nextProps.errors})
    //     }

    //     if (nextProps.auth.user) {
    //         const user = nextProps.auth.user;

    //         // If user field does not exist, make an empty string
    //         user.firstName =!isEmpty(user.firstName) ? user.firstName : '';
    //         user.lastName =!isEmpty(user.lastName) ? user.lastName : '';
    //         user.email =!isEmpty(user.email) ? user.email : '';

    //         // Set component fields state
    //         this.setState({
    //             firstName: user.firstName,
    //             lastName: user.lastName,
    //             email: user.email,
    //         })
    //     }
    // }

    onChange (e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit (e) {
        e.preventDefault();

        const userNewData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
        };

    this.props.updateUser(userNewData, this.props.history);
        this.setState({
            firstName: userNewData.firstName,
            lastName: userNewData.lastName,
            email: userNewData.email,
        })

    }

    render () {

        // const { isAuthenticated, user} = this.state;
        const { loading } = this.props.course;
        const course = this.state.wishedCourses;

        let myWishes;

        if(loading) {
            
            myWishes= (
                <div className="center">
                    <Spinner />
                </div>

            );
        } else {

            if(course.length > 0){
                
                myWishes = course.map((oneCourse, i) => (
                    <ProfileWishies {...oneCourse} key={i}/>
                ))
            } else {
                myWishes= (
                    <div className="mt-30 mb-30 flex-column flex-middle flex-cell">
                        <h4>Il n'y a rien dans votre wishlist</h4>
                        <Link className="btn btn-primary primary-btn" to="/courses">Trouver des cours</Link>
                    </div>
                );
            }
        }

    return (
        <div>
            <Header />
            <section className="section">

                 <div className="content">
                <div className="container-fluid">
                  <div className="row">

                    <div className="col-md-4">
                        <div className="card card-user">
                            <div className="card-image">
                            <img src="https://magazine.sportihome.com/wp-content/uploads/2018/06/Rando-Lac-montagne.jpg" alt="..." />
                            </div>
                            <div className="card-body">
                            <div className="author">
                                <Link to="/">
                                <img className="avatar border-gray" src="https://oaq.qc.ca/wp-content/uploads/2018/05/profil-avatar-e1525783442424.png" alt="..." />
                                <h4 className="title">{this.props.auth.user.firstName} {this.props.auth.user.lastName}</h4>
                                <p>{this.state.email}</p>
                                </Link>
                                <br />
                            </div>
                            <br/>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title"><strong>Mon Profil</strong></h3>
                        </div>
                        <div className="card-body">

                          <form onSubmit={this.onSubmit}>

                            <div className="row">
                              <div className="col-md-10 pr-1">
                                <h5>Informations personnelles</h5>
                                    <label>
                                    Prénom
                                    </label>
                                    <TextFieldGroup
                                        // placeholder="Prénom"
                                        type="firstName"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                    />
                                    <label>
                                    Nom
                                    </label>
                                    <TextFieldGroup
                                        placeholder="Nom"
                                        type="lastName"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                    />
                                    <label>
                                    Email
                                    </label>
                                    <TextFieldGroup
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                              </div>
                            </div>

                           <div className="row">
                              <div className="col-md-10 pr-1">
                                <h5>Informations professionnelles</h5>
                                    <label>

                                    </label>
                                    <p>

                                    </p>
                                </div>
                                </div>
                                <hr/>
                            <div className="text-center">
                                <input
                                type="submit"
                                className="btn btn-primary primary-btn"
                                value="Enregistrer les modifications"
                                />
                            </div>

                          </form>

                        </div>

                        <div className="card-header">
                          <h3 className="card-title"><strong>Ma Wish List</strong></h3>
                        </div>
                        <div className="card-body">

                            {myWishes}
                            {/* <div className="row profile-wishlist-row">
                                <div className="col-md-3">
                                        <img className="card-img-top" src="http://eticeo.com/wp-content/uploads/2016/11/SERVICE-FORMATION-2-1030x617.jpg" alt="Card cap1" />
                                </div>
                                <div className="col-md-6">
                                    <h5>React pour les nuls</h5>
                                </div>
                                <div className="col-md-3">
                                    <button className="primary-btn btn-primary">Voir</button>
                                </div>
                                <hr/>
                            </div>
                            <div className="row profile-wishlist-row">
                                <div className="col-md-3">
                                        <img className="card-img-top" src="http://eticeo.com/wp-content/uploads/2016/11/SERVICE-FORMATION-2-1030x617.jpg" alt="Card cap" />
                                </div>
                                <div className="col-md-6">
                                    <h5>React pour les mecs solides</h5>
                                </div>
                                <div className="col-md-3">
                                    <button className="primary-btn btn-primary">Voir</button>
                                </div>
                                <hr/>
                            </div> */}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
                {/* <div className="container emp-profile">
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
                                            className="form-control profile-input"
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
                </div> */}
            </section>

        </div>
    )
    }
}

Profile.proptypes = {
    setCurrentUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    getWishedCourses: PropTypes.func
  }

  const mapStateToProps = (state) => ({
    auth: state.auth,
    payload: state.payload,
    course: state.course
  })

// export default Profile;

export default connect(mapStateToProps, {setCurrentUser, updateUser, getWishedCourses})(Profile);