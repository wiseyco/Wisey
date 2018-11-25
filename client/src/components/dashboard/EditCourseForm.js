import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import isEmpty from '../../validation/isEmpty';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateCourse } from '../../actions/courseActions';

class EditCourseForm extends Component {
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

  componentWillMount() {

      const course = this.props.course;
      console.log("Hello edit course");
      console.log(course);

      // Bring categories array back to CSV
      const categoriesCSV = course.categories.join(',');

      // If course field doesnt exist, make empty string
      course.title = !isEmpty(course.title) ? course.title : '';
      course.punchline = !isEmpty(course.punchline) ? course.punchline : '';
      course.desc = !isEmpty(course.desc) ? course.desc : '';
      course.delivery = !isEmpty(course.delivery) ? course.delivery : '';
      course.targetedAudience = !isEmpty(course.targetedAudience) ? course.targetedAudience : '';
      course.price = !isEmpty(course.price) ? course.price : '';
      course.cpf = !isEmpty(course.cpf) ? course.cpf : '';
      course.time = !isEmpty(course.duration.time) ? course.duration.time : '';
      course.unit = !isEmpty(course.duration.unit) ? course.duration.unit : '';
      course.syllabus = !isEmpty(course.syllabus) ? course.syllabus[0].title : '';
      course.targetedLevel = !isEmpty(course.targetedLevel) ? course.targetedLevel : '';
      course.requirements = !isEmpty(course.requirements) ? course.requirements : '';
      course.ref = !isEmpty(course.ref) ? course.ref : '';
      course.uri = !isEmpty(course.uri) ? course.uri : '';

      // Set component fields state
      this.setState({
        title: course.title,
        punchline: course.punchline,
        desc: course.desc,
        delivery: course.delivery,
        targetedAudience: course.targetedAudience,
        price: course.price,
        cpf: course.cpf,
        time: course.time,
        unit: course.unit,
        syllabus: course.syllabus,
        targetedLevel: course.targetedLevel,
        categories: categoriesCSV,
        requirements: course.requirements,
        ref: course.ref,
        uri: course.uri
      });
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
    console.log('Submitting !');
    console.log(courseData);
    console.log(this.props.history);
    this.props.updateCourse(courseData, this.props.history);
    console.log('Submitted !');
  }

 render() {

  const { errors } = this.state;

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

  return (
    <div>
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
                    Modifier le parcours
                  </button>
                </form>
    </div>
   );
 }
}

EditCourseForm.proptypes = {
  errors: PropTypes.object.isRequired,
  updateCourse: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, { updateCourse })(withRouter(EditCourseForm));
