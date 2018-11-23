import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar.js';
import DbFooter from './common/DbFooter.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { classnames } from 'classnames';
import { Link } from 'react-router-dom';

import Spinner from '../common/Spinner';
import { getCourseDashboard } from '../../actions/courseActions';

import AddCourseForm from './AddCourseForm.js';
import CourseItem from './CourseItem';

class TCCourses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    console.log("launch getCourseDashboard");
    this.props.getCourseDashboard();
    console.log("launched getCourseDashboard");
  }

  toggle =() => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    const { courses, loading } = this.props.course;
    let courseItems;
    console.log(this.props.course);
    console.log(courses);

    if (courses === null || loading) {
      courseItems = <Spinner />;
    } else {
      if (courses.length > 0) {
        courseItems = courses.map(course => (
          <CourseItem key={course._id} course={course} />
        ));
      } else {
        courseItems = (
        <tr>
          <td>Vous n'avez pas encore crée de cours</td>
        </tr>);
      }
    }

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
                        <Button color="danger" onClick={this.toggle}>
                          Ajouter un cours
                        </Button>
                        <Modal className="reactstrap-modal-dashboard" isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}>
                            Ajouter un cours
                          </ModalHeader>
                          <ModalBody >
                            <AddCourseForm />
                          </ModalBody>
                          <ModalFooter>
                          </ModalFooter>
                        </Modal>
                    </div>
                    </div>
                    <div className="card-body ">
                      <div className="table-full-width">
                        <table className="table">
                          <tbody>
                          {courseItems}

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
            <DbFooter />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

TCCourses.propTypes = {
  getCourseDashboard: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  errors: state.errors
});

export default connect(mapStateToProps, {getCourseDashboard})(TCCourses);
