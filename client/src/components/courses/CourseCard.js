import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import isEmpty from '../../validation/is-empty';

class CourseCard extends Component {
  render() {
    const { course } = this.props;

    return (
      <div className="col-md-4">
        <div className="card">
        <div className="box">
            <h2>{this.props.title} <br /><br /><span>{this.props.categories}</span></h2>
            <img src="img/icons/calendar_small.png" alt="" />&nbsp;<span>{this.props.duration}{this.props.ofDays}</span>
            <br />
            <br />
            <img src="img/icons/star_small.png" alt="" />&nbsp;<span>4,6 / 5</span>
            <br />
            <br />
            <p>{this.props.punchline}</p>
            <hr />
            <Link to="/course"><h4>Voir la formation</h4></Link>
            <span>
            </span>
        </div>
    </div>
    </div>
    );
  }
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseCard;
