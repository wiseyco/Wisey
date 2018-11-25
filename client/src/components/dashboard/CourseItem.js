import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { deleteCourse } from '../../actions/courseActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EditCourseForm from './EditCourseForm.js';

import 'antd/dist/antd.css';
import { Modal, Button, Radio } from 'antd';

class CourseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal1Visible: false,
      modal2Visible: false,
    }
    // this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
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
            <Link to={`/course/${course._id}`}>
              <Button>Voir Cours</Button>
            </Link>
          </td>
          <td className="td-actions text-right">
            {/* <Button onClick={this.toggle} type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
              <i className="fa fa-edit"></i>
            </Button> */}
            <Radio.Button value="small" onClick={() => this.setModal1Visible(true)}>Editer</Radio.Button>
            <Modal
                            title="Editer le cours"
                            style={{ top: 20 }}
                            visible={this.state.modal1Visible}
                            onOk={() => this.setModal1Visible(false)}
                            onCancel={() => this.setModal1Visible(false)}
                        >
            {/* <Modal className="reactstrap-modal-dashboard" isOpen={this.state.modal} toggle={this.toggle}> */}
              {/* <ModalHeader toggle={this.toggle}>
                Modifier un cours
              </ModalHeader>
              <ModalBody > */}
                <EditCourseForm course={course} />
              {/* </ModalBody>
              <ModalFooter>
              </ModalFooter> */}
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
