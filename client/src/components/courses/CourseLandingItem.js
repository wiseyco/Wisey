import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';



class CourseLandingItem extends Component {

    render() {
		// const { course } = this.props;
        return (
                <div className="col-lg-3 col-md-6">
						<div className="single-publish">
							<img src="https://ict.io/wp-content/uploads/2017/02/section-image-1-1024x682.jpg" className="img-fluid" alt="" />
							<div className="top">
								<div className="mb-15 d-flex">
								<Moment format="DD/MM/YYYY">{this.props.date}</Moment>
									<span className="line">|</span>
									{this.props.location}
								</div>
								<h6 className="text-uppercase course-landing-item-title"><Link to={`/course/${this.props.id}`}>{this.props.title}</Link></h6>
							</div>
							<div className="course-landing-item-punchline">
							<p className="mb-30">{this.props.desc}</p>
							</div>
							<br/>
							<Link
							to={`/course/${this.props.id}`}
							className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><i className="fas fa-arrow-right"></i></Link>
						</div>
					</div>
        )
    }
}

CourseLandingItem.propTypes = {
	course: PropTypes.object
  };
  
  export default CourseLandingItem;
  