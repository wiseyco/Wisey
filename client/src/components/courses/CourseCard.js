import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import isEmpty from '../../validation/is-empty';
import star from '../../img/icons/star.png';
import Moment from 'react-moment';


class CourseCard extends Component {
  render() {
    const { course } = this.props;
    console.log("DESC",this.props.desc)

    return (
      <div className="col-sm-12 col-md-4">
        <div className="card">
        <div className="box">
            {/* <h6>Pro Formation</h6><br /> */}
            <h2>{this.props.title} <br /><br /><span>{this.props.categories}</span></h2>
            <Moment format="DD/MM/YYYY"><span>{this.props.date}</span></Moment>
            <br />
            <br />
            <img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />
            <br />
            <br />
            <div className="course-card-desc">
            <p>{this.props.desc}</p>
            </div>
            <hr />
            <Link to={`/course/${course._id}`}><h4>Voir la formation</h4></Link>
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
