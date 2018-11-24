import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar.js';
import DbFooter from './common/DbFooter.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

import Spinner from '../common/Spinner';
import { getCourseDashboard } from '../../actions/courseActions';
import { createCourse } from '../../actions/courseActions';

class TCCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      punchline: '',
      desc: '',
      delivery: '',
      targetedAudience: '',
      price: '',
      cpf: false,
      time: '',
      unit: '',
      syllabus: [],
      targetedLevel: '',
      categories: '',
      requirements: '',
      ref: '',
      uri: '',
      nextSessions: [],
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    console.log(e.target.name);
    if (e.target.name === "cpf") {
      this.setState({cpf: !this.state.cpf});
    }
    else {
      this.setState({[e.target.name]: e.target.value});
    }
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('Submitted !');
    const courseData = {
      title: this.state.title,
      punchline: this.state.punchline,
      desc: this.state.desc,
      delivery: this.state.delivery,
      targetedAudience: this.state.targetedAudience,
      price: this.state.price,
      cpf: this.state.cpf,
      time: this.state.time,
      unit: this.state.unit,
      title1: this.state.syllabus,
      targetedLevel: this.state.targetedLevel,
      categories: this.state.categories,
      requirements: this.state.requirements,
      ref: this.state.ref,
      handle: this.state.uri,
      nextSessions: this.state.nextSessions,
    };

    this.props.createCourse(courseData, this.props.history);
  }

  componentDidMount() {
    this.props.getCourseDashboard();
  }

  toggle =() => {
    this.setState({
      modal: !this.state.modal
    });
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

    const { courses, loading } = this.props.course;
    let courseItems;

    if (courses === null || loading) {
      courseItems = (
        <tbody>
          <tr>
            <td>
              <Spinner />
            </td>
          </tr>
        </tbody>
      );
    } else {
      if (courses.length > 0) {
        courseItems = courses.map((course, i) => (
          <tbody key={i}>
            <tr>
              <td>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    <span className="form-check-sign"></span>
                  </label>
                </div>
              </td>
              <td>{course.title}</td>
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
        ));
      } else {
        courseItems = <h4>Vous n'avez pas encore crée de cours</h4>;
      }
    }


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
                        error={errors.title}
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
                      <TextFieldGroup
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
                        error={errors.price}
                        info="Quel est le prix de la formation en eruo"
                      />

                      <div className="form-group">
                        <input
                          className="mr-10"
                          name="cpf"
                          type="checkbox"
                          value={this.state.cpf}
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
                            placeholder="Temps"
                            name="time"
                            value={this.state.time}
                            onChange={this.onChange}
                            info="Un nombre"
                            error={errors.time}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>compté en :</label>
                          <SelectListGroup
                            placeholder=""
                            name="unit"
                            value={this.state.unit}
                            onChange={this.onChange}
                            options={durationOf}
                            error={errors.unit}
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
                        info="Quel est le Syllabus."
                        error={errors.syllabus}
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
                          error={errors.categories}
                          info="Quels sont les catégories ?"
                        />
                        <label>Prérequis</label>
                        <TextFieldGroup
                          placeholder="Prérequis"
                          name="requirements"
                          value={this.state.requirements}
                          onChange={this.onChange}
                          error={errors.requirements}
                          info="Quels sont les Prérequis ?"
                        />
                        <label>Référence</label>
                        <TextFieldGroup
                          placeholder="Référence"
                          name="ref"
                          value={this.state.ref}
                          onChange={this.onChange}
                          error={errors.ref}
                          info="Quelle est la Référence ?"
                        />
                        <label>uri</label>
                        <TextFieldGroup
                          placeholder="uri"
                          name="uri"
                          value={this.state.uri}
                          onChange={this.onChange}
                          error={errors.handle}
                          info="Quelle uri souhaitez-vous donner au parcours ?"
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
                          <h4 className="card-title">Mes cours</h4>
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
                          
                          {courseItems}

                          </table>
                        </div>
                      </div>
                      <div className="card-footer ">
                        <hr />
                        <div className="stats">
                          <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
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


TCCourses.propTypes = {
  getCourseDashboard: PropTypes.func.isRequired,
  createCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  errors: state.errors
});

export default connect(mapStateToProps, { getCourseDashboard, createCourse })(withRouter(TCCourses));