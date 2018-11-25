import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { deleteCourse } from '../../actions/courseActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EditCourseForm from './EditCourseForm.js';

class CourseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
  }

  toggle =() => {
    this.setState({
      modal: !this.state.modal
    });
  }

  delete =() => {
    console.log("Hello");
    console.log(this.props.course._id);
    this.props.deleteCourse(this.props.course._id, this.props.history);
  }

  render() {
    const { course } = this.props;

    return (
        <tr style = {{width:"100%"}}>
          <td>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-sign"></span>
              </label>
            </div>
          </td>
          <td>{course.title}</td>
          <td>
            <Link to={`/course/${course._id}`} className="btn btn-info">
              Voir Cours
            </Link>
          </td>
          <td className="td-actions text-right">
            <Button onClick={this.toggle} type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
              <i className="fa fa-edit"></i>
            </Button>
            <Modal className="reactstrap-modal-dashboard" isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>
                Modifier un cours
              </ModalHeader>
              <ModalBody >
                <EditCourseForm course={course} />
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </Modal>
            <Button onClick={this.delete} type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
              <i className="fa fa-times"></i>
            </Button>
          </td>
        </tr>
    );
  }
}

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default connect(null, { deleteCourse })(withRouter(CourseItem));
