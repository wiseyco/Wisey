import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class CourseLandingItem extends Component {

    render() {
		const { course } = this.props;
        return (
                <div className="col-lg-3 col-md-6">
						<div className="single-publish">
							<img src="https://ict.io/wp-content/uploads/2017/02/section-image-1-1024x682.jpg" className="img-fluid" alt="" />
							<div className="top">
								<div className="mb-15 d-flex">
								<Link to={`/course/${this.props.id}`}>3 janvier 2018</Link>
									<span className="line">|</span>
									<Link to={`/course/${this.props.id}`}>Formation Paris</Link>
								</div>
								<h6 className="text-uppercase course-landing-item-title"><Link to={`/course/${this.props.id}`}>{this.props.title}</Link></h6>
							</div>
							<div className="course-landing-item-punchline">
							<p className="mb-30">Le chef de projet multimédia gère et coordonne l’ensemble de la production du produit multimédia autour d’une équipe composée de développeurs, UX designers, webdesigners, webmarketers…</p>
							</div>
							<Link
							to={`/course/${this.props.id}`}
							className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><i class="fas fa-arrow-right"></i></Link>
						</div>
					</div>
        )
    }
}

CourseLandingItem.propTypes = {
	course: PropTypes.object.isRequired
  };
  
  export default CourseLandingItem;
  