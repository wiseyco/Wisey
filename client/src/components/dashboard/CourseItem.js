import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/isEmpty';

class CourseItem extends Component {
  render() {
    const { course } = this.props;

    return (
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
    );
  }
}

CourseItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseItem;
