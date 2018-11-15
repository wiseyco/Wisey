import React, { Component } from 'react';
import Navbar from '../layout/Navbar';

class Profile extends Component {

    render () {
    
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
                                        Paul Crussaire
                                    </h3>
                                    <h4>
                                        CTO
                                    </h4>
                                    <h4>
                                        Bagnole.com
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
                                                <p>Paul</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nom</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Crussaire</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>devpaulo@bagnole.com</p>
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
                                                <p>CTO</p>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Société</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Bagnole.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>5 ans</p>
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
                                    </div>
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

export default Profile;