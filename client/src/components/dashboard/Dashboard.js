import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentTrainingCenter } from '../../actions/tcActions'
import Spinner from '../common/Spinner';
import Navbar from '../layout/Navbar';
import logo from '../../uploads/img/tc-logos/default.png'

class Dashboard extends Component {

  componentDidMount() {
    this.props.getCurrentTrainingCenter();
  }


  render() {

    const { user } = this.props.auth;
    const { trainingCenter, loading } = this.props.trainingCenter;

    let dashboardContent;

    if(trainingCenter === null || loading) {
      dashboardContent = <Spinner />;

    } else {

      // Check if the logged in user has profile data
      if(Object.keys(trainingCenter).length > 0) {
        
        // User is logged in and IS a training center
        dashboardContent = (
          <div>
            <Navbar />
            <section className="dashboard-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="profile-img">
                      <div>
                        <img style={{maxWidth:'150px'}} src={logo} alt="" />
                      </div>
                      <br />
                      <br />
                      {/* <div className="file btn btn-primary">
                        Changer Logo
                        <input type="file" name="file" />
                      </div> */}
                        </div>
                        <div className="profile-head text-center">
                          <h3>
                            wiseyco
                          </h3>
                        </div>
                        <div className="profile-head text-center">
                          <p><strong>www.wiseyco.com</strong></p>
                        </div>
                      </div>

                      <div className="col-md-8">
                        <div className="add-section">
                          <button className="btn-primary primary-btn add-course-btn"id="myBtn">Ajouter un cours</button>
                        </div>

                        {/* START MODAL */}

                        <div id="myModal" className="modal">
                          {/* Modal content */}
                          <div className="dashboard-modal-content">
                            <span className="close">&times;</span>
                            <br />
                            <div className="row">
                              <div className="col-md-12 text-center">
                                <h4>Module de formation</h4>
                                <br />
                              </div>
                            </div>
                            <form>  
                              <div className='row'>
                                <div className="col-md-6">
                                  <div className="form-group login-form">
                                    <label>Nom de la formation</label>
                                    <input type="title" name="title" className="form-control profile-input" placeholder="Intitulé de la formation" />
                                  </div>
                                  <div className="form-group login-form">
                                    <label>Catégorie</label>
                                    <select type="categories"className="form-control" id="exampleFormControlSelect1">
                                      <option>Marketing</option>
                                      <option>Stratégie</option>
                                      <option>Numérique</option>
                                      <option>Informatique</option>
                                      </select>
                                    </div>

                                    <div className="form-group login-form">
                                      <label>Résumé de la formation</label>
                                      <textarea name="punchline" className="form-control" id="exampleFormControlTextarea1" placeholder="Résumé de la formation"rows="3"></textarea>
                                    </div>
                                    <div className="form-group login-form">
                                      <label>Public visé</label>
                                      <input type="targetedAudience" name="targetedAudience" className="form-control profile-input" placeholder="A qui s'adresse la formation ?" />
                                    </div>
                                    <div className="form-group login-form">
                                      <label>Niveau de connaissances requis</label>
                                      <input type="requirements" name="requirements" className="form-control profile-input" placeholder="Niveau de connaissances requis" />
                                    </div>
                                    <div className="form-group login-form">
                                      <label>Certification deliverée</label>
                                      <input type="targetedLevel" name="targetedLevel" className="form-control profile-input" placeholder="Certification / diplômes deliverés" />
                                    </div>                      
                                  </div>

                                  <div className="col-md-6">
                                  
                                    <div className="form-group login-form">
                                      <label>Prix</label>
                                      <input type="price" name="price" className="form-control profile-input" placeholder="Prix de la formation" />
                                    </div>
                                    <div className="form-group login-form">
                                      <label>Type d'enseignement</label>
                                      <select type="delivery"className="form-control" id="exampleFormControlSelect1">
                                        <option>Présentiel</option>
                                        <option>classNamee virtuelle</option>
                                        <option>E-learning</option>
                                      </select>
                                    </div>
                                    <div className="form-group login-form">
                                      <label>Eligible CPF ?</label>
                                      <select type="CPF"className="form-control" id="exampleFormControlSelect1">
                                        <option>Oui</option>
                                        <option>Non</option>
                                      </select>
                                    </div>

                                    <div className="form-group login-form">
                                      <label>Durée de la formation</label>
                                      <input type="duration" name="duration" className="form-control profile-input" placeholder="Durée de la formation" />
                                    </div>
                                    <div className="form-group login-form">
                                      <label>Date de début</label>
                                      <input type="from" name="from" className="form-control profile-input" placeholder="Date de début" />
                                    </div>
                                    <div className="form-group login-form">
                                      <label>Date de fin</label>
                                      <input type="to" name="to" className="form-control profile-input" placeholder="Date de fin" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="form-group login-form">
                                      <input type="title" name="title" className="form-control profile-input" placeholder="Chapitre 1" />
                                      <textarea name="desc" className="form-control" id="exampleFormControlTextarea1" placeholder="Contenu du chapitre 1"rows="6"></textarea>
                                    </div>
                                  </div>
                                <div className="col-md-4">
                                  <div className="form-group login-form">
                                    <input type="title" name="title" className="form-control profile-input" placeholder="Chapitre 2" />
                                    <textarea name="desc" className="form-control" id="exampleFormControlTextarea1" placeholder="Contenu du chapitre 2"rows="6"></textarea>
                                  </div>
                                  </div>
                                    <div className="col-md-4">
                                      <div className="form-group login-form">
                                        <input type="title" name="title" className="form-control profile-input" placeholder="Chapitre 3" />
                                        <textarea name="desc" className="form-control" id="exampleFormControlTextarea1" placeholder="Contenu du chapitre 3"rows="6"></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12 text-center">
                                      <button type="submit" className="btn btn-primary primary-btn">Enregistrer</button>
                                    </div>
                                  </div>
                                </form>
                              </div>	

                              {/* <!-- End Modal content --> */}

                            </div> 

                            {/* <!-- END MODAL --> */}

                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-4">
                            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              <div className="row">
                                <div className="col-md-8">
                                  <h6>Société</h6>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Nom Société</label>
                                </div>
                                <div className="col-md-6">
                                  <p>wiseyco</p>
                                  {/* <!-- <input type="text" placeholder="wiseyco"> --> */}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Adresse</label>
                                </div>
                                <div className="col-md-6">
                                  <p>151 rue Saint Denis 75002 Paris</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Description</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Super société de formation</p>
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div className="col-md-8">
                                  <h6>Contact</h6>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Personne référente</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Dev Paulo</p>
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
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                  <p>wiseyco@contact.fr</p>
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
                                  <label>Types de formations</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Développement informatique</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Certifications</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Diplôme de formateur</p>
                                </div>
                                  </div>
                                    <div className="row">
                                      <div className="col-md-8">
                                        <h6>Chiffres</h6>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Nombre de formateurs certifiés</label>
                                      </div>
                                      <div className="col-md-6">
                                        <p>3</p>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Nombre de participants (2017)</label>
                                      </div>
                                      <div className="col-md-6">
                                        <p>150</p>
                                      </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                      <div className="col-md-8">
                                        <h6>Liens externes</h6>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Site internet</label>
                                      </div>
                                      <div className="col-md-6">
                                        <p>www.wiseyco.com</p>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Compte Linkedin</label>
                                      </div>
                                      <div className="col-md-6">
                                        <p>www.linkedin.com/wiseyco</p>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Compte Twitter</label>
                                      </div>
                                      <div className="col-md-6">
                                        <p>www.twitter.com/wiseyco</p>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Compte Youtube</label>
                                      </div>
                                      <div className="col-md-6">
                                        <p>www.youtube.com/wiseyco</p>
                                      </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                      <div className="col-md-12 text-center">
                                        <button className="primary-btn">Enregistrer les modifications</button>
                                      </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                      <div className="col-md-8">
                                        <h6>Photos</h6>
                                      </div>
                                    </div>
                                    <hr />
                                  </div>
                                </div>

                                <div className="col-md-8">
                                  <div className="container">
                                    <h6>Mes cours</h6>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                          <div className="single-publish">
                                          <img src="/" className="img-fluid" alt="" />
                                            <div className="top">
                                              <div className="mb-15 d-flex">
                                                <a href="#">3 janvier 2018</a>
                                                <span className="line">|</span>
                                                <a href="#">Formation Paris</a>
                                              </div>
                                              <h6 className="text-uppercase"><a href="#">Chef de projet multimédia</a></h6>
                                            </div>
                                            <p className="mb-30">Le chef de projet multimédia gère et coordonne l’ensemble de
                                                la production du produit multimédia autour d’une équipe composée de
                                                développeurs, UX designers, webdesigners, webmarketers…</p>
                                            <div className="text-center">
                                              <a href="/module.html"><button className="btn-primary primary-btn dashboard-btn">Voir</button></a>
                                              <a href="/module.html"><button className="btn-primary primary-btn dashboard-btn">Editer</button></a>
                                            </div>
                                          </div>
                                          
                        </div>             
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      } else {

        // User is logged in, but is NOT a training center
        dashboardContent = (
          <div>
            <Navbar />
            <section className= "banner-become-a-tc relative">
              <div className="container">
                <div className="row fullscreen align-items-center">
                  <div className="col-md-6">
                    <div className="banner-content text-center">
                      <h1 className="text-uppercase">Faites décoller votre activité.</h1>
                      <br />
                      <p className="text-uppercase ">Inscrivez gratuitement votre centre de formation et référencez votre entreprise et vos parcours.</p>
                      <Link to="/add-training-center" className="primary-btn banner-btn text-dark">
                        Je suis professionnel de la formation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }
    }

    return (
      <div>
        {dashboardContent}
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentTrainingCenter: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  trainingCenter: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  trainingCenter: state.trainingCenter,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentTrainingCenter }
)(Dashboard);