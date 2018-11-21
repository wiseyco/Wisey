
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar.js';
import DbFooter from './common/DbFooter.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { classnames } from 'classnames';
import { Link } from 'react-router-dom';

import isEmpty from '../../validation/isEmpty';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

class TCCourses extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      punchline: '',
      desc: '',
      delivery: '',
      targetedAudience: '',
      price: '',
      CPF: false,
      duration: {
        number: '',
        of: ''
      },
      syllabus: [],
      targetedLevel: '',
      categories: '',
      requirements: '',
      ref: '',
      nextSessions: [],
      errors: {}
    }
  }

  toggle =() => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      CPF: !this.state.CPF
    });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('Submited !');
  }

  render() {

    const { errors } = this.state;
    let addCourseForm;

    const delivryOptions = [
      { label: 'Présentiel', value: 'presentiel' },
      { label: 'Classe Virtuelle', value: 'classe-virtuelle' },
      { label: 'eLearning', value: 'elearning' }
    ];

    const targetedAudience = [
      { label: 'Entreprise', value: 'entreprise' },
      { label: 'Salarié en poste', value: 'salarie-en-poste' },
      { label: 'Demandeur d\'emploi', value: 'demandeur-d-emploi' },
    ];

    const durationOf = [
      { label: 'Heures', value: 'heures' },
      { label: 'Jours', value: 'jours' },
      { label: 'Mois', value: 'mois' },
      { label: 'Années', value: 'annees' },
    ];

    const targetedLevel = [
      { label: 'Sélectionnez un niveau visé', value: 0 },
      { label: 'BEP', value: 'bep' },
      { label: 'Bac', value: 'bac' },
      { label: 'Bac +2', value: 'bac2' },
      { label: 'Bac +3', value: 'bac3' },
      { label: 'Bac +5', value: 'bac5' },
      { label: 'Doctorat', value: 'doctorat' },
    ];
  

    addCourseForm = (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Ajouter un cours
        </Button>
        <Modal className="reactstrap-modal-dashboard" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Ajouter un cours
          </ModalHeader>
            <ModalBody >
                <form onSubmit={this.onSubmit}>
                  <div className="form-group login-form">
                      <br />
                      <label>Titre du parcours</label>
                      <TextFieldGroup 
                        placeholder="Titre du parcours"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                        error={isEmpty(this.state.title) ? errors.title = 'Le titre est obligatoire' : null}
                        info="Quel est le titre du parcours."
                      />
                      
                      <label>Accroche du parcours</label>
                      <TextFieldGroup 
                        placeholder="Accroche du parcours"
                        name="punchline"
                        value={this.state.punchline}
                        onChange={this.onChange}
                        info="Quelle est l'accroche du parcours."
                      />

                      <label>Description du parcours</label>
                      <TextAreaFieldGroup
                        placeholder="Description"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.onChange}
                        error={errors.desc}
                        info="Description du parcours"
                      />

                      <label>Type</label>
                      <SelectListGroup
                        placeholder="Status"
                        name="status"
                        value={this.state.status}
                        onChange={this.onChange}
                        options={delivryOptions}
                        disabled="true"
                        error={errors.status}
                        info="Est-ce, un présentiel, une classe virtuelle ou un eLearning ?"
                      />

                      <label>Public</label>
                      <SelectListGroup
                        placeholder="Public"
                        name="targetedAudience"
                        value={this.state.targetedAudience}
                        onChange={this.onChange}
                        options={targetedAudience}
                        error={errors.targetedAudience}
                        info="Quel est le public visé pour ce parcours ?"
                      />

                      <label>Prix</label>
                      <TextFieldGroup 
                        placeholder="Prix en €"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange}
                        info="Quel est le prix de la formation en eruo"
                      />

                      <div className="form-group">
                        <input
                          className="mr-10"
                          name={this.state.CPF}
                          type="checkbox"
                          value={this.state.CPF}
                          onChange={this.onChange}
                        />
                        <label className="form-check-label">
                          Eligible CPF ?
                        </label>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                        <label>Temps :</label>
                          <TextFieldGroup 
                            placeholder="Tepms"
                            name="duration"
                            value={this.state.price}
                            onChange={this.onChange}
                            info="Un nombre"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>compté en :</label>
                          <SelectListGroup
                            placeholder="Public"
                            name="targetedAudience"
                            value={this.state.duration.of}
                            onChange={this.onChange}
                            options={durationOf}
                            error={errors.targetedAudience}
                            info="En heures, jours, mois, années"
                          />
                        </div>
                      </div>

                      <label>Syllabus</label>
                      <TextFieldGroup 
                        placeholder="Syllabus"
                        name="syllabus"
                        value={this.state.syllabus}
                        onChange={this.onChange}
                        info="Quel est le Sylabus."
                      />
                      <label>Niveau visé</label>
                        <SelectListGroup
                          placeholder="Niveau visé"
                          name="targetedLevel"
                          value={this.state.targetedLevel}
                          onChange={this.onChange}
                          options={targetedLevel}
                          error={errors.targetedLevel}
                          info="En heures, jours, mois, années"
                        />
                        <label>Catégories</label>
                        <TextFieldGroup 
                          placeholder="Catégories"
                          name="categories"
                          value={this.state.categories}
                          onChange={this.onChange}
                          info="Quels sont les catégories ?"
                        />
                        <label>Prérequis</label>
                        <TextFieldGroup 
                          placeholder="Prérequis"
                          name="requirements"
                          value={this.state.requirements}
                          onChange={this.onChange}
                          info="Quels sont les Prérequis ?"
                        />
                        <label>Référence</label>
                        <TextFieldGroup 
                          placeholder="Référence"
                          name="ref"
                          value={this.state.ref}
                          onChange={this.onChange}
                          info="Quelle est la Référence ?"
                        />

                        <label>NextSession ?</label>

                    </div>
                    
                    <button type="submit" className="btn btn-primary primary-btn">
                      Ajouter un parcours
                    </button>
                  </form>
                </ModalBody>
              <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );

    return (
      <div>
        <div className="wrapper">
          <SideBar />
          <div className="main-panel">
            <DbNavBar />

            <div className="content">
              <div className="container-fluid">
                <div className="col-md-12">
                  <div className="card card-tasks">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="card-header ">
                          <h4 className="card-title">Mes coures</h4>
                          <p className="card-category">Ajouter, éditer ou supprimer un cours</p>
                        </div>
                      </div>
                      <div className="col-md-3 btn-group-vertical">
                            
                          {addCourseForm}
                          

                      </div>
                    </div>
                    <div className="card-body ">
                      <div className="table-full-width">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <span className="form-check-sign"></span>
                                  </label>
                                </div>
                              </td>
                              <td>Sign contract for "What are conference organizers afraid of?"</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept thr /ough metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" checked />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Read "Following makes Medium better"</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" disabled />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Unfollow 5 enemies from twitter</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer ">
                        <hr />
                        <div className="stats">
                          <i class="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
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

export default TCCourses;